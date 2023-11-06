'use client'

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";


export default function NewsletterForm({ FORMSPARK_FORM_ID }) {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [email, setEmail] = useState("");


    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ email });
        alert("Form submitted");
        e.target.reset();
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required="" />
            <button type="submit" disabled={submitting}>
                Send
            </button>
        </form>
    );
}