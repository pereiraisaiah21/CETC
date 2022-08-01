// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SUBJECTS } from "../../store/endpoints";

// Components
import Card from "../../Components/Fixed/Card/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Subjects.scss";

/**
 * 
 * @returns 
 */

function Subjects () {

    const [subjects, setSubjects] = useState({data : [], error : ""});

    const returnSubjects = function () {

        axios.get(SUBJECTS)
        .then((response) => {

            setSubjects({...subjects, data : response.data});
        }).catch(err => {
            setSubjects({...subjects, error: err});
        });
    };

    useEffect(()=>{
        returnSubjects();
    }, []);

    return (
        <section className="Subject">
            <div className="Subject__primaryWrap">
                <h4 className="Subject__primaryTitle">
                    Matérias disponíveis
                </h4>
                <p>Confira abaixo as matérias disponíveis</p>
            </div>
            <div className="Subject__primaryWrap">
                <div className="Subject__warn">
                    Clique sobre a matéria
                    <FontAwesomeIcon className="MainBoard__warn__icon" icon={faHand} />
                </div>
                <div className="Subject__cards">   
                {
                    subjects.data.map((item, key) => {
                        return (
                            <Card 
                                link={item.website} classStyleGrand="Subject__item" altImage={item.phone} classStyleImage="Subject__image"  classStyleSpan="Subject__item__name" classStyleDiv="Subject__item__info" classStyleDivSpan="Subject__item__icon" classStyleDivLabel="Subject__item__description" title={item.name} description="Descrição card Descrição Card" key={key}
                            />
                        )
                    })
                 }
                </div>
            </div>
        </section>
    );
}

export default Subjects;