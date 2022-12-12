import React, { useState, setState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './Modals/LoginModal.jsx';
import SignupModal from './Modals/SignupModal.jsx';
import guitarplayer1 from '../imgs/leet-guitar-player-1.png';
import guitarplayer2 from '../imgs/leet-guitar-player-2.png';

const Landing = () => {
  const [showS, setShowS] = useState(false);
  const [showL, setShowL] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();

    //we are sending username and PW to the frontend as lowercase keys
    const username = e.target.elements.user.value;
    const password = e.target.elements.pass.value;

    const requestBody = { username, password };
    if (username === '' || password === '') {
      return alert('username or password cannot be blank');
    }
    fetch('http://localhost:8080/api/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
    })
      .then((data) => data.json())
      .then((data) => {
        const { err, status } = data;
        // console.log(data); //-> {status: 'login successful'} || {err: 'query not found'}
        if (err === 'query not found') {
          setShowL(true);
          alert('Username or password is incorrect');
        } else if (status === 'login successful') {
          //update the isLoggedState to be true
          setIsLoggedIn(true);
          setShowL(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
      });

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
    fetch('http://localhost:8080/api/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data === 'signup successful') {
          setIsLoggedIn(true);
          setShowS(false);
        } else if (data.err === 'Server Error during signup') {
          setShowS(true);
          alert('Username may already exist');
        }
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };

  const navigate = useNavigate();
  //after signup or login use navigation hook to route to main
  useEffect(() => {
    if (isLoggedIn === true) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div className="landing main">
      <div className="first-div">
        <div className="guitarPlayer">
          <img src={guitarplayer1} alt="Guitar Player Image" />
        </div>
        <div className="login-div">
          <h2>A New way to learn</h2>
          <p>
            Leet Guitar is the best platform to help you enhance your skills and
            expand your knowledge to become an expert guitar player.
          </p>
          <div className="btn-box">
            <button onClick={() => setShowL(true)}>Log In</button>
            <LoginModal
              isLoggedIn={isLoggedIn}
              onSubmit={loginSubmit}
              onClose={() => setShowL(false)}
              showL={showL}
            />
            <button onClick={() => setShowS(true)}>Create an Account</button>
            <SignupModal
              onSubmit={signupSubmit}
              onClose={() => setShowS(false)}
              showS={showS}
            />
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="benefits">
          <h2>Take your guitar playing to the next level</h2>
          <p>Technique</p>
          <p>Theory</p>
          <p>Songs</p>
        </div>
        <div className="guitarPlayer">
          <img src={guitarplayer2} alt="Guitar Player Image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
