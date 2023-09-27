import React from "react";
import './switch.css'

const Switch = () =>{
    return(
        <label className="Switch">
            <input type="checkbox" />
            <span className="Slider"></span>
        </label>
    );
};

export default Switch