// Libs
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

/*
* 
*/
function Home () {

    /*
    * 
    */
    return (
        <>
           <UserInfo />
            <section className="carousel carousel--wrap">
                <div className="carousel-title">
                <FontAwesomeIcon className="carousel-icon" icon={faNewspaper} />CONFIRA ALGUMAS NOVIDADES
                </div>
                <Swiper
                    spaceBetween={(window.innerWidth < 768) ? 10 : 50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <img src="https://d1lc5plzz0mq74.cloudfront.net/wp-content/uploads/2020/05/28151031/grafico-de-tendencia.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/graficos-para-apresentacao-resultados-area.jpg.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/graficos-para-apresentacao-resultados-area.jpg.webp" />
                    </SwiperSlide>
                </Swiper>
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