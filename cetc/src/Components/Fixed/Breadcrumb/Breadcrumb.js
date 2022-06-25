import React from "react";

// Components
import Item from "./Item";

// Styles
import "./Breadcrumb.scss";

function Breadcrumb ({classStyleGrand, classStyleFather, pagesTrail}) {
    return (
        <section className="b-wrap">
            <section className={classStyleFather}>
                {pagesTrail.map(function (item, key) {
                    return (
                        <Item classStyle={item.classStyle} title={item.title} link={item.link} key={key}/>
                    )
                })}
            </section>
        </section>
    )
}

export default Breadcrumb;