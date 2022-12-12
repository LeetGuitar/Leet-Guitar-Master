import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SetGoalsModal from './Modals/SetGoalsModal.jsx';
import ShowGoals from './Modals/ShowGoals.jsx';
import SetScales from './Modals/SetScales.jsx';
import ShowScales from './Modals/ShowScales.jsx';

const Main = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [formData, setFormData] = useState({
    practiceTime: 0,
    focus1: '',
    focus2: '',
    focus3: '',
  });

  // set scales state
  const [scales, setScales] = useState({ note: '', accidental: '' }); //sendback string wordkey accidental+not. sharp, flat or nothing

  const getScales = () => {
    let key = `${scales.note}${scales.accidental}`;
    console.log(key);
    fetch('http://localhost:8080/api/scales/', { body: JSON.stringify(key) })
      .then((data) => data.json)
      .then((response) => {
        console.log(response);
      });
  };

  const goalModal = () => {
    if (!showGoals) {
      return (
        <SetGoalsModal
          formData={formData}
          setFormData={setFormData}
          showGoals={showGoals}
          setShowGoals={setShowGoals}
        />
      );
    } else {
      return <ShowGoals formData={formData} setFormData={setFormData} />;
    }
  };

  //get scales

  return (
    <div className="main">
      {goalModal()}
      <h2>Hi</h2>
      <SetScales scales={scales} setScales={setScales} getScales={getScales} />
    </div>
  );
};

export default Main;
