import React from "react";
import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Button1 from "../../Utils/Button1";
import Diamond from "../../assets/images/diamond.png";

const NeverMiss = () => {
  return (
    <VStack
      borderTop={"2px solid"}
      borderImageSource="linear-gradient(265.33deg, rgba(218, 48, 188, 0.3) -6.36%, rgba(126, 8, 192, 0.3) 101.72%)"
      width={"100%"}
      align="flex-start"
      mt={"200px"}
      pt={"70px"}
      paddingLeft={"150px"}
      paddingRight={"150px"}
      minH={"150px"}
      position="relative"
    >
      <Text
        fontFamily={" Orbitron, sans-serif"}
        textAlign={"left"}
        fontSize={"35px"}
        fontWeight={500}
        lineHeight={"45px"}
        color={"#DFDFDF"}
        verticalAlign="top"
        textTransform={"capitalize"}
        width="610px"
        minH={"120px"}
        pb={10}
      >
        Never miss a drop
      </Text>
      <HStack
        color={"#DFDFDF"}
        width={"100%"}
        minH={"562px"}
        align="flex-start"
        p={10}
        pt={"70px"}
        px={"70px"}
        justifyContent={"flex-start"}
        background=" linear-gradient(88.4deg, #EFEFEF -0.06%, rgba(239, 239, 239, 0.17) -0.05%, rgba(239, 239, 239, 0.1) 99.83%)"
        borderRadius={"20px"}
      >
        <VStack align="flex-start" gap={10} mr={10}>
          <Text
            fontSize={"30px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"55px"}
            textAlign={"left"}
            width="373px"
            minH={"120px"}
          >
            Join our ever growing community of experts and collect NFTs with us.
          </Text>

          <Button1 text={"Join us on Discord"} />
        </VStack>

        <Box>
          <Image src={Diamond} marginLeft={"100px"} marginRight={"100px"} />
        </Box>

        <VStack align={"flex-start"} gap={10} width={"40%"}>
          <Text
            fontSize={"25px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"55px"}
            textAlign={"left"}
            width="373px"
            minH={"120px"}
          >
            Latest winners
          </Text>
          <HStack
            width={"100%"}
            borderRadius={"15px"}
            background="linear-gradient(94.94deg, rgba(169, 159, 137, 0.35) -22.6%, rgba(227, 214, 186, 0) 120.62%)"
            gap={3}
          >
            <Center
              borderRadius={"15px"}
              width="90px"
              minH={"70px"}
              background="#B2985E"
            >
              <Text
                cursor={"pointer"}
                fontFamily={"Ubuntu"}
                fontWeight={700}
                fontSize="32px"
                lineHeight="60px"
              >
                1st
              </Text>
            </Center>

            <Text
              fontFamily={"Ubuntu"}
              fontWeight={400}
              fontSize="24px"
              lineHeight="60px"
            >
              @fishmouthjosh
            </Text>
          </HStack>

          <HStack
            width={"100%"}
            borderRadius={"15px"}
            background="linear-gradient(94.94deg, rgba(169, 159, 137, 0.35) -22.6%, rgba(227, 214, 186, 0) 120.62%)"
            gap={3}
          >
            <Center
              borderRadius={"15px"}
              width="90px"
              minH={"70px"}
              background="#5A6787"
            >
              <Text
                cursor={"pointer"}
                fontFamily={"Ubuntu"}
                fontWeight={700}
                fontSize="32px"
                lineHeight="60px"
              >
                2nd
              </Text>
            </Center>

            <Text
              fontFamily={"Ubuntu"}
              fontWeight={400}
              fontSize="24px"
              lineHeight="60px"
            >
              @fishheadmanny
            </Text>
          </HStack>

          <HStack
            width={"100%"}
            borderRadius={"15px"}
            background="linear-gradient(94.94deg, rgba(169, 159, 137, 0.35) -22.6%, rgba(227, 214, 186, 0) 120.62%)"
            gap={3}
          >
            <Center
              borderRadius={"15px"}
              width="90px"
              minH={"70px"}
              background="#80756B"
            >
              <Text
                cursor={"pointer"}
                fontFamily={"Ubuntu"}
                fontWeight={700}
                fontSize="32px"
                lineHeight="60px"
              >
                3rd
              </Text>
            </Center>

            <Text
              fontFamily={"Ubuntu"}
              fontWeight={400}
              fontSize="24px"
              lineHeight="60px"
            >
              @halfmanhalfbook
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default NeverMiss;
