import React from 'react';

function Scales(props) {
  return (
    <div className="scales-form">
      <div className="notes">
        <h2>Choose your note</h2>
        <input
          type="radio"
          name="note"
          id="note-a"
          value="A"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-a">A</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-b"
          value="B"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-b">B</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-c"
          value="C"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-c">C</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-d"
          value="D"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-d">D</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-e"
          value="E"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-e">E</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-f"
          value="F"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-f">F</label>
        <br />

        <input
          type="radio"
          name="note"
          id="note-g"
          value="G"
          onChange={(e) => {
            props.setScales({ ...props.Scales, note: e.target.value });
          }}
        />
        <label for="note-g">G</label>
        <br />
      </div>
      <div>
        <h2> Choose Accidental</h2>

        <input
          type="radio"
          name="accidental"
          id="none"
          value="null"
          onChange={(e) => {
            props.setScales({ ...props.Scales, accidental: e.target.value });
          }}
        />
        <label for="none">None</label>
        <br />

        <input
          type="radio"
          name="accidental"
          id="flat"
          value="flat"
          onChange={(e) => {
            props.setScales({ ...props.Scales, accidental: e.target.value });
          }}
        />
        <label for="flat">Flat</label>
        <br />

        <input
          type="radio"
          name="accidental"
          id="sharp"
          value="sharp"
          onChange={(e) => {
            props.setScales({ ...props.Scales, accidental: e.target.value });
          }}
        />
        <label for="sharp">Sharp</label>
        <br />
      </div>
      <div className="submit-scales">
        <button
          value="Submit"
          onClick={() => {
            //add logic here to change conditional in main
          }}
        />
      </div>
    </div>
  );
}

export default Scales;
