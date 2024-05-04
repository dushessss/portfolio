import React from 'react';
import {Route, Routes} from "react-router-dom";
import AboutMe from "../pages/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";

const Main = () => {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home/>}/>
            <Route path="/portfolio/aboutMe" element={<AboutMe/>}/>
            <Route path="/portfolio/contact" element={<Contact/>}/>
        </Routes>
    );
};

export default Main;