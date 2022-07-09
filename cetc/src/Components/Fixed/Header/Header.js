// Libs
import React from "react";
import {Link} from "react-router-dom";

// Images
import Logo from "./Logo.png"

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRankingStar, faQuestionCircle, faUserCircle, faDoorOpen} from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Header.scss";


/*
* Return Header component
*/

function Header () {

    /*
    * List all the menu's header pages with its link
    */
    const pagesDescription = [
        {title : "Home", link : "/"},
        {title : "Matérias", link : "posts/1"}
    ]

    /*
    *
    */
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <img className="header__logo__image" alt="Logo Cursos Educacionais" src={Logo} /> 
                </div>
                <div className="header__help">
                    <div className="header__help__button">
                        <img src="https://via.placeholder.com/40x40" />
                    </div>
                    <div className="header__help__anchors--m">
                        {
                            pagesDescription.map(function (item, key) {
                                return (
                                    <Link className="header__help__anchor"  to={item.link} key={key}>
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="header__login">
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
                </div>
            </div>
        </header>
    );
}

export default Header;