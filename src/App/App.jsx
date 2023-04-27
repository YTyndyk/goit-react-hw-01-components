import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Statistics title="Upload stats" stats={data} />
      </>
    </Container>
  );
};
