// Libs
import React, { useState, useEffect } from "react"

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function QuestionAlternative ({
    number, 
    title, 
    content, 
    alternatives, 
    observation, 
    isTipAvailable, 
    tip, 
    quantityAttempts, 
    setOption, 
    optionsDisable}) {

    const [selected, setSelected] = useState(null);
    const [aboutSeleted, setAboutSeleted] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    Modal.setAppElement('#root');

    const handleAlternativeChange = function (e) {
        setSelected(e.target.value);
    };
    const handleAboutClick = function (e) {
        setAboutSeleted(!aboutSeleted);
    };
    const closeModal = function () {
        setIsOpen(false);
    }

    useEffect(()=>{
        setOption(selected)
    }, [selected])

    return (
        <>
            <section className="Question__info">
                <span className="Question__info__title">
                    <FontAwesomeIcon className="Question__info__icon" icon={faPencilRuler} />
                    {title}
                </span>
                <div className="Question__info__about" onClick={handleAboutClick}>
                    <span className="Question__info__about__title">
                        <FontAwesomeIcon className="Question__info__about__icon" icon={faQuestionCircle} />
                        <span className="Question__info__about__desc">Sobre</span>
                    </span>
                    {
                        aboutSeleted 
                        ?
                        <pre className="Question__info__about__observation">
                            {observation} Aqui descrição da pergunta
                            <span className="Question__info__about__close"> x Fechar</span>
                        </pre>
                        :
                        ""
                    }
                </div>
            </section>
            <section className="Question__content">
                <p className="Question__paragraph">
                    {content}
                </p>
                <section className="Question__alternatives">             
                    {
                        alternatives !== null && alternatives !== undefined
                        ?
                        alternatives.map((item,key) => {
                            return (
                                <div className="Question__alternatives__option" key={key}>
                                    <label htmlFor={`a${key}`}>
                                        {
                                            optionsDisable
                                            ?
                                            ""
                                            :
                                            <input
                                                type="radio"
                                                id={`a${key}`}
                                                name="choose"
                                                value={`${item}`}
                                                checked={`${item}`=== selected ? "selected" : ""}
                                                onChange={handleAlternativeChange}
                                            />
                                        }
                                        {item}
                                    </label>
                                </div>)
                            })
                        : 
                        ""
                    } 
                </section>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={"Example Modal"}
            >Esta aqui é a dica !</Modal>
        </>
    );
}

export default QuestionAlternative;