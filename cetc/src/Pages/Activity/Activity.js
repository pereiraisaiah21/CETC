// Libs
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from 'react-modal';

// Components
import Breacrumb from "../../Components/Fixed/Breadcrumb/Breadcrumb";
import Progress from "../Activity/Progress";
import QuestionAlternative from "./QuestionAlternative";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

// Styles

/*
* Return a page containing the use questions, invoking another components
*/

function Activity () {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    Modal.setAppElement('#root');


    const [question, setQuestion] = useState({data :  [{
        categoriaId: "",
        id : 1,
        title : "",
        content: "",
        alternatives : []
    }], id: 1, error: ""});

    const [answer, setAnswer] = useState(null);
    const [testGauge, setTestGaug] = useState({text : ""});
    const [count, setCount] = useState(1)
    const [answerReturn, setAnswerReturn] = useState({
        isAnswerCorrect : null,
        explication : "",
        error : ""
    });

    /*
    * Url Paramater
    */
    let {id} = useParams();
    /*
    * Exemple data structure
    */  

    const getQuestion = function () {
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
        .then((response) => {

            setQuestion({...question, data: {
                categoriaId: 5,
                id : count,
                title : "Conhecimentos gerais",
                content : "Eu não deveria ter saído do Brasil e voltado para a Itália em 2010. Eu quis dar uma resposta pela maneira que sai da Inter de Milão. O povo italiano é apaixonado por mim, fiquei com isso no coração, na mente. Queria voltar para retribuir esse carinho. Mas infelizmente aquilo não era mais para mim, minha cabeça estava no Brasil - frisou o Imperador ?",
                alternatives : ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
                progressBar: 65
                }
            });
        }).catch(err => {
            setQuestion({...question, error: err});
        });
    }

    const updateAnswers = function(e) {
        e.preventDefault();
        if (answer !== null) {
            setTestGaug({text : testGauge.text.concat("%" + answer)})
            getQuestion();
        }

        if (answer === null) {
            console.log("Selecione alguma opção")
        }

        axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
        .then((response) => {

            if (!!response.data.id) {
                setAnswerReturn({...answerReturn, isAnswerCorrect : !!response.data.id});
            }
        }).catch(err => {
            setAnswerReturn({...answerReturn, error: err});
        });
        setCount(count + 1)
        
    }
    useEffect( () => {
        
        // axios.get(`http://jsonplaceholder.typicode.com/question/${count}`).then((response) => {
        //     setQuestion({...question, data: response.data});
        //   }).catch(err => {
        //     setQuestion({...question, error: err});
        //   });
        getQuestion();
         // Exemplo
    }, [])

    return (
        <div className="b">
            <Breacrumb classStyleGrand="b-wrap" classStyleFather="b-wrap__trail" pagesTrail={[
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 01", link : "Link 01"}, 
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 02", link : "Link 02"},
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 03", link : "Link 03"}
            ]}/>

            <section className="Question">
                <Progress progress={question.data.progressBar} />
                <QuestionAlternative 
                    title={question.data.title}
                    content={question.data.content}
                    alternatives={question.data.alternatives} 
                    setOption={setAnswer}
                />
                <div className="Question__verification">
                    {
                        answerReturn.isAnswerCorrect === true && count > 1
                        ?
                        <p className="Question__verification__text Question__verification__text--correct"><FontAwesomeIcon className="" icon={faCheck} /> Você acertou está questão</p>
                        :
                        ""
                    }
                    {
                        answerReturn.isAnswerCorrect === false && count > 1
                        ?
                        <p className="Question__verification__text Question__verification__text--incorrect"><FontAwesomeIcon className="" icon={faXmark} /> Você acertou está questão</p>
                        :
                        ""
                    }
                </div>
            </section>
            <section className="Question__send">
                <a className="Question__send__button" title="itemTitle" onClick={updateAnswers}>
                    Próxima
                </a>
                <a className="Question__send__tip" title="itemTitle" onClick={openModal}>
                    Dica
                </a>
            </section>
            {
                answerReturn.isAnswerCorrect
                ?
                <section className="Question__resolution">
                    <h4>RESOLUÇÃO</h4>
                    <p>
                    Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                    </p>
                    <p>
                    Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                    </p>
                    <p>
                    Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                    </p>
                </section>
                :
                ""
            }
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={"Example Modal"}
            >Responda as perguntas </Modal>
        </div>
    )
}

export default Activity;