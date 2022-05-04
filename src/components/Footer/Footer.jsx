import {
  Box,
  Circle,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsXDiamond } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      width="100%"
      minH={"500px"}
      display="flex"
      align="center"
      justify="center"
      background="#0C2D3E"
      marginTop={"200px"}
      flexDirection={"column"}
      color={"#DFDFDF"}
    >
      <Flex width="100%">
        <VStack
          w={"50%"}
          minH={"200px"}
          align="flex-start"
          ml={20}
          mt={10}
          mb={3}
          gap={7}
        >
          <Flex alignItems="center" w="20%" gap={3}>
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

          <Text
            width="466px"
            minHeight="26px"
            fontSize="24px"
            fontWeight={400}
            textAlign="left"
            lineHeight="45px"
            fontFamily={"'Ubuntu', sans-serif;"}
          >
            We are a goal driven organisation. Drummers uses the latest and
            secure inventions in NFT and augmented reality, to create unique
            digital art pieces.
          </Text>

          <HStack width={"100%"} gap={4} pt={6}>
            <Circle
              zIndex={1000}
              p={2}
              cursor={"pointer"}
              background={"#0098B8"}
            >
              <RiFacebookFill color={"white"} size="20px " />
            </Circle>

            <Circle
              zIndex={1000}
              p={2}
              cursor={"pointer"}
              background={"#0098B8"}
            >
              <AiFillInstagram size="20px" color={"white"} />
            </Circle>

            <Circle
              zIndex={1000}
              p={2}
              cursor={"pointer"}
              background={"#0098B8"}
            >
              <FaTwitter size="20px" color={"white"} />
            </Circle>
          </HStack>
        </VStack>

        <HStack
          width="50%"
          align="flex-start"
          mt={10}
          mb={3}
          gap={5}
          color={"#DFDFDF"}
        >
          <VStack w={"30%"} minH={"100%"} align="flex-start">
            <Text
              width="80px"
              minHeight="21px"
              fontSize="14px"
              fontWeight={700}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              mb={5}
              verticalAlign={"top"}
              cursor={"pointer"}
            >
              Gallery
            </Text>

            <Stack
              minHeight="21px"
              fontSize="18px"
              fontWeight={400}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              verticalAlign={"top"}
              fontStyle={"normal"}
              gap={3}
            >
              <Text cursor={"pointer"}>Menu</Text>
              <Text cursor={"pointer"}>Feature</Text>
              <Text cursor={"pointer"}>Roadmap</Text>
            </Stack>
          </VStack>

          <VStack w={"30%"} minH={"100%"} align="flex-start">
            <Text
              width="80px"
              minHeight="21px"
              fontSize="14px"
              fontWeight={700}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              mb={5}
              verticalAlign={"top"}
              cursor={"pointer"}
            >
              Media
            </Text>

            <Stack
              minHeight="21px"
              fontSize="18px"
              fontWeight={400}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              verticalAlign={"top"}
              fontStyle={"normal"}
              gap={3}
            >
              <Text cursor={"pointer"}>Blogs</Text>
              <Text cursor={"pointer"}>News</Text>
              <Text cursor={"pointer"}>Press</Text>
            </Stack>
          </VStack>

          <VStack w={"30%"} minH={"100%"} align="flex-start">
            <Text
              width="80px"
              minHeight="21px"
              fontSize="14px"
              fontWeight={700}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              mb={5}
              verticalAlign={"top"}
              cursor={"pointer"}
            >
              Developers
            </Text>

            <Stack
              minHeight="21px"
              fontSize="18px"
              fontWeight={400}
              textAlign="left"
              fontFamily={"'Ubuntu', sans-serif;"}
              lineHeight="27px"
              verticalAlign={"top"}
              fontStyle={"normal"}
              gap={3}
            >
              <Text cursor={"pointer"}>Testnet</Text>
              <Text cursor={"pointer"}>Github</Text>
              <Text cursor={"pointer"}>Documental </Text>
            </Stack>
          </VStack>
        </HStack>
      </Flex>

      <Box
        width="90%"
        borderTop="2px solid #0088A880"
        marginLeft={"60px"}
        marginTop={"50px"}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        paddingTop={"30px"}
        paddingBottom={"20px"}
      >
        <Text
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          fontSize="18px"
          lineHeight="27px"
          color={"#DFDFDF"}
          pr={2}
        >
          Copyright 2021
        </Text>
        <Text
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          fontStyle={"italic"}
          fontSize="18px"
          lineHeight="27px"
          color={"#DFDFDF"}
          verticalAlign={"top"}
        >
          Drummers
        </Text>
        <Text
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          fontSize="18px"
          lineHeight="27px"
          color={"#DFDFDF"}
          pl={2}
        >
          All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
