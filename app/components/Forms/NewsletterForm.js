'use client'

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewsletterForm({ FORMSPARK_FORM_ID }) {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [email, setEmail] = useState("");

    const notify = () => toast.success("Thank you, your message has been sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ email });
        notify()
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required="" />
                <button type="submit" disabled={submitting}>
                    Send
                </button>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}