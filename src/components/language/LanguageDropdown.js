
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FiChevronDown } from 'react-icons/fi';
import './LanguageDropdown.css';
import { useLanguage } from '../../context/LanguageContext';

const LanguageDropdown = () => {
    const [langDropdown, setLangDropdown] = useState(false);
    const { currentLang, setCurrentLang } = useLanguage();

    return (
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
    );
};

export default LanguageDropdown;
