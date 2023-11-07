import * as Chakra from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Chakra.Flex
      w={"full"}
      h={"5rem"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={{ md: "1.5rem", base: "1.5rem" }}
      p={"0.8rem"}
      borderBottomColor={"#353b48"}
      borderBottomWidth={"1px"}
    >
      <Chakra.Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        fontSize={"1.5rem"}
        fontWeight={700}
        color={"#fff"}
        sx={{
          textShadow: `
            0 0 10px #fff, 
            0 0 10px #fff, 
            0 0 10px rgb(8 145 178), 
            0 0 10px rgb(8 145 178), 
            0 0 10px rgb(8 145 178), 
            0 0 10px rgb(8 145 178), 
            0 0 15px rgb(8 145 178)
          `,
        }}
      >
        ⌘
      </Chakra.Box>
      <Chakra.Text
        w={"full"}
        display={"flex"}
        justifyContent={{ base: "center", md: "flex-start" }}
        fontSize={"1.5rem"}
        fontWeight={700}
        color={"rgb(8 145 178)"}
      >
        <Link style={{ textDecoration: "none", width: "100%" }} to={"/"}>
          Felipe Fernandes
        </Link>
      </Chakra.Text>
    </Chakra.Flex>
  );
}
