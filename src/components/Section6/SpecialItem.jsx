import {
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SpecialItem = () => {
  return (
    <VStack
      color="#DFDFDF"
      border="2px solid blue"
      marginLeft={"150px"}
      marginRight={"150px"}
      mt={20}
      minH={"200px"}
    >
      <HStack width={"100%"} border="2px solid green" marginBottom={"80px"}>
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

      <HStack>
        <Text>Trending</Text>
        <Text>Popular</Text>
        <Text>Favourites</Text>
        <Text>Saved</Text>
      </HStack>

      <Flex>
        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>

        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>

        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>

        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>

        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>

        <VStack>
          <Image />

          <HStack>
            <VStack>
              <Text>Serickism.</Text>
              <Text>By Angie_00</Text>
            </VStack>

            <Button>Bid</Button>
          </HStack>

          <HStack>
            <Flex>
              <Image />
              <Text>0.23ETH</Text>
            </Flex>
            <Text>$8,976</Text>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SpecialItem;
