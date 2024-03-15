import s from './FriendItem.module.css'

const FriendItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={s.friendItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={s.friendName}>{name}</p>
        <p className={`${isOnline ? s.onlineText : s.offlineText}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  };

  export default FriendItem;