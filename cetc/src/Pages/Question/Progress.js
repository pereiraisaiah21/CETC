import React, {useState} from 'react';

import "./Question.scss";

function Progress ({progress}) {
    const [progressValue, setProgressValue] = useState(0);

    return (
        <div className="Progress">
            <span className="Progress__made">
                <span className="Progress__made__number">20 %</span>
            </span>
        </div>
    )
}

export default Progress;