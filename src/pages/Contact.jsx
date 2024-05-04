import React, {useRef, useState} from 'react';
import * as emailjs from "@emailjs/browser";
import Modal from "../components/contact/Modal.jsx";

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState({
        success: false,
        text: ""
    });

    const closeModal = ()=>{
        setSuccess({
            success: false,
            text: ""
        });
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_j3cv3kc', 'template_9q2sexc', form.current, {
                publicKey: 'l_ps0J5CNbZcfFvtr',
            })
            .then(
                () => {
                    setSuccess({
                        success: true,
                        text: "Successfully sent!"
                    })
                },
                (error) => {
                    setSuccess({
                        success: true,
                        text: "Failed to send email"
                    })
                },
            );
    };
    return (
        <div className={"flex flex-col justify-center items-center h-[80svh]"}>
            <form ref={form} onSubmit={sendEmail} className={"text-white flex flex-col bg-[#191817] rounded-3xl px-10"}>
                <p className={"self-center mb-3 pt-4 text-2xl"}>Contact form</p>
                <label>Name</label>
                <input type="text" name="user_name" className={"text-black rounded-2xl px-2"}/>
                <label>Email</label>
                <input type="email" name="user_email" className={"text-black rounded-2xl px-2"}/>
                <label>Message</label>
                <textarea name="message" className={"text-black rounded-2xl px-2"}/>
                <input type="submit" value="Send" className={"mt-4 pb-4"}/>
            </form>
            <Modal show={success} close={closeModal} />
        </div>
    );
};

export default Contact;