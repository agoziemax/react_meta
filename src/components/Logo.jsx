import { useNavigate } from 'react-router-dom';

function Logo({logo, size}) {
  const navigate = useNavigate();
  return (
    <div className=' d-flex'>
      <img className='white-logo' src={logo} alt='sterling-logo' onClick={() => navigate('/')} />
    </div>
  );
}

export default Logo;
