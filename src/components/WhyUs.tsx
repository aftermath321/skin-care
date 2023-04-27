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
  Center,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { RiInkBottleLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";

const WhyUs = () => {
  return (
    <Box h={{base: "auto", md: "20vh"}} w="100%" my='1rem' p='1rem'>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 1fr)"}} gap="1rem">
        <GridItem
        //   bgColor="pale.pink"
          display="flex"
          justifySelf="center"
          alignItems="center"
          borderTop='1px solid'
          borderBottom='1px solid'
          borderColor='pale.pink'
          w='100px'
        >
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="bolder"
            fontFamily="BLOVERLY"
          >
            Why us?
          </Heading>
        </GridItem>

        <GridItem
        //   bgColor="pale.pink"
          display="flex"
          alignItems="flex-start"
          gap="1rem"
        >
          <Box
            bgColor="pale.pink"
            borderRadius="full"
            w="45px"
            h="45px"
            display="flex"
            justifySelf="flex-start"
            justifyContent="center"
            alignItems="center"
          >
            <FaTruck size={25} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Heading fontWeight="extrabold">Fast delivery</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisci elit.</Text>
          </Box>
        </GridItem>

        <GridItem
        //   bgColor="pale.pink"
          display="flex"
          alignItems="flex-start"
          gap="1rem"
        >
          <Box
            bgColor="pale.pink"
            borderRadius="full"
            w="45px"
            h="45px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <BsPersonFill size={25} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Heading fontWeight="extrabold">Trusted by clients</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisci elit.</Text>
          </Box>
        </GridItem>
        <GridItem
        //   bgColor="pale.pink"
          display="flex"
          alignItems="flex-start"
          gap="1rem"
        >
          <Box
            bgColor="pale.pink"
            borderRadius="full"
            w="45px"
            h="45px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <RiInkBottleLine size={25} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Heading fontWeight="extrabold">Products for everyone</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisci elit.</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WhyUs;
