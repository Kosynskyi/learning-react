import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';

import { Box } from './Box';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const onFormSubmit = data => {
    const normalizedName = data.name.toLowerCase();
    const repeatContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (repeatContact) {
      return alert(`${data.name} is already on the list`);
    }

    setContacts([data, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const getVisibleContacts = () => {
    const normalizedName = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedName)
    );
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  return (
    <Box as="section" p={6}>
      <Form onSubmit={onFormSubmit} />
      <Filter filter={filter} changeFilter={changeFilter} />
      <Contacts contacts={getVisibleContacts()} deleteContact={deleteContact} />
    </Box>
  );
};
