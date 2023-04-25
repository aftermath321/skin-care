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
  Center,
  Divider,
} from "@chakra-ui/react";
import StarRating from "./StarRating";

interface Opinion {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  description: string;
}

const opinions: Opinion[] = [
  {
    name: "Jane Doe",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",
  },
  {
    name: "John Doe",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",
  },
  {
    name: "James Smith",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",
  },
  {
    name: "Debbie Doe",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",
  },
];

const CommentWall = () => {
  return (
    <>
      <Grid
        // h="100vh"
        w="100%"
        my="1rem"
        p="1rem"
        templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
      >
        <GridItem
          h="100%"
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          px="2rem"
        >
          <Text fontFamily="BLOVERLY" fontSize="1.25rem">
            {opinions[0].name}
          </Text>
          <Box
            height="5px"
            w="100px"
            marginBottom="5px"
            borderBottom="1px solid"
            borderColor="pale.pink"
          ></Box>

          <Text fontSize="1.5rem" fontWeight="bold">
            {opinions[0].description}
          </Text>
          <Text>
            <StarRating rating={opinions[0].rating} />
          </Text>
        </GridItem>
        <GridItem>
          <Grid
            h="100%"
            w="100%"
            templateRows="repeat(3, 1fr)"
            p="1rem"
            rowGap="1rem"
            justifyContent="center"
          >
            <GridItem>
              <Text fontFamily="BLOVERLY" fontSize="1.25rem">
                {opinions[1].name}
              </Text>
              <Box
                height="5px"
                w="100px"
                marginBottom="5px"
                borderBottom="1px solid"
                borderColor="pale.pink"
              ></Box>
              <Text>{opinions[1].description}</Text>
              <Text>
                <StarRating rating={opinions[1].rating} />
              </Text>
            </GridItem>
            <GridItem>
              <Text fontFamily="BLOVERLY" fontSize="1.25rem">
                {opinions[2].name}
              </Text>

              <Box
                height="5px"
                w="100px"
                marginBottom="5px"
                borderBottom="1px solid"
                borderColor="pale.pink"
              ></Box>

              <Text>{opinions[2].description}</Text>
              <Text>
                <StarRating rating={opinions[2].rating} />
              </Text>
            </GridItem>
            <GridItem>
              <Text fontFamily="BLOVERLY" fontSize="1.25rem">
                {opinions[3].name}
              </Text>
              <Box
                height="5px"
                w="100px"
                marginBottom="5px"
                borderBottom="1px solid"
                borderColor="pale.pink"
              ></Box>
              <Text>{opinions[3].description}</Text>
              <Text>
                <StarRating rating={opinions[3].rating} />
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default CommentWall;
