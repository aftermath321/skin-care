import React from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
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
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Grid
      templateRows="repeat(4, 1fr) gap='1rem'"
      templateColumns="repeat(6, 1fr) gap='1rem'"
      bgColor="pink.200"
      gap="2rem"
      m="1rem"
    >
      <GridItem rowSpan={1} colSpan={3}>
        Subscribe to our Newsletter:
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Input placeholder="Enter your email address..." />{" "}
        <Button>Subscribe</Button>
      </GridItem>
      <GridItem colSpan={3} rowSpan={2}>
        KR-Skin
      </GridItem>
      <GridItem colSpan={3} rowSpan={2}>
        <Grid templateColumns="repeat(3, 1fr) gap='1rem'" templateRows="1">
          <GridItem colSpan={1} bgColor="pink.100">
            <UnorderedList>
              <ListItem>HOME</ListItem>
              <ListItem>MAKEUP</ListItem>
              <ListItem>SKIN CARE</ListItem>
              <ListItem>HAIR CARE</ListItem>
              <ListItem>ACCESSORIES</ListItem>
              <ListItem>ABOUT</ListItem>
              <ListItem>CONTACT</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={1} bgColor="pink.300" colStart={2}>
            <UnorderedList>
              <ListItem>REFUND POLICY</ListItem>
              <ListItem>TERMMS & CONDITIONS</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>PRIVACY POLICY</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem
            colSpan={1}
            bgColor="pink.500"
            colStart={3}
            display="flex"
            flexDirection="row"
            gap="20px"
          >
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiFillInstagram />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem rowSpan={1} colSpan={6} colStart={1}>
        Copyright © 2023 KR-Skin
      </GridItem>
    </Grid>
  );
};

export default Footer;
