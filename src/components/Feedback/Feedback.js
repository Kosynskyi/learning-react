import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, Button } from './Feedback.styled';

export const Feedback = ({ data, addFeedback }) => {
  return (
    <Box as="section" p={5} width="50%" backgroundColor="muted" mx={0}>
      <Title>Please leave feedback</Title>
      <Box display="flex" justifyContent="space-evenly">
        {Object.keys(data).map(item => (
          <Button type="button" key={item} name={item} onClick={addFeedback}>
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

Feedback.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  addFeedback: PropTypes.func.isRequired,
};
