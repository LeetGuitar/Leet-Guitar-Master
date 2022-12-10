import React from 'react';
import LoginModal from './Modals/LoginModal.jsx';
import SignupModal from './Modals/SignupModal.jsx';
const Landing = () => {
  return (
    <div className='landing'>
      <header className='logo'></header>
      <div className='first-div'>
        <img className='img'></img>
        <div className='login-div'>
          <h2>A New way to learn</h2>
          <p>lorem ipsum</p>
          <div className='btn-box'>
            <button>Log In</button>
            <button>Create an Account</button>
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
      <LoginModal />
      <SignupModal />
    </div>
  );
};

export default Landing;
