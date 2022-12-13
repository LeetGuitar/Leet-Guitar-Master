import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SetGoalsModal from './Modals/SetGoalsModal.jsx';
import ShowGoals from './Modals/ShowGoals.jsx';
import SetScales from './Modals/SetScales.jsx';
import ShowScales from './Modals/ShowScales.jsx';
import icon1 from '../imgs/icon-1.png';
import icon2 from '../imgs/icon-2.png';

const Main = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [formData, setFormData] = useState({
    practiceTime: 0,
    focus1: '',
    focus2: '',
    focus3: '',
  });

  // set scales state to send to database
  const [scales, setScales] = useState({ note: '', accidental: '' });

  //storing our values received from database
  const [dailyScales, setDailyScales] = useState({});

  //setting the correct correct scale to practice

  const getScales = () => {
    let key = `${scales.note}${scales.accidental}`;
    console.log(key);

    fetch('http://localhost:8080/api/scales', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ key: key }),
    })
      .then((data) => {
        console.log(`data======`, data.body);
        return data.json();
      })
      .then((response) => {
        console.log(response);
        setDailyScales(response);
      })
      .catch((err) => {
        console.log(err);
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
      return (
        <div>
          <ShowGoals formData={formData} setFormData={setFormData} />{' '}
        </div>
      );
    }
  };

  //get scales

  return (
    <div className="main" id="main-page">
      <h2 class="practice-heading">
        <img src={icon1} alt="Icon 1" className="icon" />
        Set your practice goals for today:
      </h2>
      <div className="goal-setting">
        <div>
          <h3>Set your time and focus goals:</h3>
          {goalModal()}
        </div>
        <div>
          <h3>Set the scales you want to focus on:</h3>
          <SetScales
            scales={scales}
            setScales={setScales}
            getScales={getScales}
          />
          <ShowScales
            dailyScales={dailyScales}
            setDailyScales={setDailyScales}
          />
        </div>
      </div>
      {/* <h2 class="practice-heading">
        <img src={icon2} alt="Icon 1" className="icon" />
        Today's practice details
      </h2>
      <div className="daily-practice">
        <div>
          <ShowScales
            dailyScales={dailyScales}
            setDailyScales={setDailyScales}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Main;
