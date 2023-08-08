import React from 'react';
import Logo from '../components/Logo';
import blackLogo from '../assets/black-logo.png';
import emailIcon from '../assets/email-icon.svg';
import '../styles/login.css';
import { useState } from 'react';
import { EyeSlashFill, EyeFill } from 'react-bootstrap-icons';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [notificationForm, setNotificationForm] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  function formToggle() {
    setShowResetForm(!showResetForm);
  }

  function formMain() {
    setShowResetForm(!showResetForm);
    setNotificationForm(!notificationForm);
  }

  function notificationToggle() {
    setNotificationForm(!notificationForm);
  }

  function handleLogin() {
    // Handle login logic
    console.log('Logging in...');
  }

  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-sm pt-3'>
          <Logo logo={blackLogo} />
          {!showResetForm && (
            <form className='loginForm forms col-md-10 ps-4 ms-2 pt-3'>
              <h4 className='form-tittle pt-3'>Login</h4>
              <span className='text-secondary small'>Provide the following details to login</span>
              <div className='form-group pt-4'>
                <label htmlFor='username' className='pb-2'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-control mb-3'
                  id='username'
                  aria-describedby='emailHelp'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='pb-2'>
                  Password
                </label>
                <div className='password-input-wrapper'>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className='form-control'
                    id='password'
                    name='password'
                    aria-label='Password'
                    autoComplete='off'
                  />
                  <span className='toggle-password' onClick={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <EyeFill className='text-secondary' />
                    ) : (
                      <EyeSlashFill className='text-secondary' />
                    )}
                  </span>
                </div>
              </div>
              <span className='forgotPassword small' onClick={formToggle}>
                Forgot Password?
              </span>
              <button className='btn btn-danger w-100 py-2 mt-3' onClick={() => navigate('/LandingPage')} type='button'>
                Login
              </button>
              <span
                className='new-oldUser pt-3 small text-secondary'
                id='createAccount'
                onClick={() => navigate('/CreateAccount')}
              >
                <u>New user? click here to create an account</u>
              </span>
            </form>
          )}

          <>
            {/* >>>>>>>>>>>>>>>> forgot Password form >>>>>>>>>>>>>>>> */}
            {!notificationForm && showResetForm && (
              <form
                className='passwordResetForm forms col-md-10 ps-4 ms-2 mt-4'
                style={{ display: showResetForm ? 'block' : 'none' }}
              >
                <h4 className='form-tittle pt-3'>Forgot Password</h4>
                <span className='text-secondary small'>
                  Provide your email address and a link would be sent to you to reset your password
                </span>
                <div className='form-group pt-4 pb-2'>
                  <label htmlFor='exampleInputEmail1' className='mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    autoComplete='off'
                  />
                </div>
                <button
                  className='btn btn-danger w-100 py-2 mt-3 passwordResetButton'
                  type='button'
                  onClick={notificationToggle}
                >
                  Done
                </button>
              </form>
            )}
          </>
          {/* <!-- >>>>>> Password Reset Email Notification --> */}
          {notificationForm && (
            <div className='notificationElements pt-5' style={{ display: notificationForm ? 'block' : 'none' }}>
              <img src={emailIcon} alt='email-icon' />

              <h4 className='form-tittle pt-3'>Email Sent</h4>
              <span className='text-secondary small'>A link has been sent to your email to reset your password</span>
              <Button text='Back to Login' className=' text-white' onClick={formMain} />
            </div>
          )}
        </div>
        <div className='col-sm loginBG d-none d-md-block '></div>
      </div>
    </div>
  );
}

export default Login;
