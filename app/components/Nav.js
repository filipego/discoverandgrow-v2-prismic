"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

export default function Nav({ settings }) {

    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    console.log(pathname)

    return (
        <>
            <nav className={`header__nav navbar ${isOpen ? 'open' : ''}`}>
                <div className={`menu ${isOpen ? 'open' : ''}`}>

                    <Link onClick={toggleMenu} className="logo logo--nav" href="/">{settings.data.site_title}</Link>
                    <ul className="navList">
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink
                                    onClick={toggleMenu}
                                    className={`navItem ${pathname === link.url ? "active" : ""}`}
                                    field={link}>{label}</PrismicNextLink>
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