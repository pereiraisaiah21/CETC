// Libs
import React from "react";

// Components
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";

/*
* 
*/

function QuestionAlternative ({number, title, content, alternatives, observation, isTipAvailable, tip, quantityAttempts}) {

    /*
    * 
    */
    return (
        <div className="Question">
            <section className="Question__info">
                <span className="Question__info__title">
                    {title}
                </span>
                <div className="Question__info__about">
                    <i></i>
                    <span className="Question__info__about__title">
                        Sobre
                    </span>
                    <pre className="Question__info__about__observation">
                        {observation} Aqui descrição da pergunta
                        <span className="Question__info__about__close"> x Fechar</span>
                    </pre>
                </div>
            </section>
            <section className="Question__content">
                <p className="Question__paragraph">
                    {content}
                </p>
                <section className="Question__alternatives">
                    {
                        console.log(alternatives)
                    }
                    {
                        alternatives.map((item,key) => {
                            return (<div className="Question__alternatives__option" key={key}>
                                <input type="radio" id="html" name="fav_language" value="Alternativa 01" />
                                <label htmlFor="html">
                                    {item}
                                </label>
                            </div>)
                        })
                    }
                </section>
            </section>
            <section className="Question__send">
                <ButtonPrimary className="Question__send__button" itemLink="" itemTitle="Enviar"/>
                <ButtonPrimary className="Question__send__tip" itemLink="" itemTitle="Dica"/>
            </section>
        </div>
    )
}

export default QuestionAlternative;