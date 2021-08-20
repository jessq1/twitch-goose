import React from 'react' 
import ShowStarRating from '../../components/StarRating/ShowStarRating'
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';
import LetterBadgeAvatar from '../BadgeAvatar/LetterBadgeAvatar';
import {Button, Card, Box, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const ReviewCard = ({ review, handleDeleteReview }) => {
    const handleSubmit = e => {
	    e.preventDefault();
        handleDeleteReview(review._id)
  };
    return (
        <>
        <Card  >
        <Box m={3} >

        <LetterBadgeAvatar live={true} name={review?.author?.name}/>
        <Typography>Author: {review?.author?.name}</Typography>
        <ShowStarRating rating={review?.rating}/>
        <form onSubmit={handleSubmit}>
        <Box ml={3} mb={1}>
      <Button size="small" variant="contained" color="secondary" startIcon={<AddCircleIcon />} type='submit' >Delete</Button>
        </Box>
        </form>
        {/* <Typography>Date: {review?.createdAt}</Typography> */}


{/* use line13-15 for actual review. line 19-20 is placeholder to test how the review card looks */}
        {/* <BadgeAvatar url={review?.avatar} live={true} name={review?.name}/> */}
        {/* <Typography variant={'subtitle1'}>Author: {review?.name}</Typography> */}
        {/* <ShowStarRating rating={review.rating} author={review.author}/> */}
        </Box>
        </Card>

         </>
  );
}

    export default ReviewCard;