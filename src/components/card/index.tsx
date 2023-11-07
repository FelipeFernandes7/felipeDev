import * as Chakra from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  label: string;
}
export function Card({ label, icon }: CardProps) {
  return (
    <Chakra.Flex
      w={"full"}
      h={{ md: "200px", base: "150px" }}
      maxW={{ md: "200px", base: "150px" }}
      flexDirection={"column"}
      borderRadius={"lg"}
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.1)",
        transition: "all 0.3s ease",
      }}
      sx={{
        filter: "drop-shadow(0 0 5px rgba(8, 145, 178, 0.8))",
        animation: "glow 2.5s ease-in-out infinite",
        "@keyframes glow": {
          "0%": {
            filter: "drop-shadow(0 0 5px rgba(8, 145, 178, 0.8))",
          },
          "50%": {
            filter: "drop-shadow(0 0 15px rgba(8, 145, 178, 1))",
          },
          "100%": {
            filter: "drop-shadow(0 0 5px rgba(8, 145, 178, 0.8))",
          },
        },
      }}
    >
      <Chakra.Box
        w={"full"}
        h={"full"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        borderRadius={"lg"}
      >
        <Chakra.Icon as={icon} fontSize={"3rem"} color={"#fff"} />
        <Chakra.Text
          mt={"1rem"}
          fontSize={"1rem"}
          textAlign={"center"}
          color={"#fff"}
          sx={{
            textShadow: `
      0 0 5px #fff, 
      0 0 5px #fff, 
      0 0 5px rgb(8 145 178), 
      0 0 5px rgb(8 145 178), 
      0 0 5px rgb(8 145 178), 
      0 0 5px rgb(8 145 178), 
      0 0 8px rgb(8 145 178)
    `,
          }}
        >
          {label}
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Flex>
  );
}
