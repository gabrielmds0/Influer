import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="gradient-overlay"></div>
      <div className="hero-content">
        <div className="hero-headline">
          <span className="hero-gradient">Transforme sua</span>
          <span className="hero-gradient">Rede Social</span>
        </div>
        
        <p className="hero-subtitle">
          Plataforma tudo-em-um para gestão de social media com IA generativa
        </p>

        <div className="hero-actions">
          <button className="cta-primary">
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
}