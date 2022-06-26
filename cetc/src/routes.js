// Libs
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Components
import Home from "./Pages/Home/Home";
import Activity from "./Pages/Activity/Activity";
import Error from "./Pages/Error";


/*
*  It controls de Routes
*/
function Rout () {

    /*
    * 
    */
    return(
         <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/activity">ABout</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/activity/:id" element={<Activity/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </Router>
    )
}

export default Rout;