import React from "react";
import { Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { BsXDiamond } from "react-icons/bs";

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
          Join us
        </Button>
      </Stack>
    </Box>
  );
};

export default NavBar;
