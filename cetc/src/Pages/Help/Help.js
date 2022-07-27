// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FAQ, FAQCATEGORIES } from "../../store/endpoints";

// Components 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Help.scss";

/*
*  Return the board in the Home Page
*/

function Help () {

    const [faq, setFaq] = useState({data : [], error : ""})
    const [faqCategories, setFaqCategories] = useState({data : [], error : ""})

    const getFaq = function (faqCategory = "") {
        axios.get(`${FAQ}/${faqCategory}`)
        .then((response) => {
            if (faqCategory == "") {
                setFaq({ ...faq, data: response.data});
            } else {
                setFaqCategories({ ...faqCategories, data: [response.data]});
            }
        }).catch(err => {
            if (faqCategory == "") {
                setFaq({ ...faq, error: err });
            } else {
                setFaqCategories({ ...faqCategories, error: err });
            }
        });
    }

    const handleQuestionClick = function (e) {
        if (e.target.nextSibling.classList.contains("open")) {
            e.target.nextSibling.classList.remove("open")
        } else {
            e.target.nextSibling.classList.add("open")
        }
    }


    useEffect(() => {
        getFaq();
        getFaq("1");
    }, [])
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
                    {
                        faqCategories.data !== null
                        ?
                        faqCategories.data.map((item, key) => {
                            return (
                                <li className="Help__nav__item" key={key}>
                                    <a className="Help__nav__anchor" href="/" title={item.name}>{item.address.city}</a>
                                </li>
                            )
                        })
                        :
                        ""
                    }
                </ul>
            </nav>
           <section className="Help__content">
                <h4>Dúvidas frequentes</h4>
                <ul className="Help__question">
                    {
                        faq.data !== null
                        ?
                        faq.data.map((item, key) => {
                            return (
                                <li className="Help__question__item" key={key} onClick={handleQuestionClick}>
                                    <p className="Help__question__doubt">{item.name}
                                    <FontAwesomeIcon className="Help__question__icon" icon={faAngleDown} />
                                    </p>
                                    <p className="Help__question__answer">{item.address.city}</p>
                                </li>
                            )
                        })
                        :
                        ""
                    }
                   
                </ul>
           </section>
        </div>
    );
}

export default Help;