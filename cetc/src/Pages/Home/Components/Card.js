import React from "react";

function Card ({classStyleGrand, classStyleSpan, classStyleDiv, classStyleDivSpan, classStyleDivLabel, title, description}) {
    return (
        <a className={classStyleGrand}>
            <span className={classStyleSpan}>{title}</span>
            <div className={classStyleDiv}>
                <span className={classStyleDivSpan}></span>
                <label className={classStyleDivLabel}>Description</label>
            </div>
        </a>
    )
}

export default Card;