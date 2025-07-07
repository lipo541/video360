'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu-items') && !event.target.closest('.burger-menu')) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('click', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const handleMenuClick = (path) => {
        setMenuOpen(false);
        router.push(path);
    };

    return (
        <>
            <div className="header-container">
                <div className="logo" onClick={() => router.push('/')}> 
                    <Image 
                        src="/images/slider/logomain.jpeg" 
                        alt="Video360 Studio" 
                        width={180}
                        height={60}
                        priority
                        className="logo-image"
                    />
                </div>
                
                {/* Mobile menu overlay */}
                {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
                
                <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>მთავარი</Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)}>სერვისები</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>ჩვენ შესახებ</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>კონტაქტი</Link>
                </div>
                
                <div 
                    className="burger-menu" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
            </div>
            <div className="header-placeholder"></div>
        </>
    );
}

export default Navbar;
