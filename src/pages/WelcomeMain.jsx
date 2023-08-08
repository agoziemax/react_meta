import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import whiteLogo from '../assets/white-logo.png';
import '../styles/welcomeMain.css'

const WelcomeMain = () => {
  const navigate = useNavigate();
  return (
    <div className='landerBG p-5 pt-3'>
      <Logo logo={whiteLogo} />
      {/* <Welcome/> */}
      <section className='heroSection row px-0 mx-0 text-light'>
        <div className='col-lg px-0 mx-0'>
          <span>Welcome to</span> <br />
          <span className='brickRed'>Sterling</span>
          <p className='pt-2 small'>Talent Onboarding Management System</p>
          <Button onClick={() => navigate('/Login')} text='Get Started' />
        </div>
      </section>
    </div>
  );
};

export default WelcomeMain;
