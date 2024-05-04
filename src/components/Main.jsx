import React from 'react';
import {Route, Routes} from "react-router-dom";
import AboutMe from "../pages/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};

export default Main;