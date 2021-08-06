import React from 'react';
import './Security.css'


const Security = () => {
    return (
        <div className="security-wrapper">
            <div className="security-title">
            Security
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <div className="security-content">
            2-Step Verification 
            </div>
           <div className="security-switch" >
           
            <label className="switch">
  <input className="security-input" type="checkbox" defaultChecked={true}/>
  <span className="slider round"></span>
</label>
    </div>
            </div>
        </div>
    );
};

export default Security;