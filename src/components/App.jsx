import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout';
// import Invoices from './Invoices';
// import InvoiceDetails from './InvoiceDetails';
// import Sales from 'pages/Sales';
// import Customers from 'pages/Customers';
// import CustomerDetails from 'pages/CustomerDetails';
const Invoices = lazy(() => import('./Invoices'));
const InvoiceDetails = lazy(() => import('./InvoiceDetails'));

const Sales = lazy(() => import('pages/Sales'));
const Customers = lazy(() => import('pages/Customers'));
const CustomerDetails = lazy(() => import('pages/CustomerDetails'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route
              path="invoices"
              element={
                <div>
                  <Invoices />
                </div>
              }
            >
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
