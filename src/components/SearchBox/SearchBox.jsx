import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Form, Input } from './SearchBox.styled';

import Button from 'components/Button';

const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Input type="text" name="query" />
      <Button type="submit">
        <BsSearch />
      </Button>
    </Form>
  );
};

export default SearchBox;
