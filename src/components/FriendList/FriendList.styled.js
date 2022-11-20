import styled from 'styled-components';

export const FriendBoard = styled.ul`
  margin: ${props => props.theme.space[1]}px;
  padding: ${props => props.theme.space[1]}px;
  list-style: none;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.muted};

  &:last-child {
    margin-bottom: ${props => props.theme.space[1]}px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${props => props.theme.radii.round};
  margin-right: ${props => props.theme.space[4]}px;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: ${props => props.theme.space[4]}px;
`;
