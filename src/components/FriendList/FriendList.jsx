import PropTypes from 'prop-types';

import { Box } from '../Box';
import { FriendBoard, FriendCard, Status, Avatar } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <Box as="section">
      <Box py={5} width="250px" mx={0}>
        <FriendBoard>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              />
            );
          })}
        </FriendBoard>
      </Box>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
