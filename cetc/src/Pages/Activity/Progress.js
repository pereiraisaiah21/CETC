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
    const [progressValue, setProgressValue] = useState(0);

    /*
    * 
    */
    return (
        <div className="Progress">
            <span className="Progress__made">
                <span className="Progress__made__number">20 %</span>
            </span>
        </div>
    )
}

export default Progress;