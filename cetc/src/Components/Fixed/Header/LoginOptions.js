// Libs
import React from "react";

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faQuestionCircle, faUserCircle, faDoorOpen } from '@fortawesome/free-solid-svg-icons';


function LoginOptions () {
    return (
        <>
            <a className="header__login__anchor" href="" title="Perfil">
                <FontAwesomeIcon className="header__login__icon" icon={faRankingStar} />
            </a>
            <a className="header__login__anchor" href="" title="Perfil">
                <FontAwesomeIcon className="header__login__icon" icon={faQuestionCircle} />
            </a>
            <a className="header__login__anchor" href="" title="Perfil">
                <FontAwesomeIcon className="header__login__icon" icon={faUserCircle} />
            </a>
            <a className="header__login__anchor" href="" title="Sair">
                <FontAwesomeIcon className="header__login__icon" icon={faDoorOpen} />
                Sair
            </a>
        </>
    );
}

export default LoginOptions;