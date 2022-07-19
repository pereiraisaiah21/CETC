// Libs
import React, { useState } from "react";
import {Link} from "react-router-dom";

// Images
import Logo from "./Logo.png"

// Components
import LoginOptions from "./LoginOptions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faClose } from '@fortawesome/free-solid-svg-icons';

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

    const [menuMobileOpen, setMenuMobileOpen] = useState(false);

    const openMenuMobile = function () {
        setMenuMobileOpen(!menuMobileOpen)
    }
    const closeMenuMobile = function () {
        setMenuMobileOpen(!menuMobileOpen)
    }

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
                    <div className="header__help__button" onClick={openMenuMobile}>
                        <FontAwesomeIcon className="header__menum__openicon" icon={faBars} />
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
                    {
                        menuMobileOpen
                        ?
                        <div className="header__menum">
                            <section className="header__menum__actions">
                                <div className="header__menum__close" onClick={openMenuMobile}>
                                    <span className="header__menum__closename">
                                        <FontAwesomeIcon className="header__menum__closeicon" icon={faClose} />
                                        Fechar
                                    </span>
                                </div>
                            </section>
                            <section className="header__menum__user">
                                <div className="header__menum__profile">
                                    <div className="header__menum__icon">
                                        <img className="header__menum__icon" src="https://via.placeholder.com/50x50" alt="Ícone do usuário"/>
                                    </div>
                                    <div className="header__menum__info">
                                        <span className="header__menum__name">Wanderson</span>
                                        <span className="header__menum__ocupation">Aluno</span>
                                    </div>
                                </div>
                            </section>
                            <section className="header__menum__pages">
                                <ul className="header__menum__list">
                                    <li><a>Wanderson</a></li>
                                    <li><a>Wanderson</a></li>
                                    <li><a>Wanderson</a></li>
                                    <li><a>Wanderson</a></li>
                                </ul>
                            </section>
                            <section className="header__menum__options">
                                <LoginOptions />
                            </section>
                        </div>
                        :
                        ""
                    }
                </div>
                <div className="header__login">
                    <LoginOptions />
                </div>
            </div>
        </header>
    );
}

export default Header;