import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SetGoalsModal from './Modals/SetGoalsModal.jsx';

const Main = () => {
  return (
    <div className="main">
      <h2>This is the Main page</h2>
      <Link to="/landing" relative="path">
        cancel
      </Link>
      <SetGoalsModal />
    </div>
  );
};

export default Main;
