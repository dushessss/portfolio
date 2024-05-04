import React from 'react';
import {NavLink} from "react-router-dom";
import '../css/header.css'

const Header = () => {
    const activePage = ({isActive}) => {
        return (
            (isActive ? 'text-blue-500 rounded-full bg-[#585654] p-2 font-bold transition duration-[.5s]' : 'p-2')
        )
    }
    return (
        <header
            className="sticky top-4 left-0 h-[50px] mt-4 w-[100vw] md:mt-0 md:top-0 z-10">
            <nav className={"h-full bg-[#1c1b1ae6] mx-4 rounded-full border-[#ffffff0d] border-2 shadow backdrop-blur-2xl md:rounded-none md:mx-0 md:border-0"}>
                    <ul className={"flex flex-row justify-between items-center h-full text-white mx-4 text-[0.8rem] md:justify-center"}>
                        <li className={"mx-4"}>
                            <NavLink to={""} className={activePage}>Home</NavLink>
                        </li>
                        <li className={"mx-4"}>
                            <NavLink to={"aboutMe"} className={activePage}>About Me</NavLink>
                        </li>
                        <li className={"md:mx-4"}>
                            <NavLink to={"contact"} className={activePage}>Contact Me</NavLink>
                        </li>
                    </ul>
            </nav>
        </header>
    );
};

export default Header;