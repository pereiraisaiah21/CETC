// Libs
import React from "react";

// Components 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Help.scss";

/*
*  Return the board in the Home Page
*/

function Help () {

    const handleQuestionClick = function (e) {
        if (e.target.nextSibling.classList.contains("open")) {
            e.target.nextSibling.classList.remove("open")
        } else {
            e.target.nextSibling.classList.add("open")
        }
    }
    const doubts = [
        {
            categoryId : 1,
            question : "Como faço o login ?",
            answer : "Basta selecionar no canto superior o botão, superior o botãosuperior o botãosuperior o botãosuperior o botão. Basta selecionar no canto superior o botão, superior o botãosuperior o botãosuperior o botãosuperior o botão. Basta selecionar no canto superior o botão, superior o botãosuperior o botãosuperior o botãosuperior o botão. "
        },
        {
            categoryId : 2,
            question : "Como faço o logout ?",
            answer : "Basta selecionar no canto inferior o botão, superior o botãosuperior o botãosuperior o botãosuperior o botão"
        },
    ]
    /*
    * 
    */
    return (
        <div className="Help">
            <nav className="Help__nav">
                <ul className="Help__nav__list">
                    <li className="Help__nav__title">
                        CATEGORIAS
                    </li>
                    <li className="Help__nav__item">
                        <a className="Help__nav__anchor" href="/" title="Categoria A">Categoria A</a>
                    </li>
                    <li className="Help__nav__item">
                        <a className="Help__nav__anchor" href="/" title="Categoria A">Categoria B</a>
                    </li>
                    <li className="Help__nav__item">
                        <a className="Help__nav__anchor" href="/" title="Categoria A">Categoria C</a>
                    </li>
                </ul>
            </nav>
           <section className="Help__content">
                <h4>Dúvidas frequentes</h4>
                <ul className="Help__question">
                    {
                        doubts.map((item, key) => {
                            return (
                                <li className="Help__question__item" key={key} onClick={handleQuestionClick}>
                                    <p className="Help__question__doubt">{item.question}
                                    <FontAwesomeIcon className="Help__question__icon" icon={faAngleDown} />
                                    </p>
                                    <p className="Help__question__answer">{item.answer}</p>
                                </li>
                            )
                        })
                    }
                   
                </ul>
           </section>
        </div>
    );
}

export default Help;