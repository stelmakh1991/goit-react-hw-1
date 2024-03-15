import styles from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statItemFollowers}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </li>
        <li className={styles.statItemViews}>
          <span className={styles.statLabel}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </li>
        <li className={styles.statItemLikes}>
          <span className={styles.statLabel}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;