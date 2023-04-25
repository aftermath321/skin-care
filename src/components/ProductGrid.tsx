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
} from "@chakra-ui/react";
import ProductCard, {Product}  from "./ProductCard";

const lipstick: Product = {
  name: "Lipstick",
  price: 15,
  discounted: true,
  newPrice: 10,
  photoURL: "/images/lipstick.jpeg",
  rating: 5,
};
const curology: Product = {
  name: "Curology",
  price: 30,
  discounted: false,
  newPrice: 10,
  photoURL: "/images/curology.jpg",
  rating: 4,
};
const conditioner: Product = {
  name: "Hair conditioner",
  price: 25,
  discounted: true,
  newPrice: 20,
  photoURL: "/images/spray.jpg",
  rating: 5,
};

const ProductGrid = () => {
  return (
    <>
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
      <Grid
        w="100%"
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="1rem"
        display="flex"
        justifyContent="space-around"
        p="3rem"
      >
        <ProductCard product={lipstick} />
        <ProductCard product={curology} />
        <ProductCard product={conditioner} />
        <ProductCard product={lipstick} />
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
        p="3rem"
        marginY="1rem"
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
        display="flex"
        justifyContent="space-around"
      >
        <ProductCard product={curology} />
        <ProductCard product={conditioner} />
        <ProductCard product={lipstick} />
        <ProductCard product={curology} />
      </Grid>
    </>
  );
};

export default ProductGrid;
