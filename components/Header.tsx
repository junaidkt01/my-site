import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <Link href="/" className="logo_icon" >
                <Image
                    src="/images/logo_icon.png"
                    alt="Lempire's Logo"
                    width={89}
                    height={44}
                    priority
                    className="cursor-pointer"
                />
            </Link>

            {/* Navigation Links */}
            <nav className="navlinks">
                <Link href="/" className="navlink hover:text-blue-600 transition-colors">
                    Home
                </Link>
                <Link href="/about" className="navlink hover:text-blue-600 transition-colors">
                    About
                </Link>
                <Link href="/services" className="navlink hover:text-blue-600 transition-colors">
                    Services
                </Link>
                <Link href="/works" className="navlink hover:text-blue-600 transition-colors">
                    Works
                </Link>
                <Link href="/blog" className="navlink hover:text-blue-600 transition-colors">
                    Blog
                </Link>
                <Link href="/contact" className="navlink hover:text-blue-600 transition-colors">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;


// import React from 'react'
// import Image from 'next/image';

// const Header = () => {
//     return (
//         <div className='header' >
//             <div>
//                 <Image src="/images/logo_icon.png" alt="..." width={89} height={44} priority />
//             </div>
//             <div className='navlinks' >

//             </div>
//         </div>
//     )
// }

// export default Header
