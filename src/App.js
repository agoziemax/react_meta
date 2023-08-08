import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import WelcomeMain from './pages/WelcomeMain';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className='App '>

      
      <Routes>
        <Route path='/' element={<WelcomeMain />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/CreateAccount' element={<CreateAccount />} />
        <Route path='/LandingPage' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
