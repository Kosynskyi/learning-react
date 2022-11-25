import styled from 'styled-components';

export const Title = styled.h1`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  text-align: center;
`;

export const Button = styled.button`
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};
  color: ${props => props.theme.colors.white};
  width: 25%;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
