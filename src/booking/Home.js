import React from 'react';
import { userSelector, useSelector, useStore } from 'react-redux';

function Home() {
  const { user } = useSelector(state => ({ ...state }));
  return (
    <div className='container-fluid h1 p-5 text-center'>
      Home Page
      {JSON.stringify(user)}
    </div>
  );
}

export default Home;
