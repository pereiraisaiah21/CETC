// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { RECENTS } from "../../../../store/endpoints";

// Components 
import Card from "../../../../Components/Fixed/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes, faHand } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./MainBoard.scss";

/**
 * 
 * @returns 
 */

function MainBoard () {

    const [subjects, setSubjects] = useState({data : [], error : ""});

    async function returnSubjectBoard () {

        axios.get(RECENTS)
        .then((response) => {

            setSubjects({...subjects, data : response.data})
        }).catch(err => {
            setSubjects({...subjects, error: err});
        });
    }

    useEffect(()=>{
        returnSubjectBoard();
    }, [returnSubjectBoard])

    return (
        <div className="MainBoard">
            <div className="MainBoard__title">
            <FontAwesomeIcon className="MainBoard__title__icon" icon={faCalendarTimes} />
                Visitados recentemente
            </div>
            <div className="MainBoard__cards">
                <div className="MainBoard__warn">
                    <span>
                        Arraste para o lado
                        <FontAwesomeIcon className="MainBoard__warn__icon" icon={faHand} />
                    </span>
                </div>
                <Swiper
                    spaceBetween={(window.innerWidth < 768) ? 10 : 5}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            subjects.data !== null
                            ?
                            subjects.data.map((item, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <Card 
                                            link="/materias/posts/1" classStyleGrand="MainBoard__item" altImage={item.catchPhrase} classStyleImage="MainBoard__image" classStyleSpan="MainBoard__item__name" classStyleDiv="MainBoard__item__info" classStyleDivSpan="MainBoard__item__icon" classStyleDivLabel="MainBoard__item__description" title={item.name} description={item.email}
                                        />
                                    </SwiperSlide> 
                                )
                            })
                            :
                            ""
                        }
                </Swiper>
            </div>
        </div>
    );
}

export default MainBoard;