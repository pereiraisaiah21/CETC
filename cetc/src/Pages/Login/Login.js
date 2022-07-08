// Libs
import React, { useState } from "react";
import InputMask from 'react-input-mask';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// Style
import "./Login.scss"; 

function Login () {
    
    const [input, setInput] = React.useState({
        nome: "",
        value: false
    });

    const [password, setPassword] = React.useState({
        text: "",
        value: false
    });

    const handleLoginSubmit = function (e) {
        e.preventDefault();

        if (input.nome.replace(/\D+/g, '').length < 11) {
            setInput({...input, input: true});
            return;      
        } else {
            setInput({...input, value: false});
        }

        if (password.text == "" || password.text == null || password.text.length < 3) {
            setPassword({...password, value: true});
            return;
        } else {
            setPassword({...password, value: false});
        }
    }

    return(
        <main className="login">
            <section className="login__wrap">
                <form className="login__form" onSubmit={handleLoginSubmit}>
                    <FontAwesomeIcon className="login__icon" icon={faUserCircle} />
                    <label className="login__label">Digite seu usuário:</label>
                    <InputMask mask="999.999.999-99" 
                    className={input.value ? "login__input login__input--warn" : "login__input"}
                    onChange={event => setInput({nome:event.target.value, value:input.value})}
                    value={input.nome}
                    name="input"
                    placeholder="Digite seu usuário:"/>
                    <label className="login__label">Digite sua senha:</label>
                    <input 
                        className={password.value ? "login__input login__input--warn" : "login__input"}
                        onChange={event => setPassword({text:event.target.value, value:password.value})}
                        value={password.text}
                        name="input"
                        placeholder="Digite sua senha:"
                        type="password"
                    />
                    <button type="submit" className="login__send">Enviar</button>
                </form>
            </section>
        </main>
    );
}

export default Login;