import styled from 'styled-components';

export const ImagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  margin: ${props => props.theme.space[1]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[6]}px;

  list-style: none;
`;
