// Libs
import React from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ButtonPrimary ({
    className, 
    itemLink, 
    itemTitle, 
}) {
    
    return (
        <a className={className} href={itemLink} title={itemTitle}>
            <FontAwesomeIcon className="MainBoard__warn__icon" icon={faDumbbell} />
            <span>{itemTitle}</span>
        </a>
    );
}

export default ButtonPrimary;