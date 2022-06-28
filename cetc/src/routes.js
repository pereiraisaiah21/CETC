// Libs
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Components
import Home from "./Pages/Home/Home";
import Activity from "./Pages/Activity/Activity";
import Error from "./Pages/Error";
import Header from "./Components/Fixed/Header/Header";
import Footer from "./Components/Fixed/Footer/Footer";


import Subject from "./Pages/Subjects/Subjects";
import SubjectStructure from "./Pages/Subjects/Components/SubjectStructure";


import List from "./Components/List"

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
                <Route path="/subjects" element={<Subject/>} />
                <Route path="/subject/:id/:contentid" element={<SubjectStructure/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
                <List />
            <Footer />
        </Router>
    )
}

export default Rout;