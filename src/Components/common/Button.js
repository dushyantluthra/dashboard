import React from 'react';
import './Button.css'
const Button = (props) => {
    const {text, bcolor} = props
    return (
        <button className="button-wrapper" style={{background: bcolor}}>
            {text}
        </button>
    );
};

export default Button;