// Libs
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Components
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Activity from "./Pages/Activity/Activity";
import Error from "./Pages/Error";
import Header from "./Components/Fixed/Header/Header";
import Footer from "./Components/Fixed/Footer/Footer";


import Subject from "./Pages/Subjects/Subjects";
import SubjectStructure from "./Pages/Subjects/Components/SubjectStructure";



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
                <Route path="/entrar" element={<Login/>} />
                <Route path="/atividades/:id" element={<Activity/>} />

                <Route path="/materias" element={<Subject/>} />
                <Route path="/materias/:id/:contentid" element={<SubjectStructure/>} />
                
                <Route path="*" element={<Error/>} />
            </Routes>
                
            <Footer />
        </Router>
    )
}

export default Rout;