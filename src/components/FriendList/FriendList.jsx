import FriendItem from './FriendItem/FriendItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={s.friendsList}>
      {friends.map(friend => (
        <FriendItem key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default FriendList;