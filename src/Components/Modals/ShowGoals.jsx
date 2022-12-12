import React, { useState } from 'react';
import Timer from './Timer.jsx';

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
      <h2>Your Practice for Today</h2>
      <h3>Length of Time: {props.formData.practiceTime}</h3>
      <h3>Your practice goals for today are:</h3>
      <h4>
        Focus 1: {props.formData.focus1} for {timeDivider(1)} minutes.
      </h4>
      <h4>
        Focus 2: {props.formData.focus2} for {timeDivider(2)} minutes.
      </h4>
      <h4>
        Focus 3: {props.formData.focus3} for {timeDivider(3)} minutes.
      </h4>
      <div>
        <Timer formData={props.formData} />
      </div>
    </div>
  );
}

export default ShowGoals;
