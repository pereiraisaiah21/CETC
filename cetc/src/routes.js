// Libs
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Components
import Home from "./Pages/Home/Home";
import Activity from "./Pages/Activity/Activity";
import Error from "./Pages/Error";
import Header from "./Components/Fixed/Header/Header";
import Footer from "./Components/Fixed/Footer/Footer";


/*
*  It controls de Routes
*/
function Rout () {

    /*
    * 
    */
    return(
         <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/activity/:id" element={<Activity/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Rout;