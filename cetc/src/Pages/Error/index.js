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
            {
                console.log("Sem página")
            }
        </button>
    )
}

export default Error;