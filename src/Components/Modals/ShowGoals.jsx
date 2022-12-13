import React, { useState } from 'react';
import Timer from './Timer.jsx';
// import icon2 from '../../imgs/icon-2.png';

function ShowGoals(props) {
  const timeDivider = (focus) => {
    if (focus === 1) {
      return Math.floor(props.formData.practiceTime * 0.5);
    } else if (focus === 2) {
      return Math.floor(props.formData.practiceTime * 0.3);
    } else if (focus === 3) {
      return Math.floor(props.formData.practiceTime * 0.2);
    }
  };
  return (
    <div>
      <h2 class="practice-heading">Today's practice goals:</h2>
      <h3>Length of Time: {props.formData.practiceTime}</h3>
      <h4>Your practice goals for today are:</h4>
      <p>
        Focus 1: {props.formData.focus1} for {timeDivider(1)} minutes.
      </p>
      <p>
        Focus 2: {props.formData.focus2} for {timeDivider(2)} minutes.
      </p>
      <p>
        Focus 3: {props.formData.focus3} for {timeDivider(3)} minutes.
      </p>
      <div>
        <h2 class="practice-heading"> Practice Timer:</h2>
        <Timer formData={props.formData} />
      </div>
    </div>
  );
}

export default ShowGoals;
