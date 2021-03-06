// Libs
import React from "react";

// Components
import Help from "../Help/Help";

// Styles
import "./Footer.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function Footer () {

    return (
        <footer className="Footer">
            <div className="Footer__wrap">
                <section className="Footer__text">
                </section>
                <section className="Footer__options">
                    <div className="Footer__options__nav">
                        <ul>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                        </ul>
                    </div>
                    <div className="Footer__options__nav">
                        <ul>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                            <li><a href="/" title="Footer">Opção 1</a></li>
                        </ul>
                    </div>
                </section>
                <section className="Footer__bottom">
                    <ul>
                        <li>Cursos Educacionais </li>
                        <li><a href="/" title="Footer">Termos de uso</a></li>
                        <li><a href="/" title="Footer">Política de privacidade</a></li>
                        <li><a href="/" title="Footer">Uso de Cookies</a></li>
                    </ul>
                </section>
            </div>    
            <Help />   
        </footer>
    );
}

export default Footer;