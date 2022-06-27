// Libs
import React from "react";

// Components
import Header from "../../Components/Fixed/Header/Header";
import Footer from "../../Components/Fixed/Footer/Footer";
import Breacrumb from "../../Components/Fixed/Breadcrumb/Breadcrumb";
import MainBoard from "./Components/MainBoard";
import TextPrimary from "../../Components/Texts/TextPrimary";
import SkewSection from "./Components/SkewSection";

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
            <main className="b">
                <Breacrumb classStyleGrand="b-wrap" classStyleFather="b-wrapp__trail" pagesTrail={[
                        {classStyle : "b-wrap__trail__anchor", title : "Titulo 01", link : "Link 01"}, 
                        {classStyle : "b-wrap__trail__anchor", title : "Titulo 02", link : "Link 02"},
                        {classStyle : "b-wrap__trail__anchor", title : "Titulo 03", link : "Link 03"}
                    ]}/>
                <MainBoard />
                <SkewSection />

                <TextPrimary title="Sobre" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            </main> 
        </>
    );
}

export default Home;