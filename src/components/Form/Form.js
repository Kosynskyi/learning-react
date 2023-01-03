import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/Contacts/contactSlice';

import { Title, ContactForm, Label, Input, Button } from './Form.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery('');
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = { name, phone };
    const normalizedName = name.toLowerCase();

    const repeatContact = data.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (repeatContact) {
      resetForm();
      return toast.error(`${name} is already on the list`);
    }
    addContact(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      {/* {isSuccess &&
        toast.success(`${name} has been successfully added to the phonebook`)} */}
      <Title>Phonebook</Title>

      <ContactForm onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </>
  );
};
