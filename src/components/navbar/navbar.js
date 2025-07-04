'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu') && !event.target.closest('.burger-menu')) {
                setMenuOpen(false);
            }
        };

        let touchStartX = 0;

        const handleTouchStart = (event) => {
            if (event.touches && event.touches[0]) {
                touchStartX = event.touches[0].clientX;
            }
        };

        const handleSwipe = (event) => {
            if (menuOpen && event.changedTouches && event.changedTouches[0]) {
                const touchEndX = event.changedTouches[0].clientX;

                if (touchEndX - touchStartX > 50) {
                    setMenuOpen(false);
                }
            }
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleSwipe);

        if (menuOpen) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('touchend', handleSwipe);
        } else {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchend', handleSwipe);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchend', handleSwipe);
        };
    }, [menuOpen]);

    const handleMenuClick = (path) => {
        setMenuOpen(false);
        router.push(path);
    };

    return (
        <div className="header-container">
            <div className="logo" onClick={() => router.push('/')}>Video360 Studio</div>
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
    );
}

export default Navbar;
