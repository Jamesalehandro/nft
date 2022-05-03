import React from "react";
import { Button } from "@chakra-ui/react";

const Button1 = ({ text }) => {
  return (
    <Button
      colorScheme={"purple"}
      bgImage={"linear-gradient(to right, #890DBF , #C427BD)"}
      _hover={{
        bgImage: "none",
        border: "none",
        transform: "scale(0.98)",
      }}
      _focus={{
        border: "none",
      }}
      color={"#DFDFDF"}
      borderTopLeftRadius={"20px"}
      borderTopRightRadius={"2px"}
      borderBottomRightRadius={"20px"}
      borderBottomLeftRadius={"2px"}
      size={"md"}
      w={"170px"}
      padding={"10px"}
      sx={{ transition: "all .5s ease-in-out", cursor: "pointer" }}
    >
      {text}
    </Button>
  );
};

export default Button1;
