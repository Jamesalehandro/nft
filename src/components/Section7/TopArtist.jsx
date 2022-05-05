import React from "react";
import { VStack, Text, HStack, Image, Flex, Box } from "@chakra-ui/react";
import purplepaint from "../../assets/images/purplepaint.png";
import shellcolor from "../../assets/images/shellcolor.png";
import lastman from "../../assets/images/lastman.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import Button2 from "../../Utils/Button2";
import Button1 from "../../Utils/Button1";

const TopArtist = () => {
  return (
    <VStack
      width={"100%"}
      align="flex-start"
      mt={"150px"}
      paddingLeft={"150px"}
      paddingRight={"150px"}
      minH={"150px"}
      position="relative"
      sx={{
        "@media (min-width: 1280px) and (max-width: 1919px)": {
          pl: 20,
          pr: 20,
        },
      }}
    >
      <div className="filterblur"></div>
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
        Top Artists
      </Text>

      <HStack
        w={"100%"}
        color="#DFDFDF"
        align={"flex-start"}
        justify={"space-between"}
      >
        <VStack
          width="315px"
          minH="400px"
          border="3px solid #0DCAFF"
          position="relative"
          align={"flex-start"}
          pb={10}
          borderRadius={"20px"}
        >
          <Image src={purplepaint} />
          <Image
            src={profile1}
            position="absolute"
            top={"70px"}
            left={"30px"}
          />

          <Text
            pt={12}
            pl={"30px"}
            fontSize={"20px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
          >
            Annie Joy
          </Text>

          <Text
            fontSize={"16px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
            pl={"30px"}
            pr={"30px"}
            pb={"15px"}
          >
            I am very passonate about sharing my art with the work. My art is my
            escape.
          </Text>

          <Flex
            width={"100%"}
            pl={"30px"}
            pr={"30px"}
            align={"center"}
            justify={"space-between"}
            pb={10}
          >
            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Arts</Text>
              <Text fontWeight={600}>32</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Followers</Text>
              <Text fontWeight={600}>3,000</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Following</Text>
              <Text fontWeight={600}>100</Text>
            </Box>
          </Flex>

          <Box pl={"30px"}>
            <Button2 width="100px" text={"Follow"} />
          </Box>
        </VStack>

        <VStack
          width="457px"
          minH="400px"
          border="3px solid #0DCAFF"
          position="relative"
          align={"flex-start"}
          pb={10}
          borderRadius={"20px"}
        >
          <Image src={shellcolor} />
          <Image
            src={profile2}
            position="absolute"
            top={"50px"}
            left={"30px"}
          />

          <Text
            pt={20}
            pb={"10px"}
            pl={"30px"}
            fontSize={"20px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
          >
            Annie Joy
          </Text>

          <Text
            fontSize={"20px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
            pl={"30px"}
            pr={"30px"}
            pb={"25px"}
          >
            I am very passonate about sharing my art with the work. My art is my
            escape. let’s create magic together.
          </Text>

          <Flex
            width={"100%"}
            pl={"30px"}
            pr={"30px"}
            align={"center"}
            justify={"space-between"}
            pb={10}
          >
            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Arts</Text>
              <Text fontWeight={600}>32</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Followers</Text>
              <Text fontWeight={600}>3,000</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Following</Text>
              <Text fontWeight={600}>100</Text>
            </Box>
          </Flex>

          <Box pl={"30px"}>
            <Button2 width="100px" text={"Follow"} />
          </Box>
        </VStack>

        <VStack
          width="315px"
          minH="400px"
          border="3px solid #0DCAFF"
          position="relative"
          align={"flex-start"}
          pb={10}
          borderRadius={"20px"}
        >
          <Image src={lastman} />
          <Image
            src={profile3}
            position="absolute"
            top={"70px"}
            left={"30px"}
          />

          <Text
            pt={12}
            pl={"30px"}
            fontSize={"20px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
          >
            Annie Joy
          </Text>

          <Text
            fontSize={"16px"}
            fontFamily={"'Ubuntu', sans-serif;"}
            fontWeight={400}
            color={"#DFDFDF"}
            lineHeight={"27px"}
            textAlign={"left"}
            pl={"30px"}
            pr={"30px"}
            pb={"15px"}
          >
            I am very passonate about sharing my art with the work. My art is my
            escape.
          </Text>

          <Flex
            width={"100%"}
            pl={"30px"}
            pr={"30px"}
            align={"center"}
            justify={"space-between"}
            pb={10}
          >
            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Arts</Text>
              <Text fontWeight={600}>32</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Followers</Text>
              <Text fontWeight={600}>3,000</Text>
            </Box>

            <Box
              fontSize={"16px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={400}
              color={"#DFDFDF"}
              lineHeight={"27px"}
              textAlign={"left"}
            >
              <Text>Following</Text>
              <Text fontWeight={600}>100</Text>
            </Box>
          </Flex>

          <Box pl={"30px"}>
            <Button2 width="100px" text={"Follow"} />
          </Box>
        </VStack>
      </HStack>

      <Box width={"100%"} pt={"50px"}>
        <Button1 text={"See all artists"} />
      </Box>
    </VStack>
  );
};

export default TopArtist;
