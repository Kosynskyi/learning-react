import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from 'redux/Filter/filterSlice';
import { getFilterValue } from 'redux/Filter/filterSelector';

import { Label, Input } from '../Form/Form.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const getFilter = useSelector(getFilterValue);

  const handleChange = ({ target: { value } }) => {
    dispatch(filterValue(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={getFilter}
        onChange={handleChange}
      />
    </Label>
  );
};
