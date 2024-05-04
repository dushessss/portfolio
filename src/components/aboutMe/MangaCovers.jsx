import React from 'react';
import {mangaCovers} from "../../utils/mangaCover.jsx";
const MangaCovers = ({name}) => {
    return (
        <li>
            <img src={mangaCovers[name].img} alt={name} className={"w-[150px] h-full"}/>
            <p className={""}>{mangaCovers[name].name}</p>
            <p className={"text-[0.75rem]"}>Author : {mangaCovers[name].author}</p>
        </li>
    );
};

export default MangaCovers;