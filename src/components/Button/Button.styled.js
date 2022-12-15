import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 48px;
  padding: ${p => p.theme.space[4]}px;
  margin-left: -50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.none};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.black};
  transition: 500ms;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.red};
    box-shadow: 0 0 50px #e50914;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }
`;
