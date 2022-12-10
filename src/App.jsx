import React from 'react';
import Landing from './Components/Landing.jsx';
// import UserInfo from './Components/UserInfo.jsx';
import Main from './Components/Main.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      {/* <Route path="/user" element={<UserInfo />} /> */}
    </Routes>
  );
};

export default App;
