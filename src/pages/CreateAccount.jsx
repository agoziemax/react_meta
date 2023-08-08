import React from 'react';
import '../styles/login.css';
import Logo from '../components/Logo';
import { EyeSlashFill, EyeFill } from 'react-bootstrap-icons';
import blackLogo from '../assets/black-logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

   function handlePasswordChange(event) {
     setPassword(event.target.value);
     console.log(password);
    //  setErrorMessage('');
   }

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  function toggleConfirmPasswordVisibility() {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  }

  return (
    <div className=' container-fluid'>
      <div className='row'>
        <div className='col-sm pt-4'>
          <Logo logo={blackLogo} />
          <form className='createAccountForm forms col-md-10 ps-4 ms-2 pt-3'>
            <h4 className='form-tittle pt-3'>Create account</h4>
            <span className='text-secondary small'>Provide the following details to login</span>
            <div className='form-group pt-4 mb-3'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                aria-describedby='emailHelp'
                autoComplete='off'
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='exampleInputEmail1'>Email</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                autoComplete='off'
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='newPassword'>New Password</label>
              <div className='password-input-wrapper'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className='form-control'
                  id='newPassword'
                  name='newPassword'
                  aria-label='Password'
                  autoComplete='off'
                  value={password}
                  onChange={handlePasswordChange}
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
            <div className='form-group mb-3'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <span className='float-right text-danger small pt-2' id='error-message' />
              <div className='password-input-wrapper'>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPassword'
                  name='confirmPassword'
                  aria-label='Password'
                  autoComplete='off'
                />
                <span className='toggle-password' onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordVisible ? (
                    <EyeFill className='text-secondary' />
                  ) : (
                    <EyeSlashFill className='text-secondary' />
                  )}
                </span>
              </div>
            </div>
            <button type='button' className='btn btn-danger w-100 py-2 mt-3' onClick={() => navigate('/Login')}>
              Done
            </button>
            <span className='new-oldUser backToLogin pt-3 small text-secondary' onClick={() => navigate('/Login')}>
              <u>Existing user? click here to to Login</u>
            </span>
          </form>
        </div>
        <div className='col-sm loginBG d-none d-md-block'></div>
      </div>
    </div>
  );
}

export default CreateAccount;
