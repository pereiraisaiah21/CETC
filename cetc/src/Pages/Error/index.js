// Libs
import React from "react";
import { useNavigate } from "react-router-dom";

/*
* 
*/
function Error () {

    /*
    * 
    */
    let navigate = useNavigate();

    /*
    * 
    */
    return (

        <button onClick={() => navigate('/')}>
            Click here to back 
        </button>
    )
}

export default Error;