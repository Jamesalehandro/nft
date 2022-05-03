import React from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import Collect from "../components/Section1/Collect";
import Brands from "../components/Section2/Brands";
import CreateandSell from "../components/Section3/CreateandSell";
import Access from "../components/Section4/Access";
import GuideYou from "../components/Section5/GuideYou";

const Home = () => {
  return (
    <Container
      maxW="100%"
      minH="100vh"
      textAlign={"center"}
      p="0"
      bgImage={
        "linear-gradient(to bottom right,#39143D,#121212, #121213,#121212,#112B31,#112B31,#121A1C)"
      }
    >
      {/* NavBar */}
      <NavBar />

      {/* Section 1 */}
      <Collect />

      {/* Brands Section */}
      <Brands />

      {/* Create and sell section */}
      <CreateandSell />

      {/* Get Access section */}
      <Access />

      {/* We guide you section */}
      <GuideYou />
    </Container>
  );
};

export default Home;
