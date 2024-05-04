import React from 'react';
import {AiFillInstagram} from "react-icons/ai";
import {FaFacebook, FaVk} from "react-icons/fa";
import {socialLinks} from "../utils/const.jsx";

const Footer = () => {
    return (
        <footer
            className={"bg-gradient-to-b from-black to-[#191817] to-20% w-full h-[100px] mt-auto text-white flex flex-col items-center md:items-start justify-center gap-y-2"}>
            <div className={"mt-2 md:ml-10 md:mt-4"}>
                <p>You can follow me on social medias:</p>
                <div className={"flex gap-x-4"}>
                    <AiFillInstagram className={"w-[28px] h-[28px]"}
                                     onClick={() => window.open(`${socialLinks.inst}`, '__blank')}/>
                    <FaVk className={"w-[28px] h-[28px]"} onClick={() => window.open(`${socialLinks.vk}`, '__blank')}/>
                    <FaFacebook className={"w-[28px] h-[28px]"}
                                onClick={() => window.open(`${socialLinks.facebook}`, '__blank')}/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;