//Libs
import React from "react";

// Styles
import "./Texts.scss";

/*
* Return a simple text component
*/

function TextPrimary ({title, text}) {

    /*
    *
    */
    return (
        <div className="TextPrimary">
            <h3 className="TextPrimary__title">
                {title}
            </h3>
            <p className="TextPrimary__text">
                {text}
            </p>
        </div>
    )
}

export default TextPrimary;