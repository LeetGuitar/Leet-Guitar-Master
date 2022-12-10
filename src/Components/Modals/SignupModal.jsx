import React from 'react';

const SignupModal = (props) => {
  if (!props.showS) {
    return null;
  }
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
    <div className='signupbox'>
      <form className='signup' onSubmit={signupSubmit}>
        <h4>Sign up</h4>
        <label htmlFor='user'>Username</label>
        <br />
        <input type='text' id='signupUser' id='inputbox' name='user' />
        <br />

        <label htmlFor='pass'>Password</label>
        <br />
        <input type='text' id='signupPass' id='inputbox' name='pass'></input>
        <br />
        <input type='submit' id='submit' name='submit'></input>
        <a href='#' onClick={props.onClose}>close</a>
      </form>
    </div>
  );
};

export default SignupModal;
