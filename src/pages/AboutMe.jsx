import React from 'react';
import Scroll from "../components/aboutMe/Scroll.jsx";
import Iframes from "../components/aboutMe/Iframes.jsx";
import {iframesLinks} from "../utils/const.jsx";
import SliderMusic from "../components/aboutMe/SliderMusic.jsx";

const AboutMe = () => {
    const iframe = ()=> {
        return {
            __html: iframe
        }
    };
    const iFrame = `<iframe style="border-radius:12px"
                           src="https://open.spotify.com/embed/album/6IYPmM3xsOPL2XPSvf1ZAz?utm_source=generator&theme=0"
                           width="100%" height="152" frameBorder="0" allowFullScreen=""
                           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                           loading="lazy"></iframe>`
    return (
        <div className={"text-white divide-y divide-slate-700"}>
            <div
                className={"flex flex-col items-center justify-center gap-5 h-[93svh] w-[75%] mx-auto md:max-w-7xl md:mx-auto md:h-[95vh] "}>
                <p className={"border-t-4 border-double border-slate-700 pt-10 text-2xl"}>As you probably know from
                    Homepage, my name is Andrew Cheremisin</p>
                <p className={"border-b-4 border-double border-slate-700 pb-10 text-2xl"}>On this page i want to tell
                    more about myself.</p>
            </div>
            <div className={"bg-[#191817]"}>
                <div
                    className={"flex flex-col items-start justify-center gap-5 h-[93svh] w-[75%] mx-auto md:max-w-7xl md:mx-auto md:h-[95vh]"}>
                    <h2 className={"text-center text-2xl"}>Music</h2>
                    <p>
                        I really love listening to music. Genres may be different. My favorite songs are the heavy
                        ones.</p>
                    <SliderMusic/>
                </div>
            </div>
            <div>
                <div
                    className={"flex flex-col items-start justify-center gap-5 h-[93svh] w-[75%] mx-auto md:max-w-7xl md:mx-auto md:h-[95vh]"}>
                    <h2 className={"text-2xl"}>Manga</h2>
                    <p>I really love reading manga, I've read about 80 of them and I still continue to read them.</p>
                    <p>List of my most favorite mangas:</p>
                    <Scroll/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;