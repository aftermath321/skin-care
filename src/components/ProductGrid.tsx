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
      <SimpleGrid
        w="100%"
        minChildWidth="155px"
        spacing={{base: '15px', md: '50px'}}
        p={{ base: "0rem", md: "2rem" }}
      >
        <ProductCard product={lipstick} />
        <ProductCard product={curology} />
        <ProductCard product={conditioner} />
        <ProductCard product={lipstick} />
      </SimpleGrid>
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
      <SimpleGrid
        w="100%"
        minChildWidth="175px"
        spacing="15px"
        p={{ base: "1rem", md: "2rem" }}
      >
        <ProductCard product={curology} />
        <ProductCard product={conditioner} />
        <ProductCard product={lipstick} />
        <ProductCard product={curology} />
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
