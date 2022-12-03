import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import { Box } from 'components/Box';

export const Button = ({ onLoadMore, children }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyItems={'center'}
      flexDirection={'column'}
    >
      <StyledButton type="button" onClick={onLoadMore}>
        {children}
      </StyledButton>
    </Box>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
