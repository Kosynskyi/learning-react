import React from 'react';
import { Box } from './Box';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

export const App = () => {
  return (
    <Box as="section" p={6}>
      <Form />
      <Filter />
      <Contacts />
    </Box>
  );
};
