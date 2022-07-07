import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import transactions from "./TransactionHistory/transactions.json";

import Profile from "./Profile";
import Statistics from "./Statistics";
import TransactionHistory from "./TransactionHistory";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
