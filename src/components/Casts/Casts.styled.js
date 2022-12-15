import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  justify-items: center;
  justify-content: center;
  flex-shrink: 1;
  grid-template-columns: repeat(auto-fit, minmax(80px, auto));
  gap: 10px;
  list-style: none;
  padding: ${p => p.theme.space[1]}px;
`;

export const ActorName = styled.p`
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const ActorLinkWikipedia = styled.a`
  text-decoration: none;
  color: goldenrod;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

  &:visited {
    color: ${p => p.theme.colors.red};
  }
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.s};
`;
