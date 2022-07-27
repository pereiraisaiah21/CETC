// Libs
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Alerts.scss";

/*
* Return a page containing the use questions, invoking another components
*/

function SimpleAlert ({alertText, colorAlertText}) {

    return (
       <div className="simpleAlert">
            <FontAwesomeIcon className="simpleAlert__icon" icon={faCircleInfo} style={{color : `${colorAlertText}`, borderColor : `${colorAlertText}`}}/>
            <p className="simpleAlert__text" style={{color : `${colorAlertText}`}}>{alertText}</p>
       </div>
    )
}

export default SimpleAlert;