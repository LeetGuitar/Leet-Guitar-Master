import React from 'react';

const SignupModal = () => {
  const signupSubmit = (e) => {
    e.preventDefault();
    //we are sending username and PW to the frontend as lowercase keys
    const username = document.getElementById('signupUser').value;
    const password = document.getElementById('signupPass').value;

    const requestBody = { username, password };
    if (username === '' || password === '') {
      return alert('username or password cannot be blank');
    }
    console.log(requestBody);

    e.target.reset();
  };

  return (
    <div class='signup'>
      <h2>This is the signup modal</h2>
      <form name='signup' onSubmit={signupSubmit}>
        <label htmlFor='user'>Username</label>
        <br />
        <input type='text' id='signupUser' name='user' />
        <br />

        <label htmlFor='pass'>Password</label>
        <br />
        <input type='text' id='signupPass' name='pass'></input>
        <br />
        <input type='submit' id='submit' name='submit'></input>
      </form>
    </div>
  );
};

export default SignupModal;
