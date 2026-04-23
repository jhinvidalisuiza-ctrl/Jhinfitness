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
      nombre: 'Fase Ignición',
      subtitulo: 'Fase 1',
      descripcion: 'Desintoxica tu organismo y rompe la adiccion al azucar. El primer paso hacia tu transformacion.',
      dias: 21,
      color: '#f97316',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    },
    {
      numero: '02',
      nombre: 'Fase Combustión',
      subtitulo: 'Fase 2',
      descripcion: 'Maximiza la perdida de grasa corporal y reduce medidas con la dieta keto optimizada.',
      dias: 21,
      color: '#22C55E',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    },
    {
      numero: '03',
      nombre: 'Fase Maestría',
      subtitulo: 'Fase 3',
      descripcion: 'La graduacion de este estilo de vida. Incorpora el ayuno intermitente para potenciar resultados.',
      dias: 21,
      color: '#6B8FA4',
      img: 'https://images.unsplash.com/photo-1547592592-16d59900542d?w=600&q=80',
    },
    {
      numero: '04',
      nombre: 'Fase Renovación',
      subtitulo: 'Fase 4',
      descripcion: 'Resetea tu metabolismo en 7 dias y alcanza el equilibrio hormonal definitivo.',
      dias: 7,
      color: '#a855f7',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    },
  ];

  const beneficios = [
    { icon: <Utensils size={28} />, titulo: 'Menus Diarios', desc: '21 dias de menus keto completos con desayuno, almuerzo y cena para cada fase.' },
    { icon: <Dumbbell size={28} />, titulo: 'Programas Fitness', desc: 'Rutinas de entrenamiento adaptadas a tu nivel para complementar tu dieta.' },
    { icon: <TrendingUp size={28} />, titulo: 'Seguimiento', desc: 'Registra tu progreso y visualiza tus avances dia a dia.' },
    { icon: <CheckCircle size={28} />, titulo: 'Recetas Keto', desc: 'Biblioteca de recetas deliciosas y faciles de preparar.' },
  ];

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&q=80')" }} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">
            <Flame size={16} /> Metodo DKP — Dr. Bayter
          </div>
          <h1 className="hero-title">
            Transforma tu cuerpo con el<br />
            <span className="text-accent">Metodo Keto</span>
          </h1>
          <p className="hero-subtitle">
            El plan nutricional keto mas completo, con 4 fases, 70 dias de menus diarios,
            recetas deliciosas y seguimiento de tu progreso.
          </p>
          <div className="hero-cta">
            {user ? (
              <Link to="/dietas" className="btn-hero-primary">
                Ver mi Plan <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link to="/registro" className="btn-hero-primary">
                  Comenzar Gratis <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn-hero-secondary">
                  Iniciar Sesion
                </Link>
              </>
            )}
          </div>
          <div className="hero-stats">
            <div className="stat"><Star size={16} /><span>70 dias de menus</span></div>
            <div className="stat"><Zap size={16} /><span>4 fases del programa</span></div>
            <div className="stat"><CheckCircle size={16} /><span>Recetas incluidas</span></div>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="fases-section">
        <div className="container">
          <div className="section-header">
            <h2>Las 4 Fases del <span className="text-accent">Metodo DKP</span></h2>
            <p>Un programa estructurado de 70 dias para transformar tu cuerpo y habitos</p>
          </div>
          <div className="fases-grid">
            {fases.map((f, i) => (
              <div key={i} className="fase-card" style={{ '--fase-color': f.color }}>
                <div className="fase-img-wrap">
                  <img src={f.img} alt={f.nombre} className="fase-img" />
                  <div className="fase-numero">{f.numero}</div>
                </div>
                <div className="fase-info">
                  <span className="fase-subtitulo">{f.subtitulo}</span>
                  <h3>{f.nombre}</h3>
                  <p>{f.descripcion}</p>
                  <span className="fase-dias">{f.dias} dias</span>
                </div>
              </div>
            ))}
          </div>
          {user && (
            <div className="fases-cta">
              <Link to="/dietas" className="btn-hero-primary">
                Ver Menus Diarios <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios-section">
        <div className="container">
          <div className="section-header">
            <h2>Por que <span className="text-accent">JhinFitness</span></h2>
            <p>Todo lo que necesitas para transformar tu cuerpo en un solo lugar</p>
          </div>
          <div className="beneficios-grid">
            {[
              { icon: <Utensils size={28} />, titulo: 'Menus Diarios', desc: '21 dias de menus keto completos con desayuno, almuerzo y cena para cada fase.' },
              { icon: <Dumbbell size={28} />, titulo: 'Programas Fitness', desc: 'Rutinas de entrenamiento adaptadas a tu nivel para complementar tu dieta.' },
              { icon: <TrendingUp size={28} />, titulo: 'Seguimiento', desc: 'Registra tu progreso y visualiza tus avances dia a dia.' },
              { icon: <CheckCircle size={28} />, titulo: 'Recetas Keto', desc: 'Biblioteca de recetas deliciosas y faciles de preparar.' },
            ].map((b, i) => {
              return (
                <div key={i} className="beneficio-card">
                  <div className="beneficio-icon">{b.icon}</div>
                  <h4>{b.titulo}</h4>
                  <p>{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      {!user && (
        <section className="cta-section">
          <div className="container">
            <h2>Empieza tu transformacion <span className="text-accent">hoy</span></h2>
            <p>Unete a miles de personas que ya transformaron su cuerpo con el Metodo DKP</p>
            <Link to="/registro" className="btn-hero-primary">
              Crear Cuenta Gratis <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
