import styled from 'styled-components';

export const ImageItem = styled.li`
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: ${props => props.theme.radii.normal};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;
