import React from "react";

// Images
import Logo from "./Logo.png"

// Components
import ButtonPrimary from "../../Buttons/ButtonPrimary";

// Style s
import "./Header.scss";

function Header () {

    const pagesDescription = [
        {titulo : "Pagina 01", link : "Link 01"},
        {titulo : "Pagina 02", link : "Link 02"},
        {titulo : "Pagina 03", link : "Link 03"},
        {titulo : "Pagina 04", link : "Link 04"},
        {titulo : "Pagina 05", link : "Link 05"}
    ]

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
                                    <ButtonPrimary className="header__help__anchor" itemLink={item.link} itemTitle={item.titulo} key={key} />
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