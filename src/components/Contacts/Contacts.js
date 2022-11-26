import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  ContactList,
  ContactItem,
  ContactInfo,
  Button,
} from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <ContactList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactInfo>{name}</ContactInfo>
              <ContactInfo>{number}</ContactInfo>
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
