// Libs
import React from "react";
import { useParams } from "react-router-dom";

// Components
import Card from "../../Components/Fixed/Card/Card"

// Styles
import "./Subjects.scss";

/*
*  It controls de Routes
*/

/**
 * Exemple
 */
const matter = [
    {"Algebra" : "/algebra"},
    {"Física" : "/fisica"}
]

function Subjects () {
    const matter = [
        { name: "Lógica I", description: "Desc", url: "/subject/2/2"},
        { name: "História da computação", description: "Desc", url: "/" },
        { name: "Lógica II", description: "Desc", url: "/" },
        { name: "Lógica III", description: "Desc", url: "/" },
        { name: "Lógica - Revisão", description: "Desc", url: "/" },
        { name: "Lógica I", description: "Desc", url: "/subject/2/2"},
        { name: "História da computação", description: "Desc", url: "/" },
        { name: "Lógica II", description: "Desc", url: "/" },
        { name: "Lógica III", description: "Desc", url: "/" },
        { name: "Lógica - Revisão", description: "Desc", url: "/" },
    ];

    function returnSubjects (studentId) {}

    let {id} = useParams();

    console.log("Params 22 : ", id)
    /*
    * 
    */
    return (
        <section className="Subject">
            <div className="Subject__primaryWrap">
                <h4 className="Subject__primaryTitle">
                    Matérias disponíveis
                </h4>
            </div>
            <div className="Subject__primaryWrap">
                <div className="Subject__warn">
                    Clique sobre a matéria
                </div>
                <div className="Subject__cards">   
                {
                    matter.map((item, key) => {
                        return (
                            <Card 
                                    link={item.url} classStyleGrand="Subject__item" altImage="Image description" classStyleImage="Subject__image"  classStyleSpan="Subject__item__name" classStyleDiv="Subject__item__info" classStyleDivSpan="Subject__item__icon" classStyleDivLabel="Subject__item__description" title={item.name} description="Descrição card Descrição Card" key={key}
                                />
                        )
                    })
                 }
                </div>
            </div>
        </section>
    )
}

export default Subjects;