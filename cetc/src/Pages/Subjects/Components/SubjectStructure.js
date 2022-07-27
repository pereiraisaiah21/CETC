// Libs
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SUBJECT } from "../../../store/endpoints";

// Components
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

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

    
    const textTestP = "<p>Às vezes, problemas que parecem muito diferentes acabam sendo similares quando você pensa em como solucioná-los. O que o Pac-Man, a família real britânica e uma viagem de carro até Orlando têm em comum?</p><p>Todos eles envolvem problemas de localização de rotas ou caminhos de busca:Como o atual Príncipe William está relacionado ao Rei William III, que fundou o College of William and Mary em 1693?Que caminho um fantasma deve seguir para alcançar o Pac-Man o mais rápido possível?Qual é a melhor rota entre Dallas, no Texas, e Orlando, na Flórida?Precisamos de algumas informações para responder a qualquer uma dessas perguntas.Por exemplo, uma árvore genealógica da família real britânica deve mostrar as conexões entre pessoas com parentesco direto. O Príncipe William é filho de Charles Philip Arthur Windsor. Charles é filho da Rainha Elizabeth II. O problema é encontrar uma cadeia curta na árvore genealógica que conecte o Príncipe William e William III usando essas conexões diretas. Como você pode ver na árvore abaixo, podemos precisar de algumas conexões.</p><img class='image' src='https://rockcontent.com/br/wp-content/uploads/sites/2/2019/01/como-funciona-algoritmo-do-google-1.png'/><p>Todos eles envolvem problemas de localização de rotas ou caminhos de busca:Como o atual Príncipe William está relacionado ao Rei William III, que fundou o College of William and Mary em 1693?Que caminho um fantasma deve seguir para alcançar o Pac-Man o mais rápido possível?Qual é a melhor rota entre Dallas, no Texas, e Orlando, na Flórida?Precisamos de algumas informações para responder a qualquer uma dessas perguntas.Por exemplo, uma árvore genealógica da família real britânica deve mostrar as conexões entre pessoas com parentesco direto. O Príncipe William é filho de Charles Philip Arthur Windsor. Charles é filho da Rainha Elizabeth II. O problema é encontrar uma cadeia curta na árvore genealógica que conecte o Príncipe William e William III usando essas conexões diretas. Como você pode ver na árvore abaixo, podemos precisar de algumas conexões.</p>";  
    
    const [value, setValue] = useState({data: [], error: ""})

    /*
    * Subject identifiers
    */
    let {id} = useParams();
    let {contentid} = useParams();

    const getSubject = function () {
        axios.get(`${SUBJECT}/${id}/${contentid}`)
        .then((response) => {
            setValue({ ...value, data: [response.data]});
        }).catch(err => {
            setValue({ ...value, error: err });
        });
    }

    useEffect( () => {
        getSubject();
    }, [])

    return (
        <section className="Subject" id="Subject">
            {
                value.data !== null 
                ?
                value.data.map((item, key) => {
                    return (
                        <div key={key}>
                            <div className="Subject__primaryWrap" key={key}>
                                <h4 className="Subject__primaryTitle">
                                    {item.title}
                                </h4>
                                <p className="Subject__secundatyTitle">
                                {item.title}
                                </p>
                                <div className="Subject__details">
                                    <p className="Subject__details__writer">Por Editorial Cursos Educacionais</p>
                                    <p className="Subject__details__date">19/07/2022 <span className="Subject__details__lastUpdate">- Atualizado a 2 dias</span></p>
                                </div>
                            </div>
                            <div className="Subject__primaryWrap Subject__primaryWrap--content">
                                {item.body}
                                <div dangerouslySetInnerHTML={{__html:textTestP}}></div>
                            </div>
                            {
                                !item.existAtivity
                                ?
                                ""
                                :
                                <div className="Subject__primaryWrap text-center">
                                    <span className="Subject__activity">Atividades</span>
                                    <ButtonPrimary className="header__login__anchor" itemLink={`/atividades/${contentid}`} itemTitle="Ir para atividade"/>
                                 </div>
                            }
                            <div className="Subject__primaryWrap">
                                <p className="Subject__ref">Referências:</p>
                                <ol className="Subject__ref__list">
                                    <li>
                                        <p>
                                            A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                        </p>
                                        <p>Autor: <span>Julio Verne</span></p>
                                    </li>
                                    <li>
                                        <p>
                                            A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                        </p>
                                        <p>Autor: <span>Julio Verne</span></p>
                                    </li>
                                </ol>
                            </div>
                            <div className="Subject__primaryWrap">
                                <p className="Subject__support">Precisa de ajuda?</p>
                                <p className="Subject__support">Confira a seguir alguns conteúdos de apoio para te ajudar.</p>
                                <ol className="Subject__support__list">
                                    <li>
                                        <p>
                                            A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                        </p>
                                        <p>Autor: <span>Michael Douglas</span></p>
                                    </li>
                                    <li>
                                        <p>
                                            A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                        </p>
                                        <p>Autor: <span>Julio Verne</span></p>
                                    </li>
                                </ol>
                            </div>
                            <div className="Subject__primaryWrap">
                                <a className="Subject__backTop" href="#Subject" title="Voltar para o topo da página">
                                    Voltar para o topo da página
                                    <FontAwesomeIcon className="MainBoard__warn__icon" icon={faPlaneUp} />
                                </a>
                            </div>
                        </div>
                    )
                })
                :
                ""
            }
        </section>
    )
}

export default SubjectStructure;