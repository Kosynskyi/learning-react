import React from 'react';
import { Box } from 'components/Box';
import { Text } from './NotFound.styled';

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Text>404</Text>
      <Text>page not found :(</Text>
    </Box>
  );
};

export default NotFound;
