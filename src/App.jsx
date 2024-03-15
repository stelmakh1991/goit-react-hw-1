import userData from './userData.json';
import Profile from './components/Profile/Profile';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionList from './components/TransactionList/TransactionList';

const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </>
  );
};

export default App;