// Libs
import React from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Alerts.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function SimpleAlert ({
    alertText, 
    colorAlertText
}) {

    return (
       <div className="simpleAlert">
            <FontAwesomeIcon className="simpleAlert__icon" icon={faCircleInfo} style={{color : `${colorAlertText}`, borderColor : `${colorAlertText}`}}/>
            <p className="simpleAlert__text" style={{color : `${colorAlertText}`}}>{alertText}</p>
       </div>
    );
}

export default SimpleAlert;