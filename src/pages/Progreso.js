import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../App';
import { Plus, Trash2, Edit, Save, X, TrendingUp, TrendingDown, Loader } from 'lucide-react';
import './Dashboard.css';

const Progreso = () => {
  const { user } = useAuth();
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    fecha: new Date().toISOString().split('T')[0],
    peso: '',
    cintura: '',
    pecho: '',
    pierna: '',
    notas: ''
  });

  useEffect(() => {
    fetchRegistros();
  }, []);

  const fetchRegistros = async () => {
    try {
      const { data, error } = await supabase
        .from('progreso')
        .select('*')
        .eq('user_id', user.id)
        .order('fecha', { ascending: false });

      if (error) throw error;
      setRegistros(data || []);
    } catch (error) {
      console.error('Error cargando progreso:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      ...formData,
      peso: parseFloat(formData.peso) || null,
      cintura: parseFloat(formData.cintura) || null,
      pecho: parseFloat(formData.pecho) || null,
      pierna: parseFloat(formData.pierna) || null,
      user_id: user.id
    };

    try {
      if (editId) {
        const { error } = await supabase
          .from('progreso')
          .update(datos)
          .eq('id', editId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('progreso')
          .insert([datos]);
        if (error) throw error;
      }
      fetchRegistros();
      resetForm();
    } catch (error) {
      console.error('Error guardando registro:', error);
      alert('Error al guardar');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este registro?')) return;
    try {
      const { error } = await supabase
        .from('progreso')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchRegistros();
    } catch (error) {
      console.error('Error eliminando:', error);
    }
  };

  const handleEdit = (registro) => {
    setEditId(registro.id);
    setFormData({
      fecha: registro.fecha,
      peso: registro.peso || '',
      cintura: registro.cintura || '',
      pecho: registro.pecho || '',
      pierna: registro.pierna || '',
      notas: registro.notas || ''
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      fecha: new Date().toISOString().split('T')[0],
      peso: '',
      cintura: '',
      pecho: '',
      pierna: '',
      notas: ''
    });
    setEditId(null);
    setShowForm(false);
  };

  const calcularCambio = (campo) => {
    if (registros.length < 2) return null;
    const actual = registros[0]?.[campo];
    const anterior = registros[1]?.[campo];
    if (!actual || !anterior) return null;
    const cambio = actual - anterior;
    return { valor: cambio.toFixed(1), positivo: cambio < 0 ? 'bajó' : 'subió' };
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <Loader className="spinner" size={48} />
        <p>Cargando progreso...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📊 Mi Progreso</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? 'Cancelar' : 'Nuevo Registro'}
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editId ? 'Editar Registro' : 'Nuevo Registro'}</h3>
          <form onSubmit={handleSubmit} className="progreso-form">
            <div className="form-row">
              <div className="form-group">
                <label>Fecha</label>
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Peso (kg)</label>
                <input type="number" step="0.1" name="peso" value={formData.peso} onChange={handleChange} placeholder="Ej: 70.5" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Cintura (cm)</label>
                <input type="number" step="0.1" name="cintura" value={formData.cintura} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Pecho (cm)</label>
                <input type="number" step="0.1" name="pecho" value={formData.pecho} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Pierna (cm)</label>
                <input type="number" step="0.1" name="pierna" value={formData.pierna} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Notas</label>
              <textarea name="notas" value={formData.notas} onChange={handleChange} rows="2" placeholder="¿Cómo te sentiste esta semana?"></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                <Save size={16} /> {editId ? 'Actualizar' : 'Guardar'}
              </button>
              <button type="button" className="btn btn-outline" onClick={resetForm}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="stats-summary">
        {registros.length > 0 && (
          <div className="stat-cards">
            <div className="stat-card">
              <h4>Peso actual</h4>
              <div className="stat-value">{registros[0]?.peso || '--'} kg</div>
              {calcularCambio('peso') && (
                <span className={`cambio ${calcularCambio('peso').positivo === 'bajó' ? 'positivo' : 'negativo'}`}>
                  {calcularCambio('peso').positivo === 'bajó' ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                  {calcularCambio('peso').valor} kg
                </span>
              )}
            </div>
            <div className="stat-card">
              <h4>Cintura</h4>
              <div className="stat-value">{registros[0]?.cintura || '--'} cm</div>
            </div>
            <div className="stat-card">
              <h4>Pecho</h4>
              <div className="stat-value">{registros[0]?.pecho || '--'} cm</div>
            </div>
          </div>
        )}
      </div>

      <div className="registros-list">
        <h3>Historial de Registros</h3>
        {registros.length === 0 ? (
          <div className="empty-state">
            <p>📭 Aún no tienes registros. ¡Añade tu primer seguimiento!</p>
          </div>
        ) : (
          <table className="progreso-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Peso</th>
                <th>Cintura</th>
                <th>Pecho</th>
                <th>Pierna</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((reg) => (
                <tr key={reg.id}>
                  <td>{new Date(reg.fecha).toLocaleDateString()}</td>
                  <td>{reg.peso || '-'} kg</td>
                  <td>{reg.cintura || '-'} cm</td>
                  <td>{reg.pecho || '-'} cm</td>
                  <td>{reg.pierna || '-'} cm</td>
                  <td className="acciones">
                    <button className="icon-btn" onClick={() => handleEdit(reg)}><Edit size={16} /></button>
                    <button className="icon-btn danger" onClick={() => handleDelete(reg.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Progreso;
