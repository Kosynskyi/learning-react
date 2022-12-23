import React from 'react';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

const DashboardPage = () => {
  useLogOutRedirect();

  return <div>DashboardPage</div>;
};

export default DashboardPage;
