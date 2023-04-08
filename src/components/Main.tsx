import React from "react";
import Landing from "../assets/images/landing.jpeg";
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
} from "@chakra-ui/react";
import ProductCard, { Product } from "./ProductCard";
import LandingPage from "./LandingPage";

const product: Product = {
  name: "Lipstick",
  price: 15,
  discounted: true,
  newPrice: 10,
  photoURL: "../assets/images/lipstick.jpeg",
  rating: 4.5,
};

const Main = () => {
  return (
    <>
      {/* Landing */}

      <LandingPage />
      {/* Carousel */}

      {/* Grid */}
      <Heading
        as="h4"
        h="2rem"
        marginTop="1rem"
        fontSize="xl"
        justifyContent="center"
        display="flex"
      >
        Popular Products
      </Heading>
      <Heading
        as="h3"
        h="3rem"
        fontSize="3xl"
        justifyContent="center"
        display="flex"
      >
        Best Sellers
      </Heading>
      <Grid w="100%" h="50vh" templateColumns="repeat(4, 1fr)" gap="1rem">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </Grid>
      <Heading
        mt="1rem"
        as="h4"
        h="2rem"
        fontSize="xl"
        justifyContent="center"
        display="flex"
      >
        Occasion
      </Heading>
      <Heading
        as="h3"
        h="3rem"
        fontSize="3xl"
        justifyContent="center"
        display="flex"
      >
        Best Prices
      </Heading>
      <Grid
        w="100%"
        h="50vh"
        marginBottom="1rem"
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
      >
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </Grid>
      {/* Discount */}
      {/* Opinions */}
      {/* Feature */}
    </>
  );
};

export default Main;
