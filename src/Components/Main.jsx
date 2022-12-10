import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <h2>This is the Main page</h2>
      <Link to="/landing" relative="path">
        cancel
      </Link>
    </div>
  );
};

export default Main;
