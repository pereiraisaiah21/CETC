// Libs
import React from "react";

// Components 
import Card from "../../../Components/Fixed/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./MainBoard.scss";

/*
*  Return the board in the Home Page
*/

function SubjectBoard () {

    /*
    * 
    */
    return (
        <div className="MainBoard">
            <div className="MainBoard__title">
                <FontAwesomeIcon className="MainBoard__title__icon" icon={faNotesMedical} />
                Matérias
            </div>
            <div className="MainBoard__cards">
               <Card 
                link="/materias/posts/1" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica I" description="Neste curso você irá aprender conceitos introdutórios sobre a Lógica, desde seu surgimetno até a relevância nos dias atuais."
               />
               <Card 
                link="/materias/posts/2" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica II" description="Descrição card Descrição Card"
               />
               <Card 
                link="/materias/posts/3" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica III" description="Descrição card Descrição Card"
               />
               <button className="MainBoard__seeAll">Ver todos</button>
            </div>
        </div>
    );
}

export default SubjectBoard;