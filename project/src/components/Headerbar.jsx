import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const pageTitles = {
  '/': 'Dashboard',
  '/monitoring': 'Monitoring',
  '/reports': 'Reports',
  '/cycletime': 'Cycle Time Analysis',
  '/production_overview': 'Production Overview'  
};

export default function Header() {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || 'Over All Dashboard'; // default title

  return (
    <header className="header">
      <h1 className="header__title">{pageTitle}</h1>

      <div className="header__actions">
        <div className="header__search">
          <FiSearch className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search something......"
          />
        </div>
        <div className="header__divider" />
        <div className="header__icon header__mail">
          <FaEnvelope />
          <span className="header__badge" />
        </div>
        <div className="header__profile">
          <img src="/path/to/avatar.jpg" alt="Profile" className="header__avatar" />
          <span className="header__name">Monkey S.</span>
          <IoIosArrowDown className="header__arrow" />
        </div>
      </div>
    </header>
  );
}
