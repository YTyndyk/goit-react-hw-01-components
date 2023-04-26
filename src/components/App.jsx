import { Profile } from 'components/Profile/Profile';
import css from 'components/Profile/Profile.module.css';
import user from 'components/Profile/user.json';
export const App = () => {
  return (
    <div className={css.style}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
