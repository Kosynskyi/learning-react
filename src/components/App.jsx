import styled from 'styled-components';
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineStar,
  HiOutlineVolumeUp,
} from 'react-icons/hi';

import { Button } from './Button';
import { Box } from './Box';

const Text = styled.p`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

export const App = () => {
  return (
    <Box
      bg="primary"
      color="text"
      pt={4}
      width="50%"
      display="flex"
      alignItems="center"
      border="normal"
      borderColor="accent"
      position="relative"
      as="main"
    >
      Lorem ipsum dolor sit amet.
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
        magnam.
      </Text>
      <Button icon={HiSearch}>Search</Button>
      <Button icon={HiOutlinePencilAlt}>Filter</Button>
      <Button icon={HiOutlineStar}>Show Modal</Button>
      <Button icon={HiOutlineVolumeUp} type="submit">
        LogIn
      </Button>
      <Button type="submit">LogOut</Button>
    </Box>
  );
};
