import styled from 'styled-components';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Title = styled.h2`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  color: ${props => props.theme.colors.text};
`;

export const StatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
`;
