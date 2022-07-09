// Libs
import React, { useState } from "react"

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

/*
* 
*/

function QuestionAlternative ({number, title, content, alternatives, observation, isTipAvailable, tip, quantityAttempts}) {

    const [selected, setSelected] = useState('yes');
    console.log(selected)

    const handleAlternativeChange = function (e) {
        console.log(e.target.value);
        setSelected(e.target.value);
    };

    const [aboutSeleted, setAboutSeleted] = useState(false);
    console.log(aboutSeleted)
    const handleAboutClick = function (e) {
        console.log(e.target.value);
        setAboutSeleted(!aboutSeleted);
    };

    const updateAnswers = function (e) {
        e.preventDefault();
        console.log(e.target)
    }

    // Modal tip
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
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');
    // End Modal tip

    /*
    * 
    */
    return (
        <div className="Question">
            <section className="Question__info">
                <span className="Question__info__title">
                    <FontAwesomeIcon className="Question__info__icon" icon={faPencilRuler} />
                    {title}
                </span>
                <div className="Question__info__about" onClick={handleAboutClick}>
                    <span className="Question__info__about__title">
                        <FontAwesomeIcon className="Question__info__about__icon" icon={faQuestionCircle} />
                        Sobre
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
                        alternatives != null && alternatives != undefined 
                        ?
                        alternatives.map((item,key) => {
                            return (
                                <div className="Question__alternatives__option" key={key}>
                                    <label htmlFor={`a${key}`}>
                                        <input
                                            type="radio"
                                            id={`a${key}`}
                                            name="choose"
                                            value={`a${key}`}
                                            checked={`a${key}`=== selected ? "selected" : ""}
                                            onChange={handleAlternativeChange}
                                        />
                                        {item}
                                    </label>
                                </div>)
                            })
                        : 
                        ""
                    } 
                </section>
            </section>
            <section className="Question__send">
                <a className="Question__send__button" title="itemTitle" onClick={updateAnswers}>
                    Próxima
                </a>
                <a className="Question__send__tip" title="itemTitle" onClick={openModal}>
                    Dica
                </a>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={"Example Modal"}
            >Esta aqui é a dica !</Modal>
        </div>
    )
}

export default QuestionAlternative;