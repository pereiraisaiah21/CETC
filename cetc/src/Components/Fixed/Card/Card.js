// Libs
import React from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

// Images
import Matter from "../../../Components/matter.png"

/*
* It return a single card with a few informations
*/

function Card ({link, classStyleGrand, altImage, classStyleImage, classStyleSpan, classStyleDiv, classStyleDivSpan, classStyleDivLabel, title, description}) {

    /*
    * 
    */
    return (
        <a href={`${link}`} className={classStyleGrand}>
            <img alt={altImage} className={classStyleImage} src={Matter} />
            <span className={`${classStyleSpan} title`}>{title}</span>
            <div className={classStyleDiv}>
                <span className={classStyleDivSpan}></span>
                <label className={`${classStyleDivLabel} open`}>
                    <FontAwesomeIcon className="Maincard_" icon={faHandPointer} />
                    {description}
                </label>
            </div>
        </a>
    )
}

export default Card;