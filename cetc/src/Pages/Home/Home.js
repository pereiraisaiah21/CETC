// Libs
import React from "react";

// Components
import MainBoard from "./Components/MainBoard";
import SubjectBoard from "./Components/SubjectBoard";
import TextPrimary from "../../Components/Texts/TextPrimary";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
            <p className="m-d-none">Bem vindo Bendict!</p>
            <section className="carousel">
                <Carousel>
                    <div>
                        <img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/graficos-para-apresentacao-resultados-area.jpg.webp" />
                        <p className="legend">Banner qualquer roxo</p>
                    </div>
                    <div>
                        <img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/graficos-para-apresentacao-resultados-area.jpg.webp" />
                        <p className="legend">Banner qualquer roxo</p>
                    </div>
                    <div>
                        <img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/graficos-para-apresentacao-resultados-area.jpg.webp" />
                        <p className="legend">Banner qualquer roxo</p>
                    </div>
                </Carousel>
            </section>
            <main className="b">
                <MainBoard />
                <SubjectBoard />
                <TextPrimary title="Sobre" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            </main> 
        </>
    );
}

export default Home;