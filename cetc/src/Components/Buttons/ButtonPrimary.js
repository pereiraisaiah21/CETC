import React from "react";

function ButtonPrimary ({className, itemLink, itemTitle, icon}) {
    return (
        <a className={className} href={itemLink} title={itemTitle}>
            {
                icon != ""
                ?
                "fs"
                :
                "fsdf"
            }
            {itemTitle}
        </a>
    );
}

export default ButtonPrimary;