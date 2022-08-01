// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MYSTAT } from "../../store/endpoints";

// Components
import UserInfo from "../Home/Components/UserInfo/UserInfo";
import SimpleChart from "./Components/SimpleChart";

// Styles
import "./Profile.scss";

/**
 * 
 * @returns 
 */

function Profile () {

    const [myStat, setMyStat] = useState({data: [], error : ""});

    async function getMyStats () {

        axios.get(MYSTAT)
        .then((response) => {

            setMyStat({ ...myStat, data: response.data});
        }).catch(err => {
            setMyStat({ ...myStat, error: err });
        });
    };

    useEffect(() => {
        getMyStats();
    }, [getMyStats])

    return (
        <>
            <UserInfo />
            <section className="b">
                <div className="Profile__data"></div>
                <div className="Profile__rewards">
                    <p className="Profile__rewards__title">Minhas estatisticas</p>
                    {
                        myStat !== null 
                        ?
                        myStat.data.map((item, key) => {
                            return (
                                <section className="Profile__stat" key={key}>
                                    <h5>{item.address.city}</h5>
                                    <SimpleChart labelMade={item.address.street} labelTotal={item.address.suite} valueMade={Math.ceil(item.address.geo.lat) * -1}  valueTotal={Math.ceil(item.address.geo.lng)} colorMade="#cd8e1bbd" colorTotal="#088"/>
                                </section>
                            )
                        })
                        :
                        ""
                    }
                    
                </div>
                <div className="Profile__actions"></div>
            </section>
        </>
    );
}

export default Profile;