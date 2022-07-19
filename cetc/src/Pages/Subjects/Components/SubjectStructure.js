// Libs
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";

// Styles
import "../Subjects.scss";


/*
* 
*/

function SubjectStructure ({subjectId, subjectContentId}) {

    /*
    * Return Subject:
    *   Name, Content, HasExercise -> Bool
    */

    const [value, setValue] = useState({data: "abc", error: ""})
    // console.log("Value " + value)

    const [teste, setTeste] = useState({data : "", error: ""});
    console.log("Axios ", teste)

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

        
        axios.get("http://jsonplaceholder.typicode.com/posts/10").then((response) => {
            setTeste({data : response.data, error: ""});
          }).catch(err => {
            setTeste({...teste, error: err});
          });

    }, [id, contentid])

   /*
   * Exemple data
   */
    const subjectContent = [
        {
            name : value.data.title,
            content :  value.data.body,
            existAtivity : true,
            urlAtivity : "/atividades/1"
        }
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
                                    <span>Confira as atividades desta matéria:</span>
                                    <ButtonPrimary className="header__login__anchor" itemLink={`/atividades/${contentid}`} itemTitle="Ir para atividade"/>
                                 </div>
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}

export default SubjectStructure;