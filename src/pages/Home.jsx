import React from 'react';
import photo from '../img/photo-CuaeKxZ2.jpg';
import {FaAngleDoubleDown} from "react-icons/fa";
import Project from "../components/Home/Project.jsx";
import {projects} from "../utils/const.jsx";

const Home = () => {
    return (
        <div className={"text-white divide-y divide-slate-700"}>
            <div className={"flex flex-col items-center justify-end gap-5 w-[75%] mx-auto h-[93svh] md:max-w-7xl md:mx-auto md:h-[95vh]"}>
                <img src={photo} alt="myPhoto" className={"rounded-full w-[175px] mt-7 md:w-[350px]"}/>
                <p>Hello, my name is Andrew Cheremisin, and I am a future fullstack developer.</p>
                <p>Right now im still learning and right below you can see the projects that im already did will learning.</p>
                <FaAngleDoubleDown className={"h-10 w-10 mb-10 mt-36 animate-bounce"}/>
            </div>
            {projects.map((item) => <Project item={item} key={item.name} />)}
        </div>
    );
};

export default Home;