'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // prevent body scroll when menu open
    useEffect(() => {
        if (typeof window === "undefined") return;
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen((s) => !s);

    return (
        <header className="header">
            <Link href="/" className="logo_icon" onClick={closeMenu}>
                <Image
                    src="/images/logo_icon.png"
                    alt="Lempire's Logo"
                    width={89}
                    height={44}
                    priority
                    className="cursor-pointer"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="navlinks">
                <Link href="/" className="navlink">Home</Link>
                <Link href="/about" className="navlink">About</Link>
                <Link href="/blog" className="navlink">Blog</Link>
                <Link href="/faq" className="navlink">FAQ</Link>
                <Link href="/portfolio" className="navlink">Portfolio</Link>
                <Link href="/careers" className="navlink">Careers</Link>
                <Link href="/contact" className="navlink">Contact</Link>
            </nav>

            <div className="menu_icon" onClick={toggleMenu} aria-label="Open menu" role="button">
                <p>Menu</p>
            </div>

            <div
                className={`menu_overlay ${menuOpen ? "visible" : ""}`}
                onClick={closeMenu}
                aria-hidden={!menuOpen}
            />

            <aside className={`mobile_menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
                <div className="menu_header">
                    <button className="close_btn" onClick={closeMenu} aria-label="Close menu">✕</button>
                </div>

                <nav className="mobile_nav">
                    <ul>
                        <li onClick={closeMenu}><Link href="/">Home</Link></li>
                        <li onClick={closeMenu}><Link href="/about">About</Link></li>
                        <li onClick={closeMenu}><Link href="/blog">Blog</Link></li>
                        <li onClick={closeMenu}><Link href="/faq">FAQ</Link></li>
                        <li onClick={closeMenu}><Link href="/portfolio">Portfolio</Link></li>
                        <li onClick={closeMenu}><Link href="/careers">Careers</Link></li>
                        <li onClick={closeMenu}><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
};

export default Header;



// 'use client'

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//     return (
//         <header className="header">
//             <Link href="/" className="logo_icon" >
//                 <Image
//                     src="/images/logo_icon.png"
//                     alt="Lempire's Logo"
//                     width={89}
//                     height={44}
//                     priority
//                     className="cursor-pointer"
//                 />
//             </Link>

//             {/* Navigation Links */}
//             <nav className="navlinks">
//                 <Link href="/" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     Home
//                 </Link>
//                 <Link href="/about" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     About
//                 </Link>
//                 <Link href="/blog" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     Blog
//                 </Link>
//                 <Link href="/faq" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     FAQ
//                 </Link>
//                 <Link href="/portfolio" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     Portfolio
//                 </Link>
//                 <Link href="/careers" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     Careers
//                 </Link>
//                 <Link href="/contact" className="navlink text-[#ffffff] hover:text-[#3CBBCE] transition-colors">
//                     Contact
//                 </Link>
//             </nav>

//             <div className="menu_icon"><p>Menu</p></div>
//         </header>
//     );
// };

// export default Header;