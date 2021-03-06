import React from 'react' 
import ShowStarRating from '../../components/StarRating/ShowStarRating'
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';
import LetterBadgeAvatar from '../BadgeAvatar/LetterBadgeAvatar';
import { Card, Box, Typography } from '@material-ui/core';

const ReviewCard = ({ review }) => {

    return (
        <>
        <Card  >
        <Box m={3} >

        <LetterBadgeAvatar live={true} name={review?.author?.name}/>
        <Typography>Author: {review?.author?.name}</Typography>
        <ShowStarRating rating={review?.rating}/>
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