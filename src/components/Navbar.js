import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Menu, X, Dumbbell, LogOut, User } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setMenuOpen(false);
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src="/logo.png" alt="JhinFitness" className="logo-img" />
              <span className="logo-text">Jhin<span className="logo-accent">Fitness</span></span>
    </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/descargas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Descargas
              </NavLink>
          <NavLink to="/dietas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Dietas
              </NavLink>
          <NavLink to="/recetas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Recetas
              </NavLink>
          <NavLink to="/programas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Programas
              </NavLink>
{user && (
              <NavLink to="/progreso" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
                Mi Progreso
  </NavLink>
          )}
</div>

        <div className="navbar-actions">
          {user ? (
                        <div className="user-menu">
                          <NavLink to="/perfil" className="btn-icon" title="Perfil">
                            <User size={20} />
            </NavLink>
              <button onClick={handleLogout} className="btn-icon" title="Cerrar sesion">
                            <LogOut size={20} />
            </button>
            </div>
          ) : (
                        <div className="auth-buttons">
                          <Link to="/login" className="btn-outline">Iniciar Sesion</Link>
              <Link to="/registro" className="btn-primary-nav">Registrarse</Link>
            </div>
          )}
</div>
            </div>
            </nav>
  );
}

export default Navbar;
