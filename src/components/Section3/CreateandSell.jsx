import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { MdPayment } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { GiHearts } from "react-icons/gi";

const CreateandSell = () => {
  return (
    <Box
      mb={20}
      mt={20}
      color={"#DFDFDF"}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent={"center"}
      paddingLeft={"150px"}
      paddingRight={"150px"}
      pt={10}
      sx={{
        "@media (min-width: 1280px) and (max-width: 1919px)": {
          pl: 20,
          pr: 20,
        },
      }}
    >
      <Text
        fontFamily={" Orbitron, sans-serif"}
        textAlign={"left"}
        width="456px"
        fontSize={"30px"}
        fontWeight={500}
        lineHeight={"80px"}
        verticalAlign="top"
        mb={7}
      >
        Create and sell your NFT
      </Text>
      <Flex
        width="100%"
        alignItems={"center"}
        justify={"space-between"}
        sx={{
          "@media (min-width: 1280px) and (max-width: 1439px)": {
            gap: 6,
          },

          "@media (min-width:1440px) and (max-width:1919px)": {
            gap: 6,
          },
        }}
      >
        <VStack
          w={"378px"}
          minH={"313px"}
          borderRadius={"20px"}
          background="linear-gradient(92.16deg, rgba(12, 101, 121, 0.42) -29.49%, rgba(3, 48, 94, 0.301) 133.59%)"
          alignItems={"flex-start"}
          justifyContent={"center"}
          px={10}
        >
          <MdPayment size={"50px"} color={"#00A6D5"} />

          <Text
            fontSize={"17px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={700}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            pt={6}
          >
            Connect Wallet
          </Text>

          <Text
            fontSize={"15px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            textAlign="left"
            pt={2}
          >
            A non-fungible token (NFT) is a non-interchangeable unit of data
            stored
          </Text>
        </VStack>

        <VStack
          w={"378px"}
          minH={"313px"}
          borderRadius={"20px"}
          background="linear-gradient(92.16deg, rgba(12, 101, 121, 0.42) -29.49%, rgba(3, 48, 94, 0.301) 133.59%)"
          alignItems={"flex-start"}
          justifyContent={"center"}
          px={10}
        >
          <FiShoppingBag size={"50px"} color={"#00A6D5"} />

          <Text
            fontSize={"17px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={700}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            pt={6}
          >
            NFT Marketplace
          </Text>

          <Text
            fontSize={"15px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            textAlign="left"
            pt={2}
          >
            A non-fungible token (NFT) is a non-interchangeable unit of data
            stored
          </Text>
        </VStack>

        <VStack
          w={"378px"}
          minH={"313px"}
          borderRadius={"20px"}
          background="linear-gradient(92.16deg, rgba(12, 101, 121, 0.42) -29.49%, rgba(3, 48, 94, 0.301) 133.59%)"
          alignItems={"flex-start"}
          justifyContent={"center"}
          px={10}
        >
          <GiHearts size={"50px"} color={"#00A6D5"} />

          <Text
            fontSize={"17px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={700}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            pt={6}
          >
            Collect NFT
          </Text>

          <Text
            fontSize={"15px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"22px"}
            textAlign="left"
            pt={2}
          >
            A non-fungible token (NFT) is a non-interchangeable unit of data
            stored
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CreateandSell;
