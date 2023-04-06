import React from 'react'
import Landing from '../assets/images/landing.jpeg'
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
} from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      {/* Landing */}

      <Box
        bgImage={Landing}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        textColor="#fff"
        width="100%"
        h="90vh"
      >
        <Box pos="relative" top="350px" mx="2rem">
          <Text fontSize="1rem" textShadow="1px 1px #c7c7c7">
            New collection
          </Text>
          <Text fontSize="3rem" textShadow="1px 1px #c7c7c7">
            The Routine
          </Text>
          <Text fontSize="1.5rem" w="550px" textShadow="1px 1px #c7c7c7">
            New collection of Korean skin care products called 'The Routine'.
            The new exciting formula, the same price.
          </Text>
          <Button w='125px' h='50px' bgColor='red.300' borderRadius='50px' boxShadow='xl' pos='relative' top='25px' left='75px'>Shop Now</Button>
        </Box>
      </Box>

      {/* Carousel */}
      {/* Grid */}
      {/* Discount */}
      {/* Opinions */}
      {/* Feature */}
    </>
  );
}

export default Main