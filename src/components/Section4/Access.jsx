import React from "react";
import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Wallpaint from "../../assets/images/wallpaint.png";
import paintedlady from "../../assets/images/paintedlady.png";
import doorpaint from "../../assets/images/doorpaint.png";
import horizonpaint from "../../assets/images/horizonpaint.png";

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
    >
      {/* Merged Images */}
      <Flex flexWrap={"wrap"} width="50%" minH={"100px"} position="relative">
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
          Get acess to all the best articules on nft
        </Text>

        <Text
          fontSize={"20px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          color={"#DFDFDF"}
          lineHeight={"35px"}
          width="510px"
          minH={"120px"}
          textAlign={"left"}
          paddingBottom={"50px"}
        >
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored on a blockchain, a form of digital currency
        </Text>

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
          See More
        </Button>
      </VStack>
    </HStack>
  );
};

export default Access;
