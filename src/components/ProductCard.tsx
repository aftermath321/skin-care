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
          <Box display="flex" flexDirection="row" gap="5px">
            <Text textDecorationLine="line-through" textColor="gray.500">
              {props.product.price}$
            </Text>
            <Text>{props.product.newPrice}$</Text>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Text>{props.product.price}$</Text>
        </>
      );
    }
  };
  return (
    <GridItem p="1rem" pt="0" cursor="pointer" bgColor="pale.pink">
      <Box
        w="100%"
        h="80%"
        bgImage="https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
      <Box>
        <Text>{props.product.rating}</Text>

        <Text fontWeight="bold" fontSize="1.25rem">
          {props.product.name}
        </Text>
        {discount()}
      </Box>
    </GridItem>
  );
};

export default ProductCard;
