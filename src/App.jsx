// import * as serviceService from './services/serviceService';
import { Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import authService from './services/authService'

// Components
import ServiceList from "./components/service/ServiceList";
import NavBar from "./components/partials/NavBar";
import SignupForm from './components/auth/SignUpForm';
import SigninForm from './components/auth/SignInForm';

const App = () => {
  const [user, setUser] = useState(authService.getUser());

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  }

  return (
    <>
      <div className="home-content">
        <h4>Hello, welcome to</h4>
        <h1 className="glowing-title">
          Serenity <span>Spa</span>
        </h1>
        <h3>Where you will feel most Beautiful</h3>
        <br /><br /><br />
        <a className="appoint-button" href="/services">Make an Appointment</a>
      </div>

      <Routes>
        <Route path="/services" element={<ServiceList />} />
        <Route path="/NavBar" element={< NavBar/>} />
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>

<Link to="/services" >Services </Link>
<Link to="/signup" >Sign up</Link>
<Link to="/signin" >Sign In </Link>

    </>
  );
};

export default App;