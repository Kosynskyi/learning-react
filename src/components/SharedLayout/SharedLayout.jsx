import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { StyledNavLink } from './SharedLayout.styled';
import { Box } from 'components/Box';

const SharedLayout = () => {
  return (
    <div>
      <Box
        as="nav"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
