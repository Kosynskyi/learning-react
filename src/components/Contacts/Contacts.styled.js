import styled from 'styled-components';

export const Title = styled.h2`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  text-align: center;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: ${props => props.theme.space[1]}px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.theme.space[4]}px;
  align-items: center;

  &:last-child {
    margin-bottom: ${props => props.theme.space[1]}px;
  }
`;

export const ContactInfo = styled.p`
  margin: ${props => props.theme.space[1]}px;
  margin-right: ${props => props.theme.space[6]}px;
`;

export const Button = styled.button`
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;
