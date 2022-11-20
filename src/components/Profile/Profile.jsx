import PropTypes from 'prop-types';

import {
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box as="section" width="200px" mx={0}>
      <Box py={5}>
        <Box bg="secondary" px={4} py={5}>
          <Avatar src={avatar} alt={username} width="60" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Box>

        <Stats>
          <StatsItem>
            <Label>Followers </Label>
            <Quantity>{followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views </Label>
            <Quantity>{views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes </Label>
            <Quantity>{likes}</Quantity>
          </StatsItem>
        </Stats>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
