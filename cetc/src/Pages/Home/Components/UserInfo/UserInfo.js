// Libs
import React from "react";

// Components 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faDiamond, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./UserInfo.scss";

/*
*  Return the board in the Home Page
*/

function UserInfo () {

    /*
    * 
    */
    return (
        <section className="b">
            <div className="userInfo">
                <div className="userInfo__details">
                    <img src={sessionStorage.getItem("usericon")} alt="Ícone do usuário"/>
                    <span>{sessionStorage.getItem("username")}</span>
                </div>
                <div className="userInfo__emblem">
                    <span className="userInfo__emblem__xp">
                        420xp
                    </span>
                    <FontAwesomeIcon className="userInfo__medal userInfo__medal--trophy" icon={faTrophy} />
                    <FontAwesomeIcon className="userInfo__medal userInfo__medal--diamond" icon={faDiamond} />
                    <FontAwesomeIcon className="userInfo__medal userInfo__medal--gold" icon={faMedal} />
                    <FontAwesomeIcon className="userInfo__medal userInfo__medal--plate" icon={faMedal} />
                    <FontAwesomeIcon className="userInfo__medal userInfo__medal--bronze" icon={faMedal} />
                </div>
            </div>
        </section>
    );
}

export default UserInfo;