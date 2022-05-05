import React from "react";
import { Box, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Lady from "../../assets/images/blackLady.png";
import BlueLine1 from "../../assets/images/Vector2.png";
import BlueLine2 from "../../assets/images/Vector3.png";
import Button1 from "../../Utils/Button1";
import Button2 from "../../Utils/Button2";

const Collect = () => {
  return (
    <Box
      display={"flex"}
      py={5}
      mb={10}
      sx={{
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "60px",
        color: "#DFDFDF",
        "@media (min-width: 1280px) and (max-width: 1919px)": {
          pl: 7,
          pr: 7,
        },
      }}
    >
      <Stack
        w="40%"
        ml={40}
        mr={60}
        minH={"20vh"}
        position={"relative"}
        flexDirection={"column"}
        sx={{
          "@media (min-width: 1440px) and (max-width: 1919px)": {
            w: "60%",
            ml: 20,
          },
          "@media (min-width: 1280px) and (max-width: 1439px)": {
            w: "60%",
            ml: 20,
            mr: 10,
          },
        }}
      >
        <Text
          fontSize={"40px"}
          textAlign="left"
          textTransform="capitalize"
          w={"90%"}
          fontFamily={" Orbitron, sans-serif"}
          color={"#DFDFDF"}
          fontWeight={600}
          mb={5.5}
          lineHeight={"70px"}
          sx={{
            "@media (min-width: 1440px) and (max-width: 1919px)": {
              w: "100%",
            },
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "100%",
            },
          }}
        >
          Collect the
          <span display="inline" mx={4}>
            rarest
          </span>
          art works on the planet
        </Text>

        <Image
          src={BlueLine1}
          position={"absolute"}
          left={"250px"}
          top={"-30px"}
          width="170px"
          height="100.86px"
        />
        <Image
          src={BlueLine2}
          position={"absolute"}
          left={"255px"}
          width="170px"
          height="91.86px"
          top={"-10px"}
        />

        <Text
          fontFamily={"'Ubuntu', sans-serif;"}
          textAlign={"left"}
          width="85%"
          fontSize={"26px"}
          pb={8}
          fontWeight={400}
          lineHeight={"40px"}
        >
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored on a blockchain, a form of digital wallet.
        </Text>

        <Button1 text={"Explore"} />

        <Flex
          flexDirection="row"
          alignItems={"center"}
          justifyContent="flex-start"
          py={9}
        >
          <Stack display="flex" mr={20}>
            <Text
              fontSize={"36px"}
              textAlign="left"
              textTransform="capitalize"
              w={"100%"}
              fontFamily={" Orbitron, sans-serif"}
              color={"#DFDFDF"}
              fontWeight={500}
              mb={5.5}
            >
              30k+
            </Text>

            <Text
              fontFamily={"'Ubuntu', sans-serif;"}
              textAlign={"center"}
              width="100%"
              fontSize={"18px"}
              pb={3}
              fontWeight={400}
              lineHeight={"20px"}
            >
              Artworks
            </Text>
          </Stack>

          <Stack display="flex" mr={20}>
            <Text
              fontSize={"36px"}
              textAlign="left"
              textTransform="capitalize"
              w={"100%"}
              fontFamily={" Orbitron, sans-serif"}
              color={"#DFDFDF"}
              fontWeight={500}
              mb={5.5}
            >
              10k+
            </Text>

            <Text
              fontFamily={"'Ubuntu', sans-serif;"}
              textAlign={"center"}
              width="100%"
              fontSize={"18px"}
              pb={3}
              fontWeight={400}
              lineHeight={"20px"}
            >
              Artists
            </Text>
          </Stack>

          <Stack display="flex">
            <Text
              fontSize={"36px"}
              textAlign="left"
              textTransform="capitalize"
              w={"100%"}
              fontFamily={" Orbitron, sans-serif"}
              color={"#DFDFDF"}
              fontWeight={500}
              mb={5.5}
            >
              15k+
            </Text>

            <Text
              fontFamily={"'Ubuntu', sans-serif;"}
              textAlign={"center"}
              width="100%"
              fontSize={"18px"}
              pb={3}
              fontWeight={400}
              lineHeight={"20px"}
            >
              Auctions
            </Text>
          </Stack>
        </Flex>
      </Stack>

      {/* Section 1 image */}
      <Stack
        mb={20}
        position={"relative"}
        zIndex={2}
        sx={{
          "@media (min-width: 1280px) and (max-width: 1439px)": {
            w: "40%",
            mb: 40,
          },
          "@media (min-width: 1440px) and (max-width: 1919px)": {
            w: "40%",
            mb: 40,
            mr: 20,
          },
        }}
      >
        <div className="imageCover"></div>
        <div className="backImage">
          <Image objectFit="cover" src={Lady} alt="James" />
        </div>

        <Flex
          flexDirection={"column"}
          w={"451px"}
          minH={"186px"}
          position="absolute"
          zIndex={3}
          sx={{
            bottom: "-3.2rem",
            left: "2.7rem",
            background:
              " linear-gradient(92.17deg, #EFEFEF -3.11%, rgba(239, 239, 239, 0.5) -3.1%, rgba(239, 239, 239, 0.09) 106.54%)",
            WebkitBackdropFilter: "blur(5px)",
            backdropFilter: "blur(5px)",
            "@media (min-width: 1440px) and (max-width: 1919px)": {
              w: "320px",
              left: ".7rem",
              bottom: "-5.2rem",
            },
            "@media (min-width: 1280px) and (max-width: 1439px)": {
              w: "350px",
              left: "1.4rem",
              bottom: "-5.2rem",
            },
          }}
        >
          <div className="item">
            <Box
              opacity={"1"}
              display={"flex"}
              flexDirection={"column"}
              textAlign="left"
              gap={2}
            >
              <Text
                fontSize={"16px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
              >
                CURRENT BID
              </Text>

              <Text
                fontSize={"14px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"20px"}
              >
                1.02 ETH
              </Text>
            </Box>

            <Spacer />

            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Text
                fontSize={"16px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
                textAlign="right"
              >
                ENDS IN
              </Text>
              <Text
                fontSize={"14px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"20px"}
              >
                ADD TIMER
              </Text>
            </Box>
          </div>

          <div className="item">
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              textAlign={"left"}
            >
              <Text
                fontSize={"16px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={400}
                color={"#DFDFDF"}
              >
                OWNER
              </Text>

              <Text
                fontSize={"14px"}
                fontFamily={"'Ubuntu', sans-serif;"}
                fontWeight={700}
                color={"#DFDFDF"}
                lineHeight={"20px"}
              >
                JAMES
              </Text>
            </Box>

            <Spacer />

            <Box>
              <Button2 width={"130px"} text={"Start Bid"} />
            </Box>
          </div>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Collect;
