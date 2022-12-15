import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ children }) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};

export default Button;
