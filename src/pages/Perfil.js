import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuth } from '../App';
import { Save, User, Mail, Calendar, Lock, LogOut, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Perfil = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState({
    nombre: '',
    email: user?.email || '',
    fecha_nacimiento: '',
    genero: '',
    altura: '',
    objetivo: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchPerfil = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from('perfiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setPerfil({
            nombre: data.nombre || '',
            email: user.email,
            fecha_nacimiento: data.fecha_nacimiento || '',
            genero: data.genero || '',
            altura: data.altura || '',
            objetivo: data.objetivo || ''
          });
        }
      } catch (error) {
        console.error('Error cargando perfil:', error);
      }
    };
    fetchPerfil();
  }, [user]);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const updates = {
        id: user.id,
        nombre: perfil.nombre,
        fecha_nacimiento: perfil.fecha_nacimiento,
        genero: perfil.genero,
        altura: parseFloat(perfil.altura) || null,
        objetivo: perfil.objetivo,
        updated_at: new Date()
      };

      const { error } = await supabase
        .from('perfiles')
        .upsert(updates, { onConflict: 'id' });

      if (error) throw error;
      setMessage({ type: 'success', text: '✅ Perfil actualizado correctamente' });
    } catch (error) {
      console.error('Error guardando perfil:', error);
      setMessage({ type: 'error', text: '❌ Error al guardar los cambios' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  return (
    <div className="page-container perfil-page">
      <div className="page-header">
        <h1 className="page-title">👤 Mi Perfil</h1>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          <LogOut size={16} /> Cerrar Sesión
        </button>
      </div>

      <div className="perfil-card">
        <div className="perfil-avatar">
          <div className="avatar-placeholder">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="perfil-form">
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}

          <div className="form-group">
            <label><User size={16} /> Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={perfil.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label><Mail size={16} /> Correo electrónico</label>
            <input
              type="email"
              value={perfil.email}
              disabled
              className="disabled-input"
            />
            <small>El correo no se puede modificar</small>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Calendar size={16} /> Fecha de nacimiento</label>
              <input
                type="date"
                name="fecha_nacimiento"
                value={perfil.fecha_nacimiento}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Género</label>
              <select name="genero" value={perfil.genero} onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Altura (cm)</label>
              <input
                type="number"
                name="altura"
                value={perfil.altura}
                onChange={handleChange}
                placeholder="Ej: 170"
                step="1"
              />
            </div>
            <div className="form-group">
              <label>Objetivo principal</label>
              <select name="objetivo" value={perfil.objetivo} onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="perder_peso">Perder peso</option>
                <option value="ganar_musculo">Ganar músculo</option>
                <option value="mantener">Mantener peso</option>
                <option value="rendimiento">Mejorar rendimiento</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <Loader size={16} className="spin" /> : <Save size={16} />}
              Guardar Cambios
            </button>
          </div>
        </form>

        <div className="password-section">
          <h4><Lock size={16} /> Cambiar contraseña</h4>
          <p className="text-muted">Próximamente podrás cambiar tu contraseña desde aquí.</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
