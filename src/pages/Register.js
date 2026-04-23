import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import './Auth.css';

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ nombre: '', email: '', password: '', confirm: '' });
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirm) { setError('Las contrasenas no coinciden.'); return; }
        if (form.password.length < 6) { setError('La contrasena debe tener al menos 6 caracteres.'); return; }
        setLoading(true);
        const { error } = await supabase.auth.signUp({
                email: form.email, password: form.password,
                options: { data: { nombre_completo: form.nombre } }
        });
        if (error) { setError(error.message); } else { setSuccess(true); setTimeout(() => navigate('/login'), 3000); }
        setLoading(false);
  };

  if (success) {
        return (
                <div className="auth-page">
                  <div className="auth-card success-card">
                    <CheckCircle size={60} color="#22C55E" />
                    <h2>Cuenta creada con exito!</h2>
              <p>Revisa tu email para confirmar tu cuenta.</p>
          </div>
          </div>
        );
  }

  return (
        <div className="auth-page">
          <div className="auth-card">
            <div className="auth-logo">
              <img src="/logo.png" alt="JhinFitness" />
              <span>Jhin<span>Fitness</span></span>
    </div>
          <h1 className="auth-title">Crea tu cuenta</h1>
          <p className="auth-subtitle">Comienza tu transformacion fitness hoy</p>
  {error && <div className="auth-error"><AlertCircle size={16} /><span>{error}</span></div>}
          <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Nombre completo</label>
               <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
    </div>
    </div>
             <div className="form-group">
                <label>Email</label>
               <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input type="email" name="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
    </div>
    </div>
             <div className="form-group">
                <label>Contrasena</label>
               <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input type={showPass ? 'text' : 'password'} name="password" placeholder="Minimo 6 caracteres" value={form.password} onChange={handleChange} required />
                  <button type="button" className="eye-toggle" onClick={() => setShowPass(!showPass)}>{showPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
  </div>
  </div>
                                                                                                                 <div className="form-group">
              <label>Confirmar contrasena</label>
                                                                                                                   <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input type={showPass ? 'text' : 'password'} name="confirm" placeholder="Repite tu contrasena" value={form.confirm} onChange={handleChange} required />
  </div>
  </div>
          <button type="submit" className="btn-auth" disabled={loading}>{loading ? 'Creando cuenta...' : 'Crear Cuenta Gratis'}</button>
  </form>
        <p className="auth-footer">Ya tienes cuenta? <Link to="/login">Inicia sesion</Link></p>
  </div>
  </div>
  );
}

export default Register;
