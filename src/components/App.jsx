import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import transactions from "./TransactionHistory/transactions.json";
import friends from "./FriendList/friends.json";

import Profile from "./Profile";
import Statistics from "./Statistics";
import TransactionHistory from "./TransactionHistory";
import FriendList  from './FriendList';

export const App = () => {
  return (
    <div>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
