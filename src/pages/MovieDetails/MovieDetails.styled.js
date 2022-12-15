import styled from 'styled-components';
import { breakpoints } from '../../services/mixins/mixins';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const StyledLinkGoBack = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};

  & > svg {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const Image = styled.img`
  /* margin-right: ${p => p.theme.space[4]}px; */
`;

export const Title = styled.h2`
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: orangered;
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SecondaryTitle = styled.h3`
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: orangered;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[1]}px;
  list-style: none;
`;

export const GenreItem = styled.li`
  margin-right: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};

  &:last-child {
    margin-right: ${p => p.theme.space[1]}px;
  }

  & > p {
    margin: ${p => p.theme.space[1]}px;
  }
`;

export const TextOverview = styled.p`
  margin: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  list-style: none;
`;

export const AdditionalItem = styled.li`
  margin-right: ${p => p.theme.space[6]}px;
  /* padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary}; */

  &:last-child {
    margin-right: ${p => p.theme.space[1]}px;
  }
`;

export const AdditionalLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.white};

  &.active:not(hover) {
    color: ${p => p.theme.colors.red};
  }

  &:hover {
    color: goldenrod;
  }
`;
