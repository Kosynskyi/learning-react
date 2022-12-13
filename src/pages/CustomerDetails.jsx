import React, { useState, useEffect } from 'react';
import { getCustomerById } from 'components/fakeApi';
import { Link, useLocation, useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) return;

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>
        <b>id:</b> {id}
      </p>
      <p>
        {' '}
        <b>Username:</b> {name}
      </p>
    </main>
  );
};

export default CustomerDetails;
