// Libs
import React, { useState } from "react";
import {Link} from "react-router-dom";

// Components
import LoginOptions from "./LoginOptions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./Header.scss";

// Images
import Logo from "./Logo.png";

/**
 * 
 * @returns 
 */

function Header () {

    const [menuMobileOpen, setMenuMobileOpen] = useState(false);
    const pagesDescription = [
        {title : "Home", link : "/"},
        {title : "Matérias", link : "posts/1"}
    ];
    const openCloseMenuMobile = function () {
        setMenuMobileOpen(!menuMobileOpen)
    };

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <a href="/" title="">
                        <img className="header__logo__image" alt="Logo Cursos Educacionais" src={Logo} /> 
                    </a>
                </div>
                <div className="header__help">
                    <div className="header__help__button" onClick={openCloseMenuMobile}>
                        <FontAwesomeIcon className="header__menum__openicon" icon={faBars} />
                    </div>
                    <div className="header__help__anchors--m">
                        {
                            pagesDescription.map(function (item, key) {
                                return (
                                    <Link className="header__help__anchor"  to={item.link} key={key}>
                                        {item.title}
                                    </Link>
                                );
                            })
                        }
                    </div>
                    {
                        menuMobileOpen
                        ?
                        <div className="header__menum">
                            <section className="header__menum__actions">
                                <div className="header__menum__close" onClick={openCloseMenuMobile}>
                                    <span className="header__menum__closename">
                                        <FontAwesomeIcon className="header__menum__closeicon" icon={faClose} />
                                        Fechar
                                    </span>
                                </div>
                            </section>
                            <section className="header__menum__user">
                                <div className="header__menum__profile">
                                    <div className="header__menum__icon">
                                        <img className="header__menum__icon" src={sessionStorage.getItem("usericon")} alt="Ícone do usuário"/>
                                    </div>
                                    <div className="header__menum__info">
                                        <span className="header__menum__name">{sessionStorage.getItem("username")}</span>
                                        <span className="header__menum__ocupation">{sessionStorage.getItem("ocupation")}</span>
                                    </div>
                                </div>
                            </section>
                            <section className="header__menum__pages">
                                <ul className="header__menum__list">
                                    <li><a href="/" alt="">Wanderson</a></li>
                                    <li><a href="/" alt="">Wanderson</a></li>
                                    <li><a href="/" alt="">Wanderson</a></li>
                                    <li><a href="/" alt="">Wanderson</a></li>
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