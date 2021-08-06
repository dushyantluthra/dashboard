import './Account.css'
import React from 'react';
import Button from '../common/Button';


const Account = () =>{

return(
    <div className="account-wrapper">
    <div className="account-title">
    Account
    </div>
    <form className="account-form">
    <label htmlFor = "emailaddress" className="account-label">
Email address
<input className="account-input" type="email" defaultValue="suryawigunaa@gmail.com" placeholder="Enter Email" required></input>
</label>

<label htmlFor="Password" className="account-label">
Password
<div className="account-input-eye">
<input className="account-input toggle" type="password" placeholder="Enter Password" required defaultValue="123456789"/>
<div className="account-eye"><i className="fas fa-eye-slash account-eye1" onClick={()=>{
    
    if(document.querySelector('.toggle').type === "password"){
        document.querySelector('.toggle').type = "text"
        document.querySelector('.account-eye1').className = "fas fa-eye account-eye1"
    }
    else{
        document.querySelector('.toggle').type = "password"
        document.querySelector('.account-eye1').className = "fas fa-eye-slash account-eye1"
   }
   //console.log("hi");
    
}}></i></div>
</div>
</label>


<label htmlFor="Password" className="account-label">
Confirm Password
<div className="account-input-eye">
<input className="account-input toggle2" type="password" placeholder="Enter Password" required defaultValue="123456789"/>
<div className="account-eye"><i className="fas fa-eye-slash account-eye2" onClick={()=>{
    
    if(document.querySelector('.toggle2').type === "password"){
        document.querySelector('.toggle2').type = "text"
        document.querySelector('.account-eye2').className = "fas fa-eye account-eye2"
    }
    else{
        document.querySelector('.toggle2').type = "password"
        document.querySelector('.account-eye2').className = "fas fa-eye-slash account-eye2"
   }
   //console.log("hi");
    
}}></i></div>
</div>
</label>


    </form>
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
            <Button text="Save" bcolor="#519BD0"/>
            </div>
    </div>
)

}

export default Account