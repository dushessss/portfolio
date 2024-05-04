import React from 'react';
import {mangaCovers} from "../../utils/mangaCover.jsx";
import MangaCovers from "./MangaCovers.jsx";

const Scroll = () => {
    return (
        <div className={'w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'}>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll"}>
                {Object.keys(mangaCovers).map((name,i) => <MangaCovers key={i} name={name}/>)}
            </ul>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll group-hover:paused"}
                aria-hidden={"true"}>
                {Object.keys(mangaCovers).map((name,i) => <MangaCovers key={i} name={name}/>)}
            </ul>
        </div>
    );
};

export default Scroll;