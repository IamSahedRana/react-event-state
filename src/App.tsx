import { Suspense } from 'react';
import Users from './users';
import Post from './post';
import Bat from './bat';
import Counter from './counter';

import './App.css';

const usersDataPromise = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const data = await response.json();

  return data;
};

const postDataPromise = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const data = await response.json();

  return data;
};

function App() {
  return (
    <>
      <Suspense fallback="Loading users...">
        <Users usersDataPromise={usersDataPromise()} />
      </Suspense>

      <Suspense fallback="Loading posts...">
        <Post postDataPromise={postDataPromise()} />
      </Suspense>

      <hr />

      <Bat />

      <Counter />
    </>
  );
}

export default App;