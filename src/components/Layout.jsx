import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
