import { Box } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const StarRating = (props: { rating: number }): JSX.Element => {
  switch (props.rating) {
    case 1:
      return (
        <Box display="flex" flexDirection="row" color="gold" my="1rem">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Box>
      );
    case 2:
      return (
        <Box display="flex" flexDirection="row" color="gold" my="1rem">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Box>
      );
    case 3:
      return (
        <Box display="flex" flexDirection="row" color="gold" my="1rem">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Box>
      );
    case 4:
      return (
        <Box display="flex" flexDirection="row" color="gold" my="1rem">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </Box>
      );
    case 5:
      return (
        <Box display="flex" flexDirection="row" color="gold" my="1rem">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Box>
      );
  }
  return <></>;
};

export default StarRating;
