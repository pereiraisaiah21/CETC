import React from "react";

// Components 
import Card from "./Card";


// Styles
import "./SkewSection.scss";

function SkewSection () {
    return (
        <div className="SkewSection">
            <div className="SkewSection__box">


            <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
            />
            <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
            />

            </div>
        </div>
    )
}

export default SkewSection;