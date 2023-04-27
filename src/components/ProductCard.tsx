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
  Center,
} from "@chakra-ui/react";
import React from "react";
import StarRating from "./StarRating";

export interface Product {
  name: string;
  price: number;
  discounted: boolean;
  newPrice: number;
  photoURL: string;
  rating: number;
}

const ProductCard = (props: { product: Product }) => {
  const discount = (): JSX.Element => {
    if (props.product.discounted) {
      return (
        <>
          <Box display="flex" flexDirection="row" gap="10px">
            <Text textDecorationLine="line-through" textColor="gray.500">
              ${props.product.price}
            </Text>
            <Text>${props.product.newPrice}</Text>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Text>${props.product.price}</Text>
        </>
      );
    }
  };
  return (
    <GridItem
      w={{ base: "175px", md: "250px", lg: "300px" }}
      h={{ base: "350px", md: "500px" }}
      pt="0"
      cursor="pointer"
      bgColor="pale.pink"
      colSpan={1}
      rowSpan={1}
    >
      <Box
        w={{ base: "175px", md: "250px", lg: "300px" }}
        h={{ base: "250px", md: "400px" }}
        bgImage={`url(${props.product.photoURL})`}
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        justifySelf="flex-start"
      />
      <Box w={{ base: "175px", md: "250px", lg: "300px" }} justifySelf="center">
        <StarRating rating={props.product.rating} />

        <Text fontWeight="bold" fontSize="1.25rem">
          {props.product.name}
        </Text>
        {discount()}
      </Box>
    </GridItem>
  );
};

export default ProductCard;
