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
    const textTest = "Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.Penso em você, mesmo sabendo o quão longe está de mim, sinto aquele amor que continua a me desgraçar intensamente a cada dia, e penso quando enfim poderei te ter comigo. Sei lá, o café chega ao fim e trago a ultima ponta, nada muda. É como se eu fosse passar por isso mais uns longos anos a frente.Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você.Então após 10 minutos refletindo, largo tudo, fecho a janela e volto pro meu mundo dentro do quarto. Não sei até quando, não sei o porquê, só sei que tá tudo tão errado e quero me livrar disso o quanto antes. E tu não tem nem ideia do quanto, amor meu."
    
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
        <section className="Subject" id="Subject">
            {
                subjectContent.map((item, key) => {
                    return (
                        <div key={key}>
                            <div className="Subject__primaryWrap" key={key}>
                                <h4 className="Subject__primaryTitle">
                                    {item.name}
                                </h4>
                                <p className="Subject__secundatyTitle">
                                    Em sua primeira entrevista a um veículo de imprensa da América Latina desde o início da guerra, o presidente da Ucrânia comparou a posição de Jair Bolsonaro à de líderes que ficaram neutros durante o início da Segunda Guerra Mundial.
                                </p>
                                <div className="Subject__details">
                                    <p className="Subject__details__writer">Por Editorial Cursos Educacionais</p>
                                    <p className="Subject__details__date">19/07/2022 <span className="Subject__details__lastUpdate">- Atualizado a 2 dias</span></p>
                                </div>
                            </div>
                            <div className="Subject__primaryWrap Subject__primaryWrap--content">
                                {
                                    item.content
                                }
                                <p>{textTest}</p>
                                <p>{textTest}</p>
                                <p>{textTest}</p>
                            </div>
                            {
                                !item.existAtivity
                                ?
                                ""
                                :
                                <div className="Subject__primaryWrap">
                                    <span className="Subject__activity">Confira as atividades desta matéria:</span>
                                    <ButtonPrimary className="header__login__anchor" itemLink={`/atividades/${contentid}`} itemTitle="Ir para atividade"/>
                                 </div>
                            }
                            <div className="Subject__primaryWrap">
                                <span className="Subject__ref">Referências:</span>
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
                                <a href="#Subject" title="">Voltar para o topo da página</a>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default SubjectStructure;