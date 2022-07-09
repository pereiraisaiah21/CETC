// Libs
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from 'react-modal';

// Components
import Breacrumb from "../../Components/Fixed/Breadcrumb/Breadcrumb";
import Progress from "../Activity/Progress";
import QuestionAlternative from "./QuestionAlternative";

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
        id : "",
        title : "",
        content: "",
        alternatives : []
    }], error: ""});

    console.log("A", question)
    const [answers, setAnswers] = useState({alternatives: ""});
    const [count, setCount] = useState(1)

    /*
    * Url Paramater
    */
    let {id} = useParams();
    /*
    * Exemple data structure
    */  


    useEffect( () => {
        
        // axios.get(`http://jsonplaceholder.typicode.com/question/${count}`).then((response) => {
        //     setQuestion({...question, data: response.data});
        //   }).catch(err => {
        //     setQuestion({...question, error: err});
        //   });

        setQuestion({...question, data: {
            categoriaId: 5,
            id : 5,
            title : "Conhecimentos gerais",
            content : "Qual o nome do Brasil ?",
            alternatives : ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
            progressBar: 65
        }
    }); // Exemplo

    }, [])

    return (
        <div className="b">
            <Breacrumb classStyleGrand="b-wrap" classStyleFather="b-wrapp__trail" pagesTrail={[
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 01", link : "Link 01"}, 
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 02", link : "Link 02"},
                {classStyle : "b-wrap__trail__anchor", title : "Titulo 03", link : "Link 03"}
            ]}/>
            <Progress progress={question.data.progressBar} />

            {
                <QuestionAlternative 
                    title={question.data.title}
                    content={question.data.content}
                    alternatives={question.data.alternatives}  
                />
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