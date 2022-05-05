import React from "react";
import { Flex, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import bicycle from "../../assets/images/bicycle.jpg";
import surprisedpaint from "../../assets/images/surprised.jpg";
import cat from "../../assets/images/cat.jpg";
import cartoon from "../../assets/images/cartoon.jpg";
import whitepaint from "../../assets/images/whitepaint.jpg";
import random from "../../assets/images/random.jpg";
import diamondShape from "../../assets/images/diamondshape.png";
import Button2 from "../../Utils/Button2";

const SpecialItem = () => {
  return (
    <VStack
      color="#DFDFDF"
      marginLeft={"150px"}
      marginRight={"150px"}
      mt={"170px"}
      minH={"200px"}
      sx={{
        "@media (min-width: 1280px) and (max-width: 1919px)": {
          ml: 20,
          mr: 20,
        },
      }}
    >
      <HStack width={"100%"} marginBottom={"50px"}>
        <Text
          fontFamily={" Orbitron, sans-serif"}
          textAlign={"left"}
          fontSize={"32px"}
          fontWeight={500}
          lineHeight={"55px"}
          color={"#DFDFDF"}
          textTransform={"capitalize"}
        >
          Special Items For You
        </Text>

        <Spacer />

        <Text
          fontSize={"18px"}
          fontFamily={"'Ubuntu', sans-serif;"}
          fontWeight={400}
          color={"#DFDFDF"}
          lineHeight={"22px"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          See all
        </Text>
      </HStack>

      <HStack
        width={"100%"}
        align="center"
        justify={"space-around"}
        fontSize={"18px"}
        fontFamily={"'Ubuntu', sans-serif;"}
        fontWeight={400}
        color={"#DFDFDF"}
        lineHeight={"22px"}
        verticalAlign={"top"}
        paddingBottom={"40px"}
      >
        <Text cursor={"pointer"}>Trending</Text>
        <Text cursor={"pointer"}>Popular</Text>
        <Text cursor={"pointer"}>Favourites</Text>
        <Text cursor={"pointer"}>Saved</Text>
      </HStack>

      <Flex
        width={"100%"}
        flexWrap={"wrap"}
        align={"center"}
        justify={"space-between"}
        gap={10}
      >
        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={bicycle}
            width={"100%"}
            borderRadius={"20px"}
            sx={{
              "@media (min-width: 1280px) and (max-width: 1439px)": {
                h: "300px",
              },
              "@media (min-width:1440px) and (max-width:1919px)": {
                h: "300px",
              },
            }}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>

            <Spacer />

            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>

        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={surprisedpaint}
            width={"100%"}
            height={"300px"}
            borderRadius={"20px"}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>
            <Spacer />
            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />

              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>

        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={cat}
            width={"100%"}
            height={"300px"}
            borderRadius={"20px"}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>

              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>
            <Spacer />
            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>

        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={cartoon}
            width={"100%"}
            borderRadius={"20px"}
            height={"300px"}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>

              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>
            <Spacer />
            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>

        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={whitepaint}
            width={"100%"}
            borderRadius={"20px"}
            height={"300px"}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>

              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>
            <Spacer />
            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>

        <VStack
          w={"31%"}
          border="3px solid #00556C"
          borderRadius={"20px"}
          sx={{
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "30%",
            },
            "@media (min-width:1440px) and (max-width:1919px)": {
              w: "30%",
            },
          }}
        >
          <Image
            src={random}
            width={"100%"}
            borderRadius={"20px"}
            height={"300px"}
          />

          <HStack w={"100%"} px={5} py={5}>
            <VStack>
              <Text
                fontSize={"20px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                Serickism.
              </Text>

              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                width="117px"
                minH={"28px"}
                textAlign={"left"}
              >
                By Angie_00
              </Text>
            </VStack>
            <Spacer />

            <Button2 width={"100px"} text={"Bid"} />
          </HStack>

          <HStack w={"100%"} px={5} pb={5}>
            <Flex align={"center"} gap={3}>
              <Image src={diamondShape} />
              <Text
                fontSize={"15px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                lineHeight={"25px"}
                minH={"28px"}
                textAlign={"left"}
              >
                0.23ETH
              </Text>
            </Flex>
            <Spacer />
            <Text
              fontSize={"15px"}
              fontFamily={"'Ubuntu', sans-serif;"}
              fontWeight={700}
              color={"#DFDFDF"}
              lineHeight={"25px"}
              minH={"28px"}
              textAlign={"left"}
            >
              $8,976
            </Text>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SpecialItem;
