// Libs
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Components 
import Card from "../../../Components/Fixed/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes, faHand } from '@fortawesome/free-solid-svg-icons';

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
                <div className="MainBoard__warn">
                    Arraste para o lado
                    <FontAwesomeIcon className="MainBoard__warn__icon" icon={faHand} />
                </div>
                <Swiper
                    spaceBetween={(window.innerWidth < 768) ? 10 : 50}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <Card 
                        link="/materias" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Matérias" description="Clique e confira as matérias disponíveis."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                        link="/activity/1" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Questionários" description="Visualizar os questionários atribuidos."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                        link="" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                        link="" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
                        />         
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                        link="" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                        link="" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Titulo Card" description="Descrição card Descrição Card"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default MainBoard;