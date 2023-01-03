import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/Contacts/contactSlice';
import { Contact, ContactInfo, Button } from './Contacts.styled';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  return (
    <>
      {isSuccess &&
        toast.success(
          `contact has been successfully deleting from the phonebook`
        )}
      <Contact>
        <ContactInfo>{name}</ContactInfo>
        <ContactInfo>{phone}</ContactInfo>
        <Button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting' : 'Delete'}
        </Button>
      </Contact>
    </>
  );
};

export default ContactItem;
