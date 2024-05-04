import React from 'react';
import {FaGithub} from "react-icons/fa6";
import {CgWebsite} from "react-icons/cg";

const Project = ({item}) => {
    return (
        <div className={`${item.color}`}>
            <div className={`${item.color} flex flex-col items-center md:max-w-7xl md:mx-auto`}>
                <h2 className={"text-2xl my-2"}>{item.name}</h2>
                <img src={item.img} alt="project_preview" className={"w-2/3 rounded-3xl "}/>
                <p>{item.text}</p>
                <div className={"flex justify-around w-full my-6 md:justify-center md:gap-x-14"}>
                    <button onClick={() => window.open(item.github, `_blank`)}
                            className={"border-2 rounded-2xl p-2"}>Code<FaGithub className={"inline-block ml-4"}/>
                    </button>
                    <button onClick={() => window.open(item.demo, `_blank`)}
                            className={"border-2 rounded-2xl p-2"}>Demo<CgWebsite className={"inline-block ml-4"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;