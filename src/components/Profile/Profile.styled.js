import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: ${props => props.theme.radii.round};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Name = styled.p`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Tag = styled.p`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const Location = styled.p`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.space[1]}px;
  margin: ${props => props.theme.space[1]}px;
  list-style: none;
  background-color: ${props => props.theme.colors.muted};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  width: 33.3333%;
  border: ${props => props.theme.borders.normal};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.secondary};
`;

export const Quantity = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
