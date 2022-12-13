import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getCustomers } from 'components/fakeApi';
import SearchBox from 'components/SearchBox';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(({ name }) =>
      name.toLowerCase().includes(filterParams.toLowerCase())
    );
  }, [customers, filterParams]);

  return (
    <main>
      <SearchBox onChange={changeFilter} value={filterParams} />
      <ul>
        {visibleCustomers.length > 0 &&
          visibleCustomers.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Customers;
