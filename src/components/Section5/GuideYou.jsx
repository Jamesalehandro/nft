import React from "react";
import { Circle, HStack, Text, VStack } from "@chakra-ui/react";
import { FiBold } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";

const GuideYou = () => {
  return (
    <HStack
      marginLeft={"150px"}
      marginRight={"150px"}
      justifyContent={"space-between"}
      // mb={20}
      mt={20}
      color={"#DFDFDF"}
      minHeight={"380px"}
      alignItems={"center"}
      px={10}
      background="linear-gradient(92.16deg, rgba(12, 101, 121, 0.6) -29.49%, rgba(3, 48, 94, 0.43) 133.59%)"
      borderRadius={"20px"}
    >
      <Text
        fontFamily={" Orbitron, sans-serif"}
        textAlign={"left"}
        fontSize={"32px"}
        fontWeight={500}
        lineHeight={"55px"}
        color={"#DFDFDF"}
        verticalAlign="top"
        textTransform={"capitalize"}
        width="475px"
        minH={"120px"}
      >
        We Guide You In Creating Your First NFT
      </Text>

      <VStack width="300px" pt={5} align={"flex-start"}>
        <Circle width="100px" minH="100px" background="#1193B1" mb={2}>
          <HiOutlineCube size="35px" />
        </Circle>

        <Text
          fontSize={"18px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={700}
          color={"#DFDFDF"}
          lineHeight={"22px"}
          width="100px"
          minH={"21px"}
          textAlign={"left"}
        >
          NFT ARTS
        </Text>

        <Text
          fontSize={"17px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          color={"#DFDFDF"}
          lineHeight={"22px"}
          width="273px"
          minH={"21px"}
          textAlign={"left"}
          pt={3}
        >
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored.
        </Text>
      </VStack>

      <VStack width="300px" pt={5} align={"flex-start"}>
        <Circle width="100px" minH="100px" background="#0059B5" mb={2}>
          <FiBold size="35px" />
        </Circle>

        <Text
          fontSize={"18px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={700}
          color={"#DFDFDF"}
          lineHeight={"22px"}
          width="100px"
          minH={"21px"}
          textAlign={"left"}
        >
          NFT ARTS
        </Text>

        <Text
          fontSize={"17px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          color={"#DFDFDF"}
          lineHeight={"22px"}
          width="273px"
          minH={"21px"}
          textAlign={"left"}
          pt={3}
        >
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored
        </Text>
      </VStack>
    </HStack>
  );
};

export default GuideYou;
