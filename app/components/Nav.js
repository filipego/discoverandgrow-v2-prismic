"use client"
import { useState } from 'react';

export default function Nav({ children, settings }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`header__nav navbar ${isOpen ? 'open' : ''}`}>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul className="navList">
                        {children}
                    </ul>
                </div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </nav>
        </>
    )
}

Nav