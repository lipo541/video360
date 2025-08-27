'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import LanguageDropdown from '../language/LanguageDropdown';
import './navbar.css';
import ka from '../../locales/ka';
import en from '../../locales/en';
import ru from '../../locales/ru';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const { currentLang } = useLanguage();
    const locales = { ka, en, ru };
    const t = locales[currentLang.code] || ka;
    const base = `/${currentLang.code}`;

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
                <div className="logo" onClick={() => router.push(base)}> 
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
                    <Link href={base} onClick={() => setMenuOpen(false)}>{t.home}</Link>
                    <Link href={`${base}/services`} onClick={() => setMenuOpen(false)}>{t.services}</Link>
                    <Link href={`${base}/about`} onClick={() => setMenuOpen(false)}>{t.about}</Link>
                    <Link href={`${base}/contact`} onClick={() => setMenuOpen(false)}>{t.contact}</Link>
                    <div className="navbar-lang-mobile"><LanguageDropdown /></div>
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
