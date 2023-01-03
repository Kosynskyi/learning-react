import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer autoClose={3000} />
    </Box>
  );
};
