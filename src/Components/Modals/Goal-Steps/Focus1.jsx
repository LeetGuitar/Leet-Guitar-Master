import React, { useState } from 'react';

function Focus1() {
  const [focus, setFocus] = useState();

  return (
    <div className="focus">
      <input
        type="radio"
        name="focus"
        id="focus-1"
        value="Technique"
        onChange={(e) => {
          setFocus(e.target.value);
        }}
      />
      <label for="focus-1">Technique</label>
      <br />
      <input
        type="radio"
        name="focus"
        id="focus-2"
        value="Theory"
        onChange={(e) => {
          setFocus(e.target.value);
        }}
      />
      <label for="focus-2">Theory</label>
      <br />
      <input
        type="radio"
        name="focus"
        id="focus-3"
        value="Songs"
        onChange={(e) => {
          setFocus(e.target.value);
        }}
      />
      <label for="focus-3">Songs</label>
      <br />
      <input
        type="radio"
        name="focus"
        id="focus-4"
        value="Sight-Reading"
        onChange={(e) => {
          setFocus(e.target.value);
        }}
      />
      <label for="focus-4">Sight Reading</label>
      <br />
    </div>
  );
}

export default Focus1;
