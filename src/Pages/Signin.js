import React from 'react';
import DashSignin from '../Components/DashSign/DashSignin';
import './Signin.css'
const Signin = () => {
    return (
        <div className="signin-container">
          <div className="signin-left"><div>Dash.</div></div>
          <div className="signin-right"><DashSignin/>
          </div>  
        </div>
    );
};

export default Signin;