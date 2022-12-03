import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.none};
  border-top-left-radius: ${props => props.theme.radii.normal};
  border-bottom-left-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.white};
`;

export const StyledField = styled(Field)`
  padding: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.none};
  border-top-right-radius: ${props => props.theme.radii.normal};
  border-bottom-right-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.white};
  width: 200px;
`;
