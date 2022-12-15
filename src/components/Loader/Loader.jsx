import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <RotatingLines strokeColor="#e50914" strokeWidth="4" />
    </Box>
  );
};

export default Loader;
