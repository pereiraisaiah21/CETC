import React from "react";

// Components 
import Card from "./Card";

// Styles
import "./MainBoard.scss";

function MainBoard () {
    return (
        <div className="MainBoard">
            <div className="MainBoard__title">
                Title
            </div>
            <div className="MainBoard__cards">
               <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
            </div>
        </div>
    );
}

export default MainBoard;