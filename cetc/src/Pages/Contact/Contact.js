// Libs
import React, { useState, useEffect } from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
                    <p>Olá, caso precise de ajuda, reencha o formulário abaixo, para que possamos saber da sua dúvida</p>
                </div>
                <form className="Contact__form">
                    <label>Selecione o assunto da sua dúvida</label>
                    <select className="Contact__select">
                        <option value="1"selected>Sobre as matérias.</option>
                        <option value="2">Sobre as perguntas.</option>
                        <option value="3">Viu algum bug?</option>
                        <option value="4">Feedback.</option>
                    </select>
                    <label>Conte-nos sobre sua dúvida</label>
                    <input className="Contact__input" placeholder="Digite aqui sua dúvida"/>
                    <button className="Contact__send">
                        <FontAwesomeIcon className="Contact__send__icon" icon={faPaperPlane} />
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;