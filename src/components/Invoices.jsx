import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Box';
import { getInvoices } from './fakeApi';

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={4}
        borderRight="1px solid black"
      >
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            {id}
          </NavItem>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Invoices;
