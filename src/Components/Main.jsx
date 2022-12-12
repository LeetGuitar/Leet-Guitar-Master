import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SetGoalsModal from './Modals/SetGoalsModal.jsx';
import ShowGoals from './Modals/ShowGoals.jsx';

const Main = () => {
  const [formData, setFormData] = useState({
    practiceTime: 0,
    focus1: '',
    focus2: '',
    focus3: '',
  });

  return (
    <div className="main">
      <h2>This is the Main page</h2>
      <Link to="/landing" relative="path">
        cancel
      </Link>
      <SetGoalsModal formData={formData} setFormData={setFormData} />
      <ShowGoals formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default Main;
