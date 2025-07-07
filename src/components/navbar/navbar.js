'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import { FiChevronDown } from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);
    const [currentLang, setCurrentLang] = useState({ code: 'GE', country: 'GE', label: 'GE' });
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
                    <div className="lang-dropdown">
                        <button
                            className="lang-btn"
                            onClick={() => setLangDropdown((v) => !v)}
                            aria-haspopup="listbox"
                            aria-expanded={langDropdown}
                        >
                            <ReactCountryFlag countryCode={currentLang.country} svg style={{ width: '22px', height: '16px', borderRadius: '2px', boxShadow: '0 1px 2px #0001', verticalAlign: 'middle' }} title={currentLang.label} />
                            <span>{currentLang.label}</span>
                            <FiChevronDown className="lang-arrow" size={18} />
                        </button>
                        {langDropdown && (
                            <div className="lang-dropdown-list" role="listbox">
                                <button className={`lang-dropdown-option${currentLang.code === 'GE' ? ' active' : ''}`} onClick={() => { setCurrentLang({ code: 'GE', country: 'GE', label: 'GE' }); setLangDropdown(false); }}>
                                    <ReactCountryFlag countryCode="GE" svg style={{ width: '20px', height: '14px', borderRadius: '2px', marginRight: 4 }} title="Georgia" /> GE
                                </button>
                                <button className={`lang-dropdown-option${currentLang.code === 'EN' ? ' active' : ''}`} onClick={() => { setCurrentLang({ code: 'EN', country: 'GB', label: 'EN' }); setLangDropdown(false); }}>
                                    <ReactCountryFlag countryCode="GB" svg style={{ width: '20px', height: '14px', borderRadius: '2px', marginRight: 4 }} title="English" /> EN
                                </button>
                                <button className={`lang-dropdown-option${currentLang.code === 'RU' ? ' active' : ''}`} onClick={() => { setCurrentLang({ code: 'RU', country: 'RU', label: 'RU' }); setLangDropdown(false); }}>
                                    <ReactCountryFlag countryCode="RU" svg style={{ width: '20px', height: '14px', borderRadius: '2px', marginRight: 4 }} title="Russian" /> RU
                                </button>
                            </div>
                        )}
                    </div>
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
