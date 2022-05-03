import React from "react";
import { Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { BsXDiamond } from "react-icons/bs";
import Button1 from "../../Utils/Button1";

const NavBar = () => {
  return (
    <Box
      display="flex"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      color={"white"}
      pt={7}
    >
      <Flex alignItems="center" w="10%" gap={3}>
        <BsXDiamond size="20px" cursor={"pointer"} />
        <Text
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          fontStyle={"italic"}
          fontSize="14px"
          lineHeight="20px"
          color={"#DFDFDF"}
          cursor={"pointer"}
        >
          Drummers
        </Text>
      </Flex>

      <Flex
        w={"50%"}
        fontFamily={"'Ubuntu', sans-serif;"}
        fontWeight={400}
        fontSize="16px"
        lineHeight="20px"
        justifyContent="space-between"
        color="#DFDFDF"
      >
        <Text cursor={"pointer"}>Home</Text>
        <Text cursor={"pointer"}>Gallery</Text>
        <Text cursor={"pointer"}>Auctions</Text>
        <Text cursor={"pointer"}>About Us</Text>
        <Text cursor={"pointer"}>FAQ</Text>
        <Text cursor={"pointer"}>Terms</Text>
      </Flex>

      <Stack>
        <Button1 text={"Join us"} />
      </Stack>
    </Box>
  );
};

export default NavBar;
