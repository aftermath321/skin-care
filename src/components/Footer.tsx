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
  Center,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Grid
      templateRows="repeat(4, 1fr) gap='1rem'"
      templateColumns="repeat(6, 1fr) gap='1rem'"
      bgColor="pale.pink"
      m="1rem"
      p="1rem"
      rowGap="1rem"
    >
      <GridItem
        rowSpan={1}
        colSpan={3}
        justifyContent="center"
        alignContent="center"
        display="flex"
      >
        <Text fontSize="1.5rem">Subscribe to our Newsletter:</Text>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={3}
        gap="10px"
        display="flex"
        justifyContent="center"
      >
        <Input
          placeholder="Enter your email address..."
          width="300px"
          p="5px"
        />
        <Button bgColor="#131313" textColor="#fff" width="100px" height="40px">
          Subscribe
        </Button>
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        borderBottom="1px gray solid"
        borderTop="1px gray solid"
      >
        <Box
          lineHeight="1rem"
          justifyContent="center"
          alignContent="center"
          display="flex"
          flexDir="column"
          alignItems="center"
          h="100%"
        >
          <Text
            fontWeight="extrabold"
            fontSize="2xl"
            fontFamily="BLOVERLY"
            letterSpacing="0.05rem"
          >
            KR-Skin
          </Text>
          <Text fontFamily="BLOVERLY" fontWeight="bold" letterSpacing="0.05rem">
            Korean skin care
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        borderBottom="1px gray solid"
        borderTop="1px gray solid"
        p="1rem"
      >
        <Grid templateColumns="repeat(3, 1fr) gap='1rem'" templateRows="1">
          <GridItem colSpan={1}>
            <UnorderedList listStyleType="none">
              <ListItem>HOME</ListItem>
              <ListItem>MAKEUP</ListItem>
              <ListItem>SKIN CARE</ListItem>
              <ListItem>HAIR CARE</ListItem>
              <ListItem>ACCESSORIES</ListItem>
              <ListItem>ABOUT</ListItem>
              <ListItem>CONTACT</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={1} colStart={2}>
            <UnorderedList listStyleType="none">
              <ListItem>REFUND POLICY</ListItem>
              <ListItem>TERMMS & CONDITIONS</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>PRIVACY POLICY</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem
            colSpan={1}
            colStart={3}
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            <AiFillTwitterCircle size={40} />
            <AiFillFacebook size={40} />
            <AiFillInstagram size={40} />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={6}
        colStart={1}
        display="flex"
        justifyContent="center"
      >
        <Text>Copyright © 2023 KR-Skin</Text>
      </GridItem>
    </Grid>
  );
};

export default Footer;
