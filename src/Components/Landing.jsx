import React from 'react';
import LoginModal from './Modals/LoginModal.jsx';
import SignupModal from './Modals/SignupModal.jsx';
const Landing = () => {
  return (
    <div class='landing'>
      <h2>This is the landing page</h2>
      <LoginModal />
      <SignupModal />
    </div>
  );
};

export default Landing;
