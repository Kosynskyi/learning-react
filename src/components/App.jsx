import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from './Box';
import Layout from './Layout';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <Box p={5} pt={6}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
