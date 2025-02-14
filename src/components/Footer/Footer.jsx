import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção Superior */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/icon.svg" alt="INFLUER Logo" className="footer-logo" />
            <span className="footer-brand-text">INFLUER</span>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Produto</h4>
              <a href="#features" className="footer-link">Funcionalidades</a>
              <a href="#pricing" className="footer-link">Preços</a>
              <a href="#integrations" className="footer-link">Integrações</a>
              <a href="#security" className="footer-link">Segurança</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Recursos</h4>
              <a href="#blog" className="footer-link">Blog</a>
              <a href="#docs" className="footer-link">Documentação</a>
              <a href="#support" className="footer-link">Suporte</a>
              <a href="#status" className="footer-link">Status</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Empresa</h4>
              <a href="#about" className="footer-link">Sobre Nós</a>
              <a href="#careers" className="footer-link">Carreiras</a>
              <a href="#press" className="footer-link">Imprensa</a>
              <a href="#contact" className="footer-link">Contato</a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Seção Inferior */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} INFLUER. Todos os direitos reservados.
          </div>

          <div className="footer-social">
            <a href="#facebook" className="social-link">
              <FiFacebook />
            </a>
            <a href="#twitter" className="social-link">
              <FiTwitter />
            </a>
            <a href="#instagram" className="social-link">
              <FiInstagram />
            </a>
            <a href="#linkedin" className="social-link">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}