import React from 'react' 
import ShowStarRating from '../../components/StarRating/ShowStarRating'
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';
import { Card, Box, Typography } from '@material-ui/core';

const ReviewCard = ({ review }) => {

    return (
        <>
        <Card  >
        <Box m={3} >

        {/* <BadgeAvatar url={review?.author?.avatar} live={true} name={review?.author?.name}/> */}
        {/* <Typography>Author: {review?.author?.name}</Typography> */}
        {/* <ShowStarRating rating={review?.rating}/> */}

{/* use line13-15 for actual review. line 19-20 is placeholder to test how the review card looks */}
        {/* <BadgeAvatar url={review?.avatar} live={true} name={review?.name}/> */}
        <Typography variant={'subtitle1'}>Author: {review?.name}</Typography>
        <ShowStarRating rating={4.5}/>
        </Box>
        </Card>

         </>
  );
}

    export default ReviewCard;