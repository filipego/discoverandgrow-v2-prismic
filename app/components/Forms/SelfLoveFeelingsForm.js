'use client'

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SelfLoveFeelingsForm({ FORMSPARK_FORM_ID }) {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [timezone, setTimezone] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

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
        await submit({ name, email, state, city, timezone, age, message });
        notify()
        e.target.reset();
    };

    return (<>
        <form onSubmit={onSubmit} className="form form--default">
            <input type="text" id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required="" />
            <select name="state" id="state" onChange={(e) => setState(e.target.value)} required="">
                <option value="" selected="selected">Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <input type="text" id="city" name="city" placeholder="City" onChange={(e) => setCity(e.target.value)} required />
            <select name="timezone" id="timezone" onChange={(e) => setTimezone(e.target.value)} required="">
                <option value="" selected="selected">Select a Time Zone</option>
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="GMT">GMT (Greenwich Mean Time)</option>
                <option value="EST">EST (Eastern Standard Time)</option>
                <option value="CST">CST (Central Standard Time)</option>
                <option value="MST">MST (Mountain Standard Time)</option>
                <option value="PST">PST (Pacific Standard Time)</option>
                <option value="AKST">AKST (Alaska Standard Time)</option>
                <option value="HST">HST (Hawaii-Aleutian Standard Time)</option>
                <option value="AEST">AEST (Australian Eastern Standard Time)</option>
                <option value="CET">CET (Central European Time)</option>
                <option value="JST">JST (Japan Standard Time)</option>
                <option value="IST">IST (Indian Standard Time)</option>
            </select>
            <input type="text" id="age" name="age" placeholder="Age of child/children" onChange={(e) => setAge(e.target.value)} required />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button className="btn" type="submit" disabled={submitting}>
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