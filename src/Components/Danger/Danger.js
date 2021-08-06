import React from 'react';
import './Danger.css'
const Danger = () => {
    return (
        <div className="danger-wrapper">
            <div className="danger-title">
            Danger Zone</div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <button className="danger-btn">
            Delete My Account</button></div>
        </div>
    );
};

export default Danger;