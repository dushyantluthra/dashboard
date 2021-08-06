import React from 'react';
// import DashSignin from '../Components/DashSign/DashSignin';
import DashSignup from '../Components/DashSign/DashSignup';
import './Signin.css'
const Signup = () => {
    return (
        <div className="signin-container">
          <div className="signin-left"><div>Dash.</div></div>
          <div className="signup-right"><DashSignup/>
          </div>  
        </div>
    );
};

export default Signup;