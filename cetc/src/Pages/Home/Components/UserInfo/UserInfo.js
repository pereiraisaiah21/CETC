// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MYLEVEL } from "../../../../store/endpoints";

// Components 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faDiamond, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./UserInfo.scss";

/*
*  Return the board in the Home Page
*/

function UserInfo () {

    const [myLevel, setMyLevel] = useState({data: [], error : ""})
    const [emblemLevel, setEmblemLevel] = useState(null);

    const getMyLevel = function () {
        axios.get(MYLEVEL)
        .then((response) => {
            setMyLevel({ ...myLevel, data: response.data});
            setEmblemLevel(response.data.id)
        }).catch(err => {
            setMyLevel({ ...myLevel, error: err });
        });
    }


    useEffect(() => {
        getMyLevel();
    }, [])
    /*
    * 
    */
    return (
        <section className="b">
            <div className="userInfo">
                <div className="userInfo__details">
                    <img src={sessionStorage.getItem("usericon")} alt="Ícone do usuário"/>
                    <a href="/perfil" title="Ir para perfil">{sessionStorage.getItem("username")}</a>
                </div>
                <div className="userInfo__emblem">
                    <span className="userInfo__emblem__xp">
                        420xp
                    </span>
                    {emblemLevel ? <FontAwesomeIcon className="userInfo__medal userInfo__medal--bronze" icon={faMedal} /> : "" }
                    {emblemLevel >= 2 ? <FontAwesomeIcon className="userInfo__medal userInfo__medal--plate" icon={faMedal} /> : "" }
                    {emblemLevel >= 3 ? <FontAwesomeIcon className="userInfo__medal userInfo__medal--gold" icon={faMedal} />: "" }
                    {emblemLevel >= 4 ? <FontAwesomeIcon className="userInfo__medal userInfo__medal--diamond" icon={faDiamond} /> : "" }
                    {emblemLevel >= 5 ? <FontAwesomeIcon className="userInfo__medal userInfo__medal--trophy" icon={faTrophy} /> : "" }
                </div>
            </div>
        </section>
    );
}

export default UserInfo;