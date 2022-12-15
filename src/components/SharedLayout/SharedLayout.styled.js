import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  min-width: 45%;
  padding: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.awesome};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  transition: 500ms;
  text-decoration: none;
  background-color: #141414;

  &.active {
    color: ${p => p.theme.colors.red};

    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #e50914;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }

  &:hover {
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #e50914;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-left: 2px solid #e50914;
    border-top: 2px solid #e50914;
    top: 0;
    left: 0;
    border-radius: 6px 0 0 0;
    transition: 500ms;
  }

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-right: 2px solid #e50914;
    border-bottom: 2px solid #e50914;
    right: 0;
    bottom: 0;
    border-radius: 0 0 6px 0;
    transition: 500ms;
  }

  &:hover::after,
  &:hover::before {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: ${p => p.theme.radii.normal};
  }
`;
