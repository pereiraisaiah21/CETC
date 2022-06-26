// Libs
import React from "react";
import { useParams } from "react-router-dom";

// Components
import Progress from "../Activity/Progress";
import QuestionAlternative from "./QuestionAlternative";

// Styles

/*
* Return a page containing the use questions, invoking another components
*/

function Activity () {

    /*
    * Url Paramater
    */
    let {id} = useParams();
    /*
    * Exemple data structure
    */  
    let question = [
        {
            categoriaId: 135,
            id : 1,
            title : "Conhecimentos gerais",
            content : "Qual o nome do Brasil ?",
            alternatives : [
               "Estados Unidos",
               "Rep Fed Congo",
               "Rep Fed Bras",
               "N.D.A"
            ],
            observation : "Conhecimentos gerais",
            isTipAvailable : true,
            tip : "Clique sobre uma alternativa",
            quantityAttempts : 2
        }
    ];

    /*
    * Return the next question
    */
    function bringQuestion () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        //.then((json) => json.forEach( item => questions.push(json)))

        // console.log(questions)
    }

    /*
    * Validate the user input
    */
    function validateQuestion () {}

    /*
    * It shows to the user the next steps
    */
    function questionsIntroduction () {}

    /*
    * It controls the next question exhibition
    */
    function passQuestion () {}

    /*
    * It controls the tip click
    */
    function clickOnTip () {}

    /*
    * 
    */
    return (
        <div className="b">
                {id}
                <Progress progress={question[0].id} />

                <QuestionAlternative 
                    title={question[0].id}  content={question[0].content}  alternatives={question[0].alternatives}  
                />
                
                {
                    bringQuestion()
                }
        </div>
    )
}

export default Activity;