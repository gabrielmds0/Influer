import React from 'react';
import { FiActivity, FiDatabase, FiCommand } from 'react-icons/fi';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: <FiActivity />,
      title: "Analytics em Tempo Real",
      description: "Monitoramento contínuo com dashboards interativos e relatórios preditivos"
    },
    {
      icon: <FiDatabase />,
      title: "Integração Total",
      description: "Conecte todas suas ferramentas em um único fluxo de trabalho"
    },
    {
      icon: <FiCommand />,
      title: "Automação Inteligente",
      description: "Workflows automatizados com triggers baseados em IA"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Tudo que você precisa para escalar resultados</h2>
          <p className="section-subtitle">Plataforma integrada com mais de 50 funcionalidades essenciais</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}