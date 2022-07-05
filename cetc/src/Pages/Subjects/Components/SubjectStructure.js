// Libs
import React, { useState, useEffect } from "react";
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

    const [value, setValue] = useState({data: "abc", error: ""})

    /*
    * Subject identifiers
    */
    let {id} = useParams();
    let {contentid} = useParams();

    console.log("Params : ", id, contentid)

    useEffect( () => {

        fetch(`https://jsonplaceholder.typicode.com/${id}/${contentid}`)
        .then(res => res.json())
        .then(response => setValue( { ...value, data: response }))
        .catch(err => setValue( { ...value, error: err } ))

    }, [])


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
                subjectContent.map((item, key) => {
                    return (
                        <div key={key}>
                            <div className="Subject__primaryWrap" key={key}>
                                <h4 className="Subject__primaryTitle">
                                    {item.name}
                                </h4>
                            </div>
                            <div className="Subject__primaryWrap">
                                {
                                    item.content
                                }
                            </div>
                            {
                                !item.existAtivity
                                ?
                                ""
                                :
                                <div className="Subject__primaryWrap">
                                    <ButtonPrimary className="header__login__anchor" itemLink={item.urlAtivity} itemTitle="Ir para atividade"/>
                                 </div>
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Subjetct;