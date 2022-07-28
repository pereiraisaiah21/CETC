import React from "react";

function ButtonPrimary ({className, itemLink, itemTitle, icon}) {
    return (
        <a className={className} href={itemLink} title={itemTitle}>
            {itemTitle}
        </a>
    );
}

export default ButtonPrimary;