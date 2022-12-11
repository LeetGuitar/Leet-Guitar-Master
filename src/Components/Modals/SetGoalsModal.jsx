import React, { useState } from 'react';
import Minutes from './Goal-Steps/Minutes.jsx';
import Focus1 from './Goal-Steps/Focus1.jsx';
import Focus2 from './Goal-Steps/Focus2.jsx';
import Focus3 from './Goal-Steps/Focus3.jsx';

function SetGoalsModal() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    practiceTime: 0,
    focus1: '',
    focus2: '',
    focus3: '',
  });

  const FormTitles = [
    'How many minutes do you want to study today?',
    'What is your top priority for your practice today?',
    'What is your number 2 priority for your practice today?',
    'What is your number 3 priority for your practice today?',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Minutes formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Focus1 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Focus2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Focus3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="setGoalsForm">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? '25%'
                : page === 1
                ? '50%'
                : page === 2
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
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('Form Submitteed');
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetGoalsModal;
