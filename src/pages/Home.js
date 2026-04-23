import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import { ArrowRight, Utensils, Dumbbell, TrendingUp, CheckCircle, Flame, Zap, Activity } from 'lucide-react';
import './Home.css';

function Home() {
  const { user } = useAuth();

  const fases = [
    {
      numero: '01',
      nombre: 'Ignición',
      subtitulo: 'DESINTOXICA',
      descripcion: 'Rompe la adicción al azúcar y prepara tu cuerpo para la transformación.',
      dias: 21,
      color: 'oklch(52% 0.14 145)',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    },
    {
      numero: '02',
      nombre: 'Combustión',
      subtitulo: 'QUEMA',
      descripcion: 'Maximiza la pérdida de grasa corporal con dieta keto optimizada.',
      dias: 21,
      color: 'oklch(52% 0.14 145)',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    },
    {
      numero: '03',
      nombre: 'Maestría',
      subtitulo: 'DOMINA',
      descripcion: 'Incorpora el ayuno intermitente para potenciar resultados definitivos.',
      dias: 21,
      color: 'oklch(52% 0.14 145)',
      img: 'https://images.unsplash.com/photo-1547592592-16d59900542d?w=600&q=80',
    },
    {
      numero: '04',
      nombre: 'Renovación',
      subtitulo: 'INTEGRA',
      descripcion: 'Estabiliza tu metabolismo y alcanza el equilibrio hormonal.',
      dias: 7,
      color: 'oklch(52% 0.14 145)',
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
        <div className="hero-content container">
          <div className="hero-badge">
            <Activity size={14} style={{ fill: 'currentColor' }} />
            Método DKP
          </div>
          <h1 className="hero-title">
            Transforma tu cuerpo en<br />
            <span className="hero-highlight">70 días</span>
          </h1>
          <p className="hero-subtitle">
            Un programa estructurado en 4 fases con menús keto completos, recetas deliciosas
            y seguimiento científico de tu progreso.
          </p>
          <div className="hero-cta">
            {user ? (
              <Link to="/dietas" className="btn-primary">
                Ver mi Plan <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link to="/registro" className="btn-primary">
                  Comenzar Gratis <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn-ghost">
                  Tengo cuenta
                </Link>
              </>
            )}
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-number">70</div>
              <span>Días de menús</span>
            </div>
            <div className="feature-item">
              <div className="feature-number">4</div>
              <span>Fases progresivas</span>
            </div>
            <div className="feature-item">
              <div className="feature-number">∞</div>
              <span>Recetas keto</span>
            </div>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="fases-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">LA TRANSFORMACIÓN</span>
            <h2>4 Fases. 70 Días. Resultados Reales.</h2>
          </div>
          <div className="fases-grid">
            {fases.map((f, i) => (
              <div key={i} className="fase-card">
                <div className="fase-header">
                  <div className="fase-badge" style={{ backgroundColor: f.color }}>
                    {f.numero}
                  </div>
                  <span className="fase-label">{f.subtitulo}</span>
                </div>
                <img src={f.img} alt={f.nombre} className="fase-img" />
                <div className="fase-body">
                  <h3>{f.nombre}</h3>
                  <p>{f.descripcion}</p>
                  <span className="fase-duration">{f.dias} días</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">TODO INCLUIDO</span>
            <h2>Herramientas completas para tu transformación</h2>
          </div>
          <div className="beneficios-grid">
            {[
              { icon: <Utensils size={24} />, titulo: 'Menús Diarios', desc: 'Desayuno, almuerzo y cena planificados para cada fase.' },
              { icon: <Dumbbell size={24} />, titulo: 'Ejercicios', desc: 'Rutinas adaptadas a tu nivel para potenciar resultados.' },
              { icon: <TrendingUp size={24} />, titulo: 'Seguimiento', desc: 'Visualiza tu progreso en tiempo real con gráficos.' },
              { icon: <CheckCircle size={24} />, titulo: 'Recetas', desc: 'Biblioteca de opciones deliciosas y fáciles de preparar.' },
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
          <div className="container cta-content">
            <h2>Comienza hoy mismo</h2>
            <p>Únete a miles de personas que ya transformaron su cuerpo con el Método DKP</p>
            <Link to="/registro" className="btn-primary btn-large">
              Crear Cuenta Gratis <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
