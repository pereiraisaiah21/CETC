// Libs
import React, { useState, useEffect } from "react";

// Components

// Styles
import "./Contact.scss";


/*
* 
*/

function Contact () {

    /*
    * Return Subject:
    *   Name, Content, HasExercise -> Bool
    */


    return (
        <section className="Contact">
            <div className="Contact__wrap">
                <div className="Contact__info">
                    <h4>Preencha o formulário abaixo:</h4>
                </div>
                <form className="Contact__form">
                    <select className="Contact__select">
                        <option>Caso 1</option>
                        <option>Caso 2</option>
                        <option>Caso 3</option>
                        <option>Caso 4</option>
                    </select>
                    <input className="Contact__input" placeholder="Digite aqui sua dúvida"/>
                    <button className="Contact__send">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;