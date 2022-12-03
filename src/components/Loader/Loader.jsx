import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <RotatingLines strokeColor="grey" />
    </Box>
  );
};
