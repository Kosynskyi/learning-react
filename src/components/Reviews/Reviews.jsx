import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewById } from 'services/API/API';
import { Box } from 'components/Box';
import { Text } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewById(movieId).then(setReview);
  }, [movieId]);

  if (!review) return;

  return (
    <Box pt={4}>
      {review[0]?.content ? (
        <Text>{review[0].content}</Text>
      ) : (
        <Text>We don't have any reviews for this movie</Text>
      )}
    </Box>
  );
};

export default Reviews;
