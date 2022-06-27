// Libs
import React from "react";

/*
* It return a single card with a few informations
*/

function Card ({link, classStyleGrand, classStyleSpan, classStyleDiv, classStyleDivSpan, classStyleDivLabel, title, description}) {

    /*
    * 
    */
    return (
        <a href={`${link}`} className={classStyleGrand}>
            <span className={classStyleSpan}>{title}</span>
            <div className={classStyleDiv}>
                <span className={classStyleDivSpan}></span>
                <label className={classStyleDivLabel}>Description</label>
            </div>
        </a>
    )
}

export default Card;