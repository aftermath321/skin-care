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
  Wrap,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Grid
      templateRows="repeat(4, 1fr)"
      alignContent="center"
      templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
      bgColor="pale.pink"
      m="1rem"
      p="1rem"
      rowGap="1rem"
    >
      <GridItem
        rowSpan={1}
        colSpan={3}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Text fontSize="1.5rem" fontWeight="bolder">
          Subscribe to our Newsletter:
        </Text>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={3}
        gap="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Input
          placeholder="Enter your email address..."
          width={{ sm: "150", md: "300px" }}
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
          alignContent="center"
          justifyContent="center"
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
            Clean-Skin
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
        borderTop={{ sm: "none", md: "1px gray solid" }}
        p="1rem"
      >
        <Grid templateColumns="repeat(3, 1fr) gap='1rem'" templateRows="1">
          <GridItem colSpan={1}>
            <UnorderedList listStyleType="none">
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                HOME
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                MAKEUP
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                SKIN CARE
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                HAIR CARE
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                ACCESSORIES
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                ABOUT
              </ListItem>
              <ListItem cursor="pointer" w='150px' _hover={{ fontWeight: "900" }}>
                CONTACT
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={1} colStart={2}>
            <UnorderedList listStyleType="none">
              <ListItem
                cursor="pointer"
                w="150px"
                _hover={{ fontWeight: "900" }}
              >
                REFUND POLICY
              </ListItem>
              <ListItem
                cursor="pointer"
                w="150px"
                _hover={{ fontWeight: "900" }}
              >
                TERMS & CONDITIONS
              </ListItem>
              <ListItem
                cursor="pointer"
                w="150px"
                _hover={{ fontWeight: "900" }}
              >
                FAQ
              </ListItem>
              <ListItem
                cursor="pointer"
                w="150px"
                _hover={{ fontWeight: "900" }}
              >
                PRIVACY POLICY
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem
            colSpan={1}
            colStart={3}
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            <Wrap _hover={{ color: "#1DA1F2" }} cursor="pointer">
              <AiFillTwitterCircle size={40} />
            </Wrap>
            <Wrap _hover={{ color: "#006AFF" }} cursor="pointer">
              <AiFillFacebook size={40} />
            </Wrap>
            <Wrap _hover={{ color: "#d6249f" }} cursor="pointer">
              <AiFillInstagram size={40} />
            </Wrap>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={3}
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
