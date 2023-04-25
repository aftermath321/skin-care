import React, { useState } from "react";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const Header = () => {
  const [items, setItems] = useState<number>(0);
  const [cash, setCash] = useState<number>(0.00);

  return (
    <Flex flexDirection="row" justifyContent="space-between" p="1rem">
      <Box lineHeight="1rem" cursor="pointer">
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
      <UnorderedList
        listStyleType="none"
        flexDirection="row"
        display="flex"
        gap="20px"
        cursor="pointer"
      >
        <ListItem>HOME</ListItem>
        <ListItem>MAKEUP</ListItem>
        <ListItem>SKIN CARE</ListItem>
        <ListItem>HAIR CARE</ListItem>
        <ListItem>ACCESSORIES</ListItem>
        <ListItem>ABOUT</ListItem>
        <ListItem>CONTACT</ListItem>
      </UnorderedList>
      <Flex
        gap="20px"
        flexDirection="row"
        alignContent="center"
        cursor="pointer"
      >
        <BsPersonFill size={25} />
        {/* <Box _after={{content: `${items}`}}>  */}
        <Text fontSize="1.25rem">${cash}</Text>
        <FaCartArrowDown size={25} />
        {/* </Box> */}
        {/* <Box borderRadius='full' bgColor='#131313' textColor='#fff' w='2rem'  justifyContent='center' display='flex'  textAlign='center'>{items}</Box> */}
      </Flex>
    </Flex>
  );
};

export default Header;
