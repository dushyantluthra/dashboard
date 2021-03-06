import React from 'react';
import './DashSignin.css';
import ThirdpartySign from './ThirdpartySign';
import { Link, BrowserRouter as Router } from 'react-router-dom';



const DashSignin = () => {
    return (
        <div className="wrapper-signin">
        <div className="header">
        <p className="header-text">Sign In</p>
        </div>
        <div className="sub-header">
        <p className="subheader-text">
        Sign in to your account
        </p>
        </div>
        <div className="third-party">
        <button className="thirdparty-btn">
        <ThirdpartySign logo={<i className="fab fa-google"></i>} text={"Sign in with Google"}/>
        </button>
        <button className="thirdparty-btn"><ThirdpartySign logo={<i className="fab fa-apple"></i>} text="Sign in with Apple"/>
        </button>
        </div>
        <div className="form-wrapper">
<form className="form-signin">
<label htmlFor = "emailaddress" className="label-info">
Email address
<input className="input-info" type="email" defaultValue="suryawigunaa@gmail.com" placeholder="Enter Email" required></input>
</label>
<label htmlFor="Password" className="label-info" >
Password
<input className="input-info" type="password" placeholder="Enter Password" required defaultValue="123456789"/>
</label>
<div className="forgot-pass"><a href="#">Forgot password?</a></div>


<Link to='/homepage'>
<button className="submit-btn">
Sign In</button>
</Link>

</form>

</div>
       <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
Don't have an account? 

<Link to="/signup">
Register here
</Link>

</div>
        </div>
    );
};

export default DashSignin;