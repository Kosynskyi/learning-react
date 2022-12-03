import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  width: 200px;
  margin-bottom: ${props => props.theme.space[5]}px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondary};
    transform: scale(1.1);
  }
`;
