import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href= "/"><div className="logo">
          <img src="/icon.svg" alt="INFLUER Logo" className="logo-icon" />
          <span className="gradient-text">INFLUER</span>
        </div></a>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link">
            <span>Funcionalidades</span>
            <FiArrowUpRight className="link-arrow" />
          </a>
          <a href="#cases" className="nav-link">
            <span>Casos de Uso</span>
            <FiArrowUpRight className="link-arrow" />
          </a>
          <a href="#pricing" className="nav-link">
            <span>Preços</span>
            <FiArrowUpRight className="link-arrow" />
          </a>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="login-btn">Entrar</Link>
          <Link to="/demo" className="demo-btn">Agendar Demo</Link>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
