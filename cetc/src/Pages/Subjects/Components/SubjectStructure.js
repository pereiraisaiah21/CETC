// Libs
import React from "react";
import { useParams } from "react-router-dom";

// Components
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";

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
        content :  "Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria Conteúdo da matéria",
        existAtivity : true,
        urlAtivity : "/activity/1"
    },
  ]

    return (
        <section className="Subject">

            {
                subjectContent.map((a) => {
                    return (
                        <>
                            <div className="Subject__primaryWrap">
                                <h4 className="Subject__primaryTitle">
                                    {a.name}
                                </h4>
                            </div>
                            <div className="Subject__primaryWrap">
                                {a.content}
                            </div>
                            {
                                !a.existAtivity
                                ?
                                ""
                                :
                                <div className="Subject__primaryWrap">
                                    <ButtonPrimary className="header__login__anchor" itemLink={a.urlAtivity} itemTitle="Ir para atividade"/>
                                 </div>
                            }
                        </>
                    )
                })
            }
           
        </section>
    )
}

export default Subjetct;