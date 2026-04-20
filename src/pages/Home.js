import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import { ArrowRight, Dumbbell, Utensils, TrendingUp, Star, CheckCircle } from 'lucide-react';
import './Home.css';

function Home() {
    const { user } = useAuth();

  return (
        <div className="home">
  {/* HERO */}
          <section className="hero">
            <div className="hero-bg"></div>
          <div className="container hero-content">
              <div className="hero-badge">
                <Star size={14} fill="currentColor" />
                <span>Plataforma #1 de Fitness en Espanol</span>
    </div>
            <h1 className="hero-title">
                Transforma tu cuerpo con<br />
                <span className="gradient-text">Nutricion Inteligente</span>
    </h1>
            <p className="hero-subtitle">
                Dietas personalizadas, recetas saludables y programas de entrenamiento
              disenados para ayudarte a alcanzar tus metas fitness.
                </p>
            <div className="hero-actions">
              {user ? (
                              <Link to="/dashboard" className="btn-hero-primary">
                                Ir al Dashboard <ArrowRight size={18} />
                </Link>
              ) : (
                              <>
                                <Link to="/registro" className="btn-hero-primary">
                                  Comenzar Gratis <ArrowRight size={18} />
                </Link>
                  <Link to="/dietas" className="btn-hero-secondary">
                                  Ver Dietas
                </Link>
                </>
              )}
</div>
          <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
              <span className="stat-label">Recetas Saludables</span>
  </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
                <span className="stat-number">50+</span>
              <span className="stat-label">Planes de Dieta</span>
  </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
                <span className="stat-number">20+</span>
              <span className="stat-label">Programas Fitness</span>
  </div>
  </div>
  </div>
  </section>

{/* FEATURES */}
      <section className="features">
                <div className="container">
                  <div className="section-header">
                    <h2>Todo lo que necesitas para tu <span className="text-accent">transformacion</span></h2>
                    <p>Una plataforma completa para tu bienestar fisico y nutricional</p>
        </div>
          <div className="features-grid">
                    <div className="feature-card">
                      <div className="feature-icon" style={{ background: 'rgba(27,45,110,0.3)', color: '#60A5FA' }}>
                <Utensils size={28} />
        </div>
              <h3>Dietas Personalizadas</h3>
              <p>Planes nutricionales adaptados a tus objetivos: perder peso, ganar musculo o mantenerte saludable.</p>
              <Link to="/dietas" className="feature-link">Explorar dietas <ArrowRight size={14} /></Link>
        </div>
            <div className="feature-card">
                      <div className="feature-icon" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316' }}>
                <Star size={28} />
        </div>
              <h3>Recetas Deliciosas</h3>
              <p>Mas de 500 recetas saludables con informacion nutricional completa, ingredientes y paso a paso.</p>
              <Link to="/recetas" className="feature-link">Ver recetas <ArrowRight size={14} /></Link>
        </div>
            <div className="feature-card">
                      <div className="feature-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>
                <Dumbbell size={28} />
        </div>
              <h3>Programas de Entrenamiento</h3>
              <p>Rutinas estructuradas para todos los niveles, desde principiantes hasta atletas avanzados.</p>
              <Link to="/programas" className="feature-link">Ver programas <ArrowRight size={14} /></Link>
        </div>
            <div className="feature-card">
                      <div className="feature-icon" style={{ background: 'rgba(168,85,247,0.15)', color: '#A855F7' }}>
                <TrendingUp size={28} />
        </div>
              <h3>Seguimiento de Progreso</h3>
              <p>Registra tus medidas, peso y logros. Visualiza tu evolucion con graficas detalladas.</p>
              <Link to="/progreso" className="feature-link">Mi progreso <ArrowRight size={14} /></Link>
        </div>
        </div>
        </div>
        </section>

{/* CTA */}
      <section className="cta-section">
                <div className="container">
                  <div className="cta-card">
                    <h2>Comienza tu transformacion hoy</h2>
            <p>Unete a miles de personas que ya estan logrando sus metas fitness con JhinFitness</p>
            <div className="cta-checks">
                      <span><CheckCircle size={16} /> Gratis para comenzar</span>
              <span><CheckCircle size={16} /> Sin tarjeta de credito</span>
              <span><CheckCircle size={16} /> Cancela cuando quieras</span>
        </div>
{!user && (
                <Link to="/registro" className="btn-cta">
                  Crear cuenta gratis <ArrowRight size={18} />
  </Link>
             )}
</div>
  </div>
  </section>
  </div>
  );
}

export default Home;
