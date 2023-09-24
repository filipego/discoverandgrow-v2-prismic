"use client"
import { useState } from 'react';
import { PrismicNextLink } from '@prismicio/next'

export default function Nav({ settings }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`header__nav navbar ${isOpen ? 'open' : ''}`}>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul className="navList">
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink onClick={toggleMenu} className='navItem' field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
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