// Libs
import React from "react";

/*
* Return a breadcrumb's item
*/

function item ({classStyle, title, link}) {

    /*
    *
    */
    return (
        <span className={classStyle}>
            <a href={link} title={title}>
                {title}
            </a> 
        </span>
    )
}

export default item;