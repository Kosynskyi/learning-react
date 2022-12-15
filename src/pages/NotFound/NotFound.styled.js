import styled from 'styled-components';

export const Text = styled.p`
  margin: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
`;
