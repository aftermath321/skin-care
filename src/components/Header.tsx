import React from 'react'
import { Box, Button, UnorderedList,ListItem, Flex, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex flexDirection="row" justifyContent='space-between' p='1rem' bgColor='beige'>
      <Box lineHeight='1rem'>
        <Text fontWeight='extrabold' fontSize='2xl'>KR-Skin</Text>
        <Text>Korean skin care</Text>
      </Box>
      <UnorderedList
        listStyleType="none"
        flexDirection="row"
        display="flex"
        gap="20px"
      >
        <ListItem>HOME</ListItem>
        <ListItem>MAKEUP</ListItem>
        <ListItem>SKIN CARE</ListItem>
        <ListItem>HAIR CARE</ListItem>
        <ListItem>ACCESSORIES</ListItem>
        <ListItem>ABOUT</ListItem>
        <ListItem>CONTACT</ListItem>
      </UnorderedList>
      <Flex gap='20px' flexDirection='row' alignContent='center'>
        <Button>Avatar</Button>
        <Button>Cart</Button>
        <Text>Cash $</Text>
      </Flex>
    </Flex>
  );
}

export default Header