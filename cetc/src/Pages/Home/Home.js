// Libs
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BANNERHOME } from "../../store/endpoints";

// Components
import UserInfo from "./Components/UserInfo/UserInfo";
import MainBoard from "./Components/MainBoard/MainBoard";
import MySubjectBoard from "./Components/MySubjectBoard/MySubjectBoard";
import SubjectBoard from "./Components/SubjectBoard/SubjectBoard";
import TextPrimary from "../../Components/Texts/TextPrimary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

// Styles 
import "./Home.scss";

/**
 * 
 * @returns 
 */

function Home () {

    sessionStorage.setItem('username', 'Mattew McDonald');
    sessionStorage.setItem('ocupation', 'Aluno');
    sessionStorage.setItem('usericon', 'https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg');

    return (
        <>
           <UserInfo />
            <section className="b b--fullmobile">
                <div className="carousel">
                    <div className="carousel-title">
                    <FontAwesomeIcon className="carousel-icon" icon={faNewspaper} />Tutorial
                    </div>
                    <Swiper
                        spaceBetween={(window.innerWidth < 768) ? 10 : 50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <img src={`${BANNERHOME}/1300x320`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${BANNERHOME}/1300x320`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${BANNERHOME}/1300x320`} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <main className="b">
                <MainBoard />
                <MySubjectBoard />
                <SubjectBoard />
                <TextPrimary title="Sobre" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            </main> 
        </>
    );
}

export default Home;