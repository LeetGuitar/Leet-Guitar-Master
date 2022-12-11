import React, { useState, setState, useEffect } from 'react';
import LoginModal from './Modals/LoginModal.jsx';
import SignupModal from './Modals/SignupModal.jsx';

const Landing = () => {
  const [showS, setShowS] = useState(false);
  const [showL, setShowL] = useState(false)

  const loginSubmit = (e) => {
    e.preventDefault();
    
    //we are sending username and PW to the frontend as lowercase keys
    const username = e.target.elements.user.value;
    const password = e.target.elements.pass.value;

    const requestBody = { username, password };
    if (username === '' || password === '') {
      return alert('username or password cannot be blank');
    }
    console.log(requestBody);
    setShowL(false)
    e.target.reset();
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    //we are sending username and PW to the frontend as lowercase keys
    const username = e.target.elements.user.value;
    const password = e.target.elements.pass.value;

    const requestBody = { username, password };
    if (username === '' || password === '') {
      return alert('username or password cannot be blank');
    }
    console.log(requestBody);
    setShowS(false)
    e.target.reset();
  };

  return (
    <div className='landing'>
      <header className='logo'></header>
      <div className='first-div'>
        <img className='img'></img>
        <div className='login-div'>
          <h2>A New way to learn</h2>
          <p>lorem ipsum</p>
          <div className='btn-box'>
            <button onClick={() => setShowL(true)}>Log In</button>
            <LoginModal onSubmit={loginSubmit} onClose={() => setShowL(false)} showL={showL} />
            <button onClick={() => setShowS(true)}>Create an Account</button>
            <SignupModal onSubmit={signupSubmit} onClose={() => setShowS(false)} showS={showS} />
          </div>
        </div>
      </div>
      <div className='second-div'>
        <div className='benefits'>
          <h2>Take your guitar playing to the next level</h2>
          <p>Technique</p>
          <p>Theory</p>
          <p>Songs</p>
        </div>
        <img className='img'></img>
      </div>
    </div>
  );
};

export default Landing;
