// Libs
import React from "react";

// Components
import UserInfo from "../Home/Components/UserInfo/UserInfo";
import SimpleChart from "./Components/SimpleChart";

// Styles
import "./Profile.scss";

function Profile () {
    return (
        <>
            <UserInfo />
            <section className="b">
                <div className="Profile__data">
                    
                </div>
                <div className="Profile__rewards">
                    <section className="Profile__stat">
                        <h5>Quantidade de acertos</h5>
                        <SimpleChart />
                    </section>
                    <section className="Profile__stat">
                        <h5>Aproveitamento de acertos</h5>
                        <SimpleChart />
                    </section>
                    <section className="Profile__stat">
                        <h5>XP</h5>
                        <SimpleChart />
                    </section>
                    <section className="Profile__stat">
                        <h5>Conteúdos acessados</h5>
                        <SimpleChart />
                    </section>
                </div>
                <div className="Profile__actions">
                    
                </div>
            </section>
        </>
    );
}

export default Profile;