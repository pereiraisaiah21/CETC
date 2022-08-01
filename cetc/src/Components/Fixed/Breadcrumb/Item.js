// Libs
import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function item ({
    classStyle, 
    title, 
    link
}) {

    return (
        <span className={classStyle}>
            <a href={link} title={title}>
                {title}
            </a> 
        </span>
    );
}

export default item;