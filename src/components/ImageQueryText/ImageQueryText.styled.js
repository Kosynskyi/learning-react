import styled from 'styled-components';

export const Text = styled.h2`
  text-align: center;
  margin: ${props => props.theme.space[1]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
`;
