import React from "react";

// Components
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";

function QuestionAlternative ({number, title, content, alternatives, observation, isTipAvailable, tip}) {
    return (
        <div className="Question">
            <section className="Question__info">
                <span className="Question__info__title">
                    {title} Titulo pergutna
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
                    {content} Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit?
                </p>
                <section className="Question__alternatives">
                    {alternatives}
                    <div className="Question__alternatives__option">
                        <input type="radio" id="html" name="fav_language" value="Alternativa 01" />
                        <label htmlFor="html">Alternativa 01</label>
                    </div>
                    <div className="Question__alternatives__option">
                        <input type="radio" id="html" name="fav_language" value="Alternativa 01" />
                        <label htmlFor="html">Alternativa 01</label>
                    </div>  
                    <div className="Question__alternatives__option">
                        <input type="radio" id="html" name="fav_language" value="Alternativa 01" />
                        <label htmlFor="html">Alternativa 01</label>
                    </div>
                    <div className="Question__alternatives__option">
                        <input type="radio" id="html" name="fav_language" value="Alternativa 01" />
                        <label htmlFor="html">Alternativa 01</label>
                    </div>
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