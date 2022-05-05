import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import SuperHuman from "../../assets/images/Superhuman.png";
import CoinGecko from "../../assets/images/CoinGecko.png";
import Binance from "../../assets/images/binance.png";
import Cardano from "../../assets/images/Cardano.png";

const Brands = () => {
  return (
    <Box
      mb={20}
      mt={"100px"}
      color={"#DFDFDF"}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent={"center"}
      paddingLeft={"150px"}
      paddingRight={"150px"}
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
        mb={6}
      >
        Brands that trust us
      </Text>
      <Box
        flexDirection="row"
        display="flex"
        w={"100%"}
        minH={"200px"}
        justifyContent={"space-between"}
        fontSize={"20px"}
        fontFamily={"'Ubuntu', sans-serif;"}
        fontWeight={400}
        color={"#DFDFDF"}
        borderRadius={"15px"}
        background="linear-gradient(91.7deg, rgba(12, 101, 121, 0.238) -47.15%, rgba(5, 59, 100, 0.100219) 129.52%, rgba(3, 48, 94, 0.063) 139.99%)"
      >
        <VStack w="20%" gap={3} justify="center">
          <Image src={SuperHuman} boxSize={"80px"} />
          <Text>SUPER HUMAN</Text>
        </VStack>

        <VStack w="20%" gap={3} justify="center">
          <Image src={CoinGecko} boxSize={"80px"} />
          <Text>COIN GECKO</Text>
        </VStack>

        <VStack w="20%" gap={3} justify="center">
          <Image src={Binance} boxSize={"80px"} />
          <Text>BINANCE</Text>
        </VStack>

        <VStack w="20%" gap={3} justify="center">
          <Image src={Cardano} boxSize={"80px"} />
          <Text>CARDANO</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Brands;
