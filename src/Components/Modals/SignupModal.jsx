import React from 'react';

const SignupModal = (props) => {
  if (!props.showS) {
    return null;
  }
  

  return (
    <div className='signupbox'>
      <form className='signup' onSubmit={props.onSubmit}>
        <h4>Sign up</h4>
        <label htmlFor='user'>Username</label>
        <br />
        <input type='text' id='signupUser' className='inputbox' name='user' />
        <br />

        <label htmlFor='pass'>Password</label>
        <br />
        <input type='text' id='signupPass' className='inputbox' name='pass'></input>
        <br />
        <input type='submit' id='submit' name='submit'></input>
        <a href='#' onClick={props.onClose}>close</a>
      </form>
    </div>
  );
};

export default SignupModal;
