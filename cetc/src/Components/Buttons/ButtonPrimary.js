// Libs
import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ButtonPrimary ({
    className, 
    itemLink, 
    itemTitle, 
}) {
    
    return (
        <a className={className} href={itemLink} title={itemTitle}>
            {itemTitle}
        </a>
    );
}

export default ButtonPrimary;