import * as Chakra from "@chakra-ui/react";
import { Card } from "../../components/card";
import { stacks } from "../../utils/constants";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Home() {
  const element = useRef<HTMLDivElement>(null);
  const timelines: Record<string, gsap.core.Timeline> = {};

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // teste
    gsap.context(() => {
      stacks.forEach((stack) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: `#stack-${stack.id}`,
              scrub: true,
              start: "top 650",
              end: "bottom 750px",
            },
          })
          .fromTo(
            `#stack-${stack.id}`,
            {
              opacity: 0,
              y: 160,
            },
            {
              opacity: 1,
              y: 0,
              ease: "power1.inOut",
            },
          );

        timelines[stack.id] = tl;
      });
    });

    return () => {
      Object.values(timelines).forEach((tl) => tl.kill());
    };
  }, [stacks]);
  return (
    <Chakra.Flex alignItems={"center"} w={"full"} flexDirection={"column"}>
      <Chakra.Text
        fontSize={"1.5rem"}
        fontWeight={700}
        mt={"1.5rem"}
        color={"rgb(8 145 178)"}
      >
        Minhas Tecnologias
      </Chakra.Text>
      <Chakra.Box
        ref={element}
        w={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        mt={"2rem"}
        p={"1rem"}
        gap={"1.5rem"}
        borderRadius="md"
        transition={"all linear 0.3s ease-in"}
      >
        {stacks.map((stack) => (
          <Card
            key={stack.id}
            className="card"
            id={`stack-${stack.id}`}
            icon={stack.icon}
            label={stack.label}
          />
        ))}
      </Chakra.Box>
    </Chakra.Flex>
  );
}
