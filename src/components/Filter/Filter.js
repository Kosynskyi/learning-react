import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Label, Input } from '../Form/Form.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <Formik>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </Label>
    </Formik>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
