// Libs
import React from "react";

// Components 
import Card from "../../../Components/Fixed/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon className="MainBoard__title__icon" icon={faCalendarTimes} />
                Visitados recentemente
            </div>
            <div className="MainBoard__cards">
               <Card 
                link="/subjects" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Matérias" description="Descrição card Descrição Card"
               />
               <Card 
                link="/activity/1" classStyleGrand="MainBoard__item" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Questionários" description="Descrição card Descrição Card"
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