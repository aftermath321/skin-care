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

const Feature = () => {
  return (
    <>
      <Grid
        w="100%"
        templateColumns="repeat(2, 1fr)"
        p="3rem"
        gap="1rem"
        bgColor="beige"
      >
        <GridItem
          bgImage="/images/professional.webp"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          width="100%"
          h="90vh"
          pos="relative"
        ></GridItem>
        <Button
          w="125px"
          h="50px"
          bgColor="red.300"
          borderRadius="50px"
          boxShadow="xl"
          pos="absolute"
          z-index="5"
          right='300px'
          top='3500px'
          transition="300ms"
          _hover={{
            backgroundColor: "#fff",
            color: "#131313",
            duration: "300ms",
          }}
          _active={{ transform: "translateY(5px)" }}
        >
          Locations
        </Button>
        <GridItem
          bgImage="/images/women.webp"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          width="100%"
          h="90vh"
          pos="relative"
        ></GridItem>
        <Button
          w="125px"
          h="50px"
          bgColor="red.300"
          borderRadius="50px"
          boxShadow="xl"
          pos="absolute"
          transition="300ms"
          _hover={{
            backgroundColor: "#fff",
            color: "#131313",
            duration: "300ms",
          }}
          _active={{ transform: "translateY(5px)" }}
        >
          Instructions
        </Button>
        {/* <Box pos="absolute" top="350px" mx="2rem" textColor="#fff">
          <Box>
            <Text
              fontSize="1.25rem"
              textShadow="1px 1px #c7c7c7"
              fontFamily="Vogue"
            >
              New collection
            </Text>
            <Text
              fontSize="3rem"
              textShadow="1px 1px #c7c7c7"
              fontFamily="Activists Regular"
            >
              The Routine
            </Text>
            <Text
              fontSize="1.65rem"
              letterSpacing="0.05rem"
              w="550px"
              textShadow="1px 1px #c7c7c7"
              fontFamily="Vogue"
            >
              New collection of Korean skin care products called 'The Routine'.
              The new exciting formula, the same price.
            </Text>
            <Button
              w="125px"
              h="50px"
              bgColor="red.300"
              borderRadius="50px"
              boxShadow="xl"
              pos="relative"
              top="25px"
              left="75px"
              transition="300ms"
              _hover={{
                backgroundColor: "#fff",
                color: "#131313",
                duration: "300ms",
              }}
              _active={{ transform: "translateY(5px)" }}
            >
              Shop Now
            </Button>
          </Box>
        </Box> */}
      </Grid>
    </>
  );
};

export default Feature;
