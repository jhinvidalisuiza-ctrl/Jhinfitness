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
                color: '#F97316',
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
                color: '#60A5FA',
                img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      },
      {
                numero: '04',
                nombre: 'Fase Renovación',
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
