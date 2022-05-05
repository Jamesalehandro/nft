import React from "react";
import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Wallpaint from "../../assets/images/wallpaint.png";
import paintedlady from "../../assets/images/paintedlady.png";
import doorpaint from "../../assets/images/doorpaint.png";
import horizonpaint from "../../assets/images/horizonpaint.png";
import Button1 from "../../Utils/Button1";

const Access = () => {
  return (
    <HStack
      paddingLeft={"150px"}
      paddingRight={"150px"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      mb={20}
      mt={20}
      pt={20}
      sx={{
        "@media (min-width: 1280px) and (max-width: 1919px)": {
          pl: 20,
          pr: 20,
        },
      }}
    >
      {/* Merged Images */}
      <Flex
        flexWrap={"wrap"}
        width="50%"
        minH={"100px"}
        position="relative"
        sx={{
          "@media (min-width: 1280px) and (max-width: 1439px)": {
            width: "60%",
          },
          "@media (min-width:1440px) and (max-width:1919px)": {
            width: "60%",
          },
        }}
      >
        <Image src={Wallpaint} zIndex={2} />
        <Image src={paintedlady} zIndex={2} />
        <Image src={doorpaint} zIndex={3} />
        <Image
          src={horizonpaint}
          position="absolute"
          left="258px"
          top="290px"
          zIndex={1}
        />
      </Flex>

      <VStack
        width="50%"
        minH={"100px"}
        position="relative"
        alignItems={"flex-start"}
        sx={{
          "@media (min-width:1440px) and (max-width:1919px)": {
            width: "40%",
          },
          "@media (min-width: 1280px) and (max-width: 1439px)": {
            width: "40%",
          },
        }}
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
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              fontSize: "30px",
              width: "100%",
            },
          }}
        >
          Get acess to all the best articules on nft
        </Text>

        <Text
          fontSize={"20px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          color={"#DFDFDF"}
          lineHeight={"35px"}
          textAlign={"left"}
          width="510px"
          minH={"120px"}
          paddingBottom={"50px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              fontSize: "20px",
              width: "100%",
            },
          }}
        >
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored on a blockchain, a form of digital currency
        </Text>

        <Button1 text={"See more"} />
      </VStack>
    </HStack>
  );
};

export default Access;
