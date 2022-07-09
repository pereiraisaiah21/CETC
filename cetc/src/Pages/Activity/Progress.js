// Libs
import React, {useState} from 'react';

// Styles
import "./Question.scss";

/*
* Return a progress bar according with the questions answereds
*/

function Progress ({progress}) {

    /*
    * It controls the progress bar color
    */
    console.log("df",progress)
    /*
    * 
    */
    return (
        <div className="Progress">
            <span className="Progress__made" style={{width: progress + "%"}}>
                <span className="Progress__made__number">{progress} %</span>
            </span>
        </div>
    )
}

export default Progress;