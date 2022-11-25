import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import {
  Title,
  FeedbackList,
  FeedbackItem,
  FeedbackText,
  Notification,
} from './Statistics.styled';

export const Statistics = ({ data, total, positivePercentage }) => {
  return (
    <Box as="section" p={5} width="50%" backgroundColor="muted" mx={0}>
      <Title>Statistics</Title>

      {total < 1 ? (
        <Notification>No feedback given {':('}</Notification>
      ) : (
        <>
          <FeedbackList>
            {Object.entries(data).map(item => (
              <FeedbackItem key={item[0]}>
                {item[0]}: {item[1]}
              </FeedbackItem>
            ))}
          </FeedbackList>
          <FeedbackText>Total: {total}</FeedbackText>
          <FeedbackText>Positive feedback: {positivePercentage}%</FeedbackText>
        </>
      )}
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
