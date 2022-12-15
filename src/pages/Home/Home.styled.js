import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainTitle = styled.h1`
  text-align: center;
  letter-spacing: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[1]}px;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const List = styled.ul`
  display: grid;
  justify-items: center;
  justify-content: center;
  flex-shrink: 1;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  margin: ${p => p.theme.space[1]}px;
  margin-left: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[1]}px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 240px;
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  transition: 500ms;

  &:hover {
    /* background-color: ${p => p.theme.colors.effect}; */
    color: ${p => p.theme.colors.red};
    box-shadow: 0 0 50px #8500ff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-left: 1px solid #8500ff;
    border-top: 1px solid #8500ff;
    top: 0;
    left: 0;
    border-radius: 5px 0 0 0;
    transition: 500ms;
  }

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-right: 1px solid #8500ff;
    border-bottom: 1px solid #8500ff;
    right: 0;
    bottom: 0;
    border-radius: 0 0 5px 0;
    transition: 500ms;
  }

  &:hover::after,
  &:hover::before {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: ${p => p.theme.radii.normal};
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  min-width: 240px;
  border-radius: ${p => p.theme.radii.normal};

  border-bottom-left-radius: ${p => p.theme.radii.none};
  border-bottom-right-radius: ${p => p.theme.radii.none};
`;
