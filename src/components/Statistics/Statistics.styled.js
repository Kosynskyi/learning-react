import styled from 'styled-components';

export const Title = styled.h2`
  margin: ${props => props.theme.space[0]};
  font-size: ${props => props.theme.fontSizes.l};
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const FeedbackList = styled.ul`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[1]};
  list-style: none;
`;

export const FeedbackItem = styled.li`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const FeedbackText = styled.p`
  margin: ${props => props.theme.space[1]}px;
`;

export const Notification = styled.p`
  text-align: center;
`;
