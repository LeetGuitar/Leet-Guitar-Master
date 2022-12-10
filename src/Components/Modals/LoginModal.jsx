import React from 'react';

const LoginModal = () => {
  const loginSubmit = (e) => {
    e.preventDefault();
    //we are sending username and PW to the frontend as lowercase keys
    const username = document.getElementById('loginUser').value;
    const password = document.getElementById('loginPass').value;

    const requestBody = { username, password };
    if (username === '' || password === '') {
      return alert('username or password cannot be blank');
    }
    console.log(requestBody);

    e.target.reset();
  };

  return (
    <div className="login">
      <h2>This is the login modal</h2>
      <form className="login" onSubmit={loginSubmit}>
        <label htmlFor="user">Username</label>
        <br />
        <input type="text" id="loginUser" name="user" />
        <br />

        <label htmlFor="pass">Password</label>
        <br />
        <input type="text" id="loginPass" name="pass"></input>
        <br />
        <input type="submit" id="submit" name="submit"></input>
      </form>
    </div>
  );
};

export default LoginModal;
