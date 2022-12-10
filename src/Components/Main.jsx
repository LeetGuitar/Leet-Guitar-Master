import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <h2>This is the Main page</h2>
      <Link to="/landing" relative="path">
        cancel
      </Link>
    </div>
  );
};

export default Main;
