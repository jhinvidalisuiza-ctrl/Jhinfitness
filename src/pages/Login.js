import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import './Auth.css';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

  const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError('Email o contraseña incorrectos. Verifica tus datos.');
    }
    setLoading(false);
  };

  return (
        <div className="auth-page">
          <div className="auth-card">
            <div className="auth-logo">
              <img src="/logo.png" alt="JhinFitness" />
              <span>Jhin<span>Fitness</span></span>
    </div>
          <h1 className="auth-title">Bienvenido de vuelta</h1>
          <p className="auth-subtitle">Inicia sesion para continuar tu camino fitness</p>

  {error && (
              <div className="auth-error">
                <AlertCircle size={16} />
                <span>{error}</span>
    </div>
           )}

        <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                      <label>Email</label>
              <div className="input-wrapper">
                        <Mail size={18} className="input-icon" />
                        <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={form.email}
                onChange={handleChange}
                required
              />
                  </div>
                  </div>

          <div className="form-group">
                              <label>Contrasena</label>
            <div className="input-wrapper">
                                <Lock size={18} className="input-icon" />
                                <input
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Tu contrasena"
                value={form.password}
                onChange={handleChange}
                required
              />
                                <button type="button" className="eye-toggle" onClick={() => setShowPass(!showPass)}>
{showPass ? <EyeOff size={16} /> : <Eye size={16} />}
</button>
  </div>
  </div>

          <button type="submit" className="btn-auth" disabled={loading}>
{loading ? 'Iniciando sesion...' : 'Iniciar Sesion'}
</button>
  </form>

        <p className="auth-footer">
            No tienes cuenta? <Link to="/registro">Registrate gratis</Link>
  </p>
  </div>
  </div>
  );
}

export default Login;
