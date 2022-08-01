// Libs
import React from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Styles 
import "./Help.scss";

/**
 * 
 * @returns 
 */

function Help () {

    return (
        <div className="help">
            <FontAwesomeIcon className="help__icon" icon={faQuestionCircle} />
            <span className="help__text">Precisa de ajuda?</span>
        </div>
    );
}

export default Help;