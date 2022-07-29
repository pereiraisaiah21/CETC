import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

function ButtonPrimary ({className, itemLink, itemTitle, icon}) {
    return (
        <a className={className} href={itemLink} title={itemTitle}>
            <FontAwesomeIcon className="MainBoard__warn__icon" icon={faDumbbell} />
            <span>{itemTitle}</span>
        </a>
    );
}

export default ButtonPrimary;