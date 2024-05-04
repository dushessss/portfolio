import React from 'react';
import {IoIosCloseCircle} from "react-icons/io";

const Modal = ({show, close}) => {
    if (!show.success) {
        return null;
    }
    const onClose = () => {
        show = false;
    };
    return (
        <div className={"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000080] backdrop-blur-sm z-[100]"}>
            <div className={"bg-slate-700 flex flex-col items-center p-4 gap-y-2 rounded-2xl"}>
                <p className={"text-white"}>{show.text}</p>
                <button onClick={() => {
                    close();
                }} className={"text-white"}><IoIosCloseCircle color={"#ff000080"} className={"h-[30px] w-[30px]"}/>
                </button>
            </div>
        </div>
    );
};

export default Modal;