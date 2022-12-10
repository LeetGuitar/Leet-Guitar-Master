import React from 'react';

const LoginModal = (props) => {
  if (!props.showL) {
    return null;
  }

  return (
    <div className='loginbox'>
      <form className='login' onSubmit={props.onSubmit} >
        <h4>Login</h4>
        <label htmlFor='user'>Username</label>
        <br />
        <input type='text' id='loginUser' className='inputbox' name='user' />
        <br />

        <label htmlFor='pass'>Password</label>
        <br />
        <input type='text' id='loginPass' className='inputbox' name='pass'></input>
        <br />
        <input type='submit' id='submit' name='submit'></input>
      
        <a href='#' onClick={props.onClose}>close</a>
      </form>
    </div>
  );
};

export default LoginModal;
