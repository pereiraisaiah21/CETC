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
    }], id: 1, error: ""})

    const [answer, setAnswer] = useState(null);
    const [showResolution, setShowResolution] = useState(false);
    const [count, setCount] = useState(1);
    const [answerReturn, setAnswerReturn] = useState({
        correctAnswer : null,
        explication : "",
        error : false
    });
    const [isChoiceCorrect, setIsChoiceCorrect] = useState("");

    console.log(isChoiceCorrect)

    /*
    * Url Paramater
    */
    let {id} = useParams();
    /*
    * Exemple data structure
    */  

    const getQuestion = function () {  
        setShowResolution(false);

        axios.get(`https://opentdb.com/api.php?amount=1`)
        .then((response) => {
            let options = response.data.results[0].incorrect_answers;
            options.push(response.data.results[0].correct_answer);

            setQuestion({...question, data: {
                categoriaId: 5,
                id : count,
                title : response.data.results[0].category,
                content : response.data.results[0].question,
                alternatives : options,
                progressBar: 65
                }
            });

            setAnswerReturn({...answerReturn, correctAnswer : response.data.results[0].correct_answer})
        }).catch(err => {
            setQuestion({...question, error: err});
        });
    }

    const updateAnswers = function(e) {
        e.preventDefault()

        
        setShowResolution(true)

        if (answer !== null) {
            //setTestGaug({text : testGauge.text.concat("%" + answer)})
            if (answer == answerReturn.correctAnswer) {
                setIsChoiceCorrect(true)
            } else {
                setIsChoiceCorrect(false)
            }
            setIsChoiceCorrect(isChoiceCorrect)
            //getQuestion();
        }

        if (answer === null) {
            setAnswerReturn({...answerReturn, error : true})
        }

        // if (count > 1) {
        //     setCount(0)
        //     getQuestion()
        // }

        // axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
        // .then((response) => {

        //     if (!!response.data.id) {
        //         setAnswerReturn({...answerReturn, isAnswerCorrect : !!response.data.id});
        //     }
        // }).catch(err => {
        //     setAnswerReturn({...answerReturn, error: err});
        // });
        
    }

    const sendQuestionFeedback = function(correctOrIncorrect) {
        console.log(correctOrIncorrect)
        axios.post('/user/questionfeedback/', {
            result: correctOrIncorrect
          })
          .catch(function (error) {
            console.log(error);
          });
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

            <section className={`Question${isChoiceCorrect !== null ? (isChoiceCorrect ? " correct" : " incorrect") : ""}`}>
                <Progress progress={question.data.progressBar} />
                <QuestionAlternative 
                    title={question.data.title}
                    content={question.data.content}
                    alternatives={question.data.alternatives} 
                    setOption={setAnswer}
                />
                <div className="Question__verification">
                    {
                        answerReturn.correctAnswer === "Yes" && count > 2
                        ?
                        <p className="Question__verification__text Question__verification__text--correct"><FontAwesomeIcon className="" icon={faCheck} /> Você acertou está questão</p>
                        :
                        ""
                    }
                    {
                        answerReturn.correctAnswer === "No" && count > 2
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
                showResolution
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
            >Esta aqui é a dica</Modal>
        </div>
    )
}

export default Activity;