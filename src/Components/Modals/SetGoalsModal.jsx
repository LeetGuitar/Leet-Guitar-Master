import React, { useState } from 'react';
import Minutes from './Goal-Steps/Minutes.jsx';
import Focus1 from './Goal-Steps/Focus1.jsx';
import Focus2 from './Goal-Steps/Focus2.jsx';
import Focus3 from './Goal-Steps/Focus3.jsx';

function SetGoalsModal() {
  const [page, setPage] = useState(0);
  const FormTitles = [
    'How many minutes do you want to study today?',
    'What is your top priority for your practice today?',
    'What is your number 2 priority for your practice today?',
    'What is your number 3 priority for your practice today?',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Minutes />;
    } else if (page === 1) {
      return <Focus1 />;
    } else if (page === 2) {
      return <Focus2 />;
    } else {
      return <Focus3 />;
    }
  };

  return (
    <div className="setGoalsForm">
      <div className="progressbar">
        <div
          sytle={{
            width:
              page === 0
                ? '25%'
                : page === 2
                ? '50%'
                : page === 3
                ? '75%'
                : '100%',
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page == FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetGoalsModal;
