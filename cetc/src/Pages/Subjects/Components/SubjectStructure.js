// Libs
import React from "react";
import { useParams } from "react-router-dom";

// Components
// Styles
import "../Subjects.scss";


/*
* 
*/

function Subjetct ({subjectId, subjectContentId}) {

    /*
    * Return Subject:
    *   Name, Content, HasExercise -> Bool
    */
   const returnSubjectContent = function (subjectId, subjectContentId) {}
   
    /*
    * Subject identifiers
    */
   let {id} = useParams();
   let {contentid} = useParams();

   /*
   * Exemple data
   */
  const subjectContent = [
    {
        name : "Nome da matéria",
        content :  "Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria"
    }
  ]

    return (
        <section className="Subject">
            <div className="Subject__primaryWrap">
                <h4 className="Subject__primaryTitle">
                    {subjectContent[0].name}
                </h4>
            </div>
            <div className="Subject__primaryWrap">
                {subjectContent[0].content}
            </div>
        </section>
    )
}

export default Subjetct;