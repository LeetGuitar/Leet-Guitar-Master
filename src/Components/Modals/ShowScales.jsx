import React, { useState } from 'react';

function ShowScales(props) {
  //setDailyScales //dailyScales
  const [scale, setScale] = useState('');
  // setScale(dailyScales.major);

  const [showScale, setShowScale] = useState(false);
  const renderScale = (id) => {};

  // const whatToShow = () => {
  //   if (showScale === true) {
  //     return <p>Scale {props.scale}</p>;
  //   }
  // };
  return (
    <div>
      <div className="dropdown">
        <h2 className="practice-heading">Select your scale</h2>
        <button class="dropbtn">Select</button>
        <div class="dropdown-content">
          <a
            href="#"
            id="major"
            onClick={(e) => {
              setScale(props.dailyScales.major);
              console.log(`props.dailyScales.major`, props.dailyScales.major);
              console.log(`scale ====`, scale);
              // setShowScale(true);
            }}
          >
            Major
          </a>
          <a
            href="#"
            id="lydian"
            onClick={(e) => {
              setScale(props.dailyScales.lydian);
            }}
          >
            Lydian
          </a>
          <a
            href="#"
            id="lydian_dominant"
            onClick={(e) => {
              setScale(props.dailyScales.lydian_dominant);
            }}
          >
            Lydian Dominant
          </a>
          <a
            href="#"
            id="mixolydian"
            onClick={(e) => {
              setScale(props.dailyScales.mixolydian);
            }}
          >
            Mixolydian
          </a>
          <a
            href="#"
            id="aeolian"
            onClick={(e) => {
              setScale(props.dailyScales.aeolian);
            }}
          >
            Aeolian
          </a>
          <a
            href="#"
            id="phrygian"
            onClick={(e) => {
              setScale(props.dailyScales.phrygian);
            }}
          >
            Phrygian
          </a>
          <a
            href="#"
            id="dorian"
            onClick={(e) => {
              setScale(props.dailyScales.dorian);
            }}
          >
            Dorian
          </a>
          <a
            href="#"
            id="harmonic_minor"
            onClick={(e) => {
              setScale(props.dailyScales.harmonic_minor);
            }}
          >
            Harmonic Minor
          </a>
          <a
            href="#"
            id="melodic_minor"
            onClick={(e) => {
              setScale(props.dailyScales.melodic_minor);
            }}
          >
            Melodic Minor
          </a>
        </div>
      </div>
      <div className="scale-to-practice">{scale}</div>
    </div>
  );
}

export default ShowScales;
