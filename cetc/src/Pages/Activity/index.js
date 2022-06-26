import React from "react";

import { useParams } from "react-router-dom";

function Question () {
    let {username} = useParams();
    return (
        <h1>Pagina secundária {username}</h1>
    )
}

export default Question;