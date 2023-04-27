import React from "react";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  Grid,
  GridItem,
  Input,
  Image,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import LandingPage from "./LandingPage";
import CommentWall from "./CommentWall";
import ProductGrid from "./ProductGrid";
import WhyUs from "./WhyUs";
import Feature from "./Feature";

const Main = () => {
  return (
    <>
      {/* Landing */}

      <LandingPage />
      {/* Carousel */}

      {/* Grid */}

      <ProductGrid />
      {/* Discount */}

      {/* Highlights */}
      {/* <Feature /> */}
      {/* Feature */}
      <WhyUs />
      {/* Opinions */}
      <CommentWall />

    </>
  );
};

export default Main;
