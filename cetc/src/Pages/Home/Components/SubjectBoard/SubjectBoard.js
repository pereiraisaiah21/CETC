// Libs
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Components 
import Card from "../../../../Components/Fixed/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faHand, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

// Styles
import "../MainBoard/MainBoard.scss";

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
                <div className="MainBoard__warn">
                    <span>
                        Arraste para o lado
                        <FontAwesomeIcon className="MainBoard__warn__icon" icon={faHand} />
                    </span>
                </div>
                <div className="MainBoard__all">
                    <a href="/materias" title="">
                        Ver todas
                        <FontAwesomeIcon className="MainBoard__all__icon" icon={faCirclePlus} />
                    </a>
                </div>
                <Swiper
                    spaceBetween={(window.innerWidth < 768) ? 10 : 5}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <Card 
                            link="/materias/posts/1" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica I" description="Neste curso você irá aprender conceitos introdutórios sobre a Lógica, desde seu surgimetno até a relevância nos dias atuais."
                        />
                    </SwiperSlide> 
                    <SwiperSlide>
                        <Card 
                            link="/materias/posts/2" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica II" description="Neste curso você irá aprender conceitos introdutórios sobre a Lógica, desde seu surgimetno até a relevância nos dias atuais."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card 
                            link="/materias/posts/3" classStyleGrand="MainBoard__item" altImage="Image description" classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title="Lógica III" description="Neste curso você irá aprender conceitos introdutórios sobre a Lógica, desde seu surgimetno até a relevância nos dias atuais."
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SubjectBoard;