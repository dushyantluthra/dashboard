import React from 'react';
import './DashSignin.css';
import ThirdpartySign from './ThirdpartySign';


const DashSignup = () => {
    return (
         <div className="wrapper-signin">
        <div className="header">
        <p className="header-text">Create an account</p>
        </div>
        <div className="sub-header">
        <p className="subheader-text">
        Create an account to use dashboard
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
<div className="name-wrapper">
<label htmlFor = "firstname" className="label-info">
First Name
<input className="input-info name" type="text" defaultValue="Surya" placeholder="First Name" required></input>
</label>
<label htmlFor = "lastname" className="label-info">
Last Name
<input className="input-info name" type="text" defaultValue="Wiguna" placeholder="Last Name" required></input>
</label>

</div>
<label htmlFor = "emailaddress" className="label-info">
Email address
<input className="input-info" type="email" defaultValue="suryawigunaa@gmail.com" placeholder="Enter Email" required></input>
</label>
<label htmlFor="Password" className="label-info">
Password
<div className="input-info-eye">
<input className="input-info toggle" type="password" placeholder="Enter Password" required defaultValue="123456789"/>
<div className="eye"><i className="fas fa-eye-slash eye1" onClick={()=>{
    
    if(document.querySelector('.toggle').type === "password"){
        document.querySelector('.toggle').type = "text"
        document.querySelector('.eye1').className = "fas fa-eye eye1"
    }
    else{
        document.querySelector('.toggle').type = "password"
        document.querySelector('.eye1').className = "fas fa-eye-slash eye1"
    }
    
}}></i></div>
</div>
</label>

<label htmlFor="Confirmpassword" className="label-info">
Confirm Password
<div className="input-info-eye">
<input className="input-info toggle2" type="password" placeholder="Enter Password" required defaultValue="123456789"/>
<div className="eye"><i className="fas fa-eye-slash eye2" onClick={()=>
    {
       
        if(document.querySelector(".toggle2").type === "password"){
            document.querySelector(".toggle2").type = "text"
            document.querySelector(".eye2").className = "fas fa-eye eye2"
        }
        else{
            document.querySelector(".toggle2").type = "password"
            document.querySelector(".eye2").className = "fas fa-eye-slash eye2"
        }
}}></i></div>
</div>
</label>

<div className="tnc">
<div className="checkbox">
<i className="fas fa-check-square toggle3" onClick={()=>{
    if(document.querySelector(".toggle3").className.includes("fa-check-square") === true){
        document.querySelector(".fa-check-square").className = "far fa-square toggle3"
        document.querySelector(".submit-btn").disabled = true

    }
    else{
        document.querySelector(".fa-square").className = "fas fa-check-square toggle3"
        document.querySelector(".submit-btn").disabled = false
    }
    
}}></i>
</div>
<span className="register-here">I agree the <a href="#" style={{marginLeft:'3px'}}>terms and conditions</a></span>
</div>

<button className="submit-btn" disabled={false}>
Sign Up</button>
</form>
</div>
      
        </div>
    );
};

export default DashSignup;