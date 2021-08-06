import './ThirdpartySign.css'
import React from 'react';

const ThirdpartySign = (props) => {
    return (
        <div className="third-wrapper">
        <div className="logo">{props.logo}</div>
        <div className="third-text">{props.text}</div>
    </div>
    );
};

export default ThirdpartySign; 