import React, { Component } from 'react';

import { Box } from './Box';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    const normalizedName = data.name.toLowerCase();
    const repeatContact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (repeatContact) {
      return alert(`${data.name} is already on the list`);
    }

    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedName = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedName)
    );
  };

  changeFilter = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;

    return (
      <Box as="section" p={6}>
        <Form onSubmit={this.onFormSubmit} />
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <Contacts
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
