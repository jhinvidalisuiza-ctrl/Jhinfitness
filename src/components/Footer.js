import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';

function Footer() {
    return (
          <footer style={{
            background: '#0B1433',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '3rem 1.5rem 1.5rem',
            marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="JhinFitness" style={{ height: '36px' }} />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>
                Jhin<span style={{ color: '#F97316' }}>Fitness</span>
                  </span>
                  </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Nutricion Inteligente, Movimiento Potente, Salud Integral.
                </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', transition: 'color 0.2s' }}>
                <Instagram size={20} />
                </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', transition: 'color 0.2s' }}>
                <Youtube size={20} />
                </a>
              <a href="mailto:contacto@jhinfitness.com" style={{ color: '#94A3B8', transition: 'color 0.2s' }}>
                <Mail size={20} />
                </a>
                </div>
                </div>

          <div>
                            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>Plataforma</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/dietas" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Dietas</Link>
              <Link to="/recetas" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Recetas</Link>
              <Link to="/programas" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Programas</Link>
              <Link to="/progreso" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Mi Progreso</Link>
                </nav>
                </div>

          <div>
                            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>Cuenta</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/login" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Iniciar Sesion</Link>
              <Link to="/registro" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Registrarse</Link>
              <Link to="/perfil" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem' }}>Mi Perfil</Link>
                </nav>
                </div>
                </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} JhinFitness. Todos los derechos reservados.
                </p>
                </div>
                </div>
                </footer>
  );
}

export default Footer;
