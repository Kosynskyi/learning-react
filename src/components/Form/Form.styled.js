import styled from 'styled-components';

export const Title = styled.h2`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[1]}px;
`;

export const Label = styled.label`
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Input = styled.input`
  margin-left: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  padding: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
  font-size: ${props => props.theme.fontSizes.m};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
