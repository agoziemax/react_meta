import React from 'react'
import '../styles/landing.css';
import Logo from '../components/Logo';
import whiteLogo from '../assets/white-logo.png';


function LandingPage() {
  return (
    <div className=' container-fluid main'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mb-5'>
            <Logo logo={whiteLogo} style={{ width: '200px', height: '200px'}} />
          </div>
          <div className='welcomeNote text-white mb-0'>
            <div className='mb-5'>
              <p className='welcome'>Welcome Comrade!</p>
              <p className='welcome2'>
                Welcome to Sterling Bank the one customer bank <br />
                where we make magic happen
              </p>
            </div>
            <div className='welcome3 '>
              <p>You will be onboarded in these 3 simple steps:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage
