import React from 'react';
import { Box } from './Box';
import { Routes, Route } from 'react-router-dom';
import Pokemon from '../pages/PokemonPage/Pokemon';

export const App = () => {
  return (
    <Box as="section" p={6}>
      <Routes>
        <Route path="/" element={<Pokemon />} />
      </Routes>
    </Box>
  );
};
