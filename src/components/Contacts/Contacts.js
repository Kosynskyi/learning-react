import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/Contacts/contactSelectors';
import { selectFilterValue } from 'redux/Filter/filterSelector';
import {
  fetchContacts,
  deleteContact,
} from 'redux/Contacts/contactsOperations';

import {
  Title,
  ContactList,
  ContactItem,
  ContactInfo,
  Button,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const getContactsList = useSelector(selectContacts);
  const getFilteredValue = useSelector(selectFilterValue);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = () => {
    return getContactsList.filter(item =>
      item.name.toLowerCase().includes(getFilteredValue.toLowerCase())
    );
  };

  return (
    <>
      <Title>Contacts</Title>
      {loading && !error && <RotatingLines />}
      <ContactList>
        {visibleContacts().map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              <ContactInfo>{name}</ContactInfo>
              <ContactInfo>{phone}</ContactInfo>
              <Button type="button" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
};
