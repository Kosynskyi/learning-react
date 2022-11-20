import { Box } from './Box';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Box bg="primary" textAlign="center" as="main">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
      voluptates?
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Box>
  );
};
