// Libs
import React from "react";

// Components 
import Card from "./Card";

// Styles
import "./MainBoard.scss";

/*
*  Return the board in the Home Page
*/

function MainBoard () {

    /*
    * 
    */
    return (
        <div className="MainBoard">
            <div className="MainBoard__title">
                Title
            </div>
            <div className="MainBoard__cards">
               <Card 
                link="/activity/1" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                link="" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                link="" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
               <Card 
                link="" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
               />
            </div>
        </div>
    );
}

export default MainBoard;