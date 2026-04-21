import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import { ArrowRight, Dumbbell, Utensils, TrendingUp, Star, CheckCircle, Flame, Zap } from 'lucide-react';
import './Home.css';

function Home() {
      const { user } = useAuth();

  const fases = [
      {
                numero: '01',
                nombre: 'KetoBayter',
                subtitulo: 'Fase 1',
                descripcion: 'Desintoxica tu organismo y rompe la adiccion al azucar. El primer paso hacia tu transformacion.',
                dias: 21,
                color: '#F97316',
                img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
      },
      {
                numero: '02',
                nombre: 'LipoBayter',
                subtitulo: 'Fase 2',
                descripcion: 'Maximiza la perdida de grasa corporal y reduce medidas con la dieta keto optimizada.',
                dias: 21,
                color: '#22C55E',
                img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
      },
      {
                numero: '03',
                nombre: 'InterBayter',
                subtitulo: 'Fase 3',
                descripcion: 'La graduacion de este estilo de vida. Incorpora el ayuno intermitente para potenciar resultados.',
                dias: 21,
                color: '#60A5FA',
                img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      },
      {
                numero: '04',
                nombre: 'KetoMetabolismo',
                subtitulo: 'Fase 4',
                descripcion: 'Resetea tu metabolismo en 7 dias y alcanza el equilibrio hormonal definitivo.',
                dias: 7,
                color: '#A855F7',
                img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80',
      },
        ];

  return (
          <div className="home">
  {/* HERO */}
            <section className="hero">
              <div className="hero-bg"></div>
            <div className="hero-img-overlay"
              style={{
                              backgroundImage: `url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1400&q=80')`,
              }}
        ></div>
        <div className="container hero-content">
                      <div className="hero-badge">
                        <Star size={14} fill="currentColor" />
                        <span>Programa Keto #1 en Espanol</span>
            </div>
          <h1 className="hero-title">
                        Transforma tu cuerpo con<br />
                        <span className="gradient-text">Nutricion Inteligente</span>
            </h1>
          <p className="hero-subtitle">
                        4 fases progresivas, menus diarios y recetas keto disenadas
            para ayudarte a alcanzar tus metas de salud en 70 dias.
                </p>
          <div className="hero-actions">
            {user ? (
                              <Link to="/dashboard" className="btn-hero-primary">
                                Ir al Dashboard <ArrowRight size={18} />
                </Link>
            ) : (
                              <>
                                <Link to="/registro" className="btn-hero-primary">
                                  Comenzar Ahora <ArrowRight size={18} />
                </Link>
                                <Link to="/dietas" className="btn-hero-secondary">
                                  Ver Fases
                </Link>
                </>
            )}
</div>
          <div className="hero-stats">
                            <div className="stat-item">
                              <span className="stat-number">70</span>
              <span className="stat-label">Dias Totales</span>
                </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
                              <span className="stat-number">4</span>
              <span className="stat-label">Fases Progresivas</span>
                </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
                              <span className="stat-number">3</span>
              <span className="stat-label">Comidas por Dia</span>
                </div>
                </div>
                </div>
                </section>

{/* FASES */}
      <section className="fases-section">
                  <div className="container">
                    <div className="section-header">
                      <h2>Las <span className="text-accent">4 Fases</span> del Metodo</h2>
                      <p>Un programa estructurado de 70 dias para transformar tu cuerpo y habitos</p>
          </div>
          <div className="fases-grid">
      {fases.map((fase) => (
                        <div className="fase-card" key={fase.numero}>
                <div className="fase-img-wrap">
                            <img src={fase.img} alt={fase.nombre} className="fase-img" />
                            <span className="fase-badge" style={{ background: fase.color }}>{fase.subtitulo}</span>
          </div>
                <div className="fase-body">
                            <span className="fase-num" style={{ color: fase.color }}>{fase.numero}</span>
                  <h3 className="fase-nombre">{fase.nombre}</h3>
                  <p className="fase-desc">{fase.descripcion}</p>
                  <div className="fase-dias">
                              <Flame size={14} style={{ color: fase.color }} />
                    <span>{fase.dias} dias</span>
          </div>
          </div>
          </div>
            ))}
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
              <h3>Dietas Keto Personalizadas</h3>
              <p>Planes nutricionales keto adaptados a tus objetivos: perder peso, ganar energia o mantenerte saludable.</p>
              <Link to="/dietas" className="feature-link">Explorar dietas <ArrowRight size={14} /></Link>
          </div>
            <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316' }}>
                <Star size={28} />
          </div>
              <h3>Recetas Keto Deliciosas</h3>
              <p>Cientos de recetas keto con informacion nutricional completa, ingredientes y preparacion paso a paso.</p>
              <Link to="/recetas" className="feature-link">Ver recetas <ArrowRight size={14} /></Link>
          </div>
                      <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>
                <Dumbbell size={28} />
          </div>
              <h3>Programas de Entrenamiento</h3>
              <p>Rutinas estructuradas para todos los niveles, disenadas para complementar tu dieta keto.</p>
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
                      <div className="cta-icon"><Zap size={40} /></div>
            <h2>Comienza tu transformacion hoy</h2>
            <p>Unete a miles de personas que ya estan logrando sus metas con el Metodo JhinFitness</p>
            <div className="cta-checks">
                        <span><CheckCircle size={16} /> 70 dias de menus listos</span>
              <span><CheckCircle size={16} /> 4 fases progresivas</span>
              <span><CheckCircle size={16} /> Recetas keto incluidas</span>
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
