// Libs
import React from "react";
import {Link} from "react-router-dom";

// Images
import Logo from "./Logo.png"

// Components
import ButtonPrimary from "../../Buttons/ButtonPrimary";

// Style s
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
        {title : "questions", link : "activity/1"},
        {title : "Pagina 03", link : "Link 03"},
        {title : "Pagina 04", link : "Link 04"},
        {title : "Pagina 05", link : "Link 05"}
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
                    <ButtonPrimary className="header__login__anchor" itemLink="link" itemTitle="Perfil"/>
                    <ButtonPrimary className="header__login__anchor" itemLink="link" itemTitle="Sair"/>
                </div>
            </div>
        </header>
    );
}

export default Header;