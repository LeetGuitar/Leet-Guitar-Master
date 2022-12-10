import React from 'react';
import Landing from './Components/Landing.jsx';
import UserInfo from './Components/UserInfo.jsx';
import Main from './Components/Main.jsx';
import PracticeLog from './Components/PracticeLog.jsx';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/practiceLog" element={<PracticeLog />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
