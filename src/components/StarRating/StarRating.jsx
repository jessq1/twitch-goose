import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {Box, Button} from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function StartRating(props) {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [formData, setFormData] = useState({
    api_id: props.api,
    author: props.userProfile,
    rating:'',
    media: props.media
  })
  const classes = useStyles();

  const formRef = React.createRef();

	const handleChange = e => {
		setFormData({ api_id: props.api,author: props?.userProfile, [e.target.name]: e.target.value })
    setValue(e.target.value)
	};

  const handleSubmit = e => {
		e.preventDefault();
    console.log(formData)
    props.handleAddReview(formData)
    setValue(0)
  };

  return (
    <div className={classes.root}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Box m={3} className={classes.root}>
      <Rating
        autoComplete="off"
        name="rating"
        value={value}
        content={labels[value]}
        precision={0.5}
        onChangeActive={(handleChange, newHover) => {
          setHover(newHover);
        }}
        onChange={handleChange}
        auto
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
        </Box>
        <Box ml={3} mb={1}>
      <Button size="small" variant="contained" color="secondary" startIcon={<AddCircleIcon />} type='submit' >Review</Button>
        </Box>
</form>
    </div>
  );
}