'use client'

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "nZrFzt0J";


export default function ContactForm() {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ name, email, message });
        alert("Form submitted");
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required="" />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" disabled={submitting}>
                Send
            </button>
        </form>
    );
}