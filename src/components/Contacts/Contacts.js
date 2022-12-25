import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactSlice';
import { getContacts } from 'redux/Contacts/contactSelectors';
import { getFilterValue } from 'redux/Filter/filterSelector';

import {
  Title,
  ContactList,
  ContactItem,
  ContactInfo,
  Button,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const getContactsList = useSelector(getContacts);
  const getFilteredValue = useSelector(getFilterValue);
  console.log('getContactsList ', getContactsList);

  const visibleContacts = () => {
    return getContactsList.filter(item =>
      item.name.toLowerCase().includes(getFilteredValue.toLowerCase())
    );
  };

  return (
    <>
      <Title>Contacts</Title>
      <ContactList>
        {visibleContacts().map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactInfo>{name}</ContactInfo>
              <ContactInfo>{number}</ContactInfo>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
};
