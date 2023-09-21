import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Container from './Container'

export default async function Header() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <header className='header'>
            <Container classes='flex-space-between p-tb-2'>
                <Link href="/">{settings.data.site_title}</Link>
                <nav className='header__nav'>
                    <ul>
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

// "use client"

// import Link from 'next/link';
// import { useState } from 'react';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className={`navbar ${isOpen ? 'open' : ''}`}>
//             <div className="logo">
//                 <Link href="/">Logo</Link>
//             </div>
//             <div className={`menu ${isOpen ? 'open' : ''}`}>
//                 <ul className="navList">
//                     <li className="navItem">
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li className="navItem">
//                         <Link href="/about">About</Link>
//                     </li>
//                     <li className="navItem">
//                         <Link href="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;







