import React from 'react';

const LoginModal = (props) => {
  if (!props.showL) {
    return null;
  }
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
    <div className='loginbox'>
      <form className='login' onSubmit={loginSubmit}>
        <h4>Login</h4>
        <label htmlFor='user'>Username</label>
        <br />
        <input type='text' id='loginUser' id='inputbox' name='user' />
        <br />

        <label htmlFor='pass'>Password</label>
        <br />
        <input type='text' id='loginPass' id='inputbox' name='pass'></input>
        <br />
        <input type='submit' id='submit' name='submit'></input>
        <a href='#' onClick={props.onClose}>close</a>
      </form>
    </div>
  );
};

export default LoginModal;
