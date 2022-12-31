import styled from 'styled-components';
import { ReactComponent as PokemonSvg } from '../../services/icons/pokemon-icon.svg';

export const PokeBall = styled(PokemonSvg)`
  transition: 500ms;
  cursor: pointer;

  &:hover {
    transform: rotate(360deg);
  }
`;
