import * as Chakra from "@chakra-ui/react";
import { Card } from "../../components/card";
import { stacks } from "../../utils/constants";

export function Home() {
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
          <Card key={stack.id} icon={stack.icon} label={stack.label} />
        ))}
      </Chakra.Box>
    </Chakra.Flex>
  );
}
