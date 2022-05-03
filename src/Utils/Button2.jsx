import React from "react";
import { Button } from "@chakra-ui/react";

const Button2 = ({ width, text }) => {
  return (
    <Button
      _hover={{
        bgImage: "none",
        border: "2px solid #E704C4",
        background: "transparent",
      }}
      _focus={{
        border: "2px solid #E704C4",
        background: "transparent",
      }}
      _active={{
        background: "transparent",
        border: "2px solid #fff",
      }}
      color={"#DFDFDF"}
      borderTopLeftRadius={"20px"}
      borderTopRightRadius={"2px"}
      borderBottomRightRadius={"20px"}
      borderBottomLeftRadius={"2px"}
      size={"md"}
      w={width}
      h={"50px"}
      padding={"10px"}
      background={"transparent"}
      sx={{ transition: "all .5s ease-in-out", cursor: "pointer" }}
      border={"2px solid #E704C4"}
    >
      {text}
    </Button>
  );
};

export default Button2;
