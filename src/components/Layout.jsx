import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
