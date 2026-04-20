import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../App';
import { Dumbbell, Clock, TrendingUp, Calendar, Loader } from 'lucide-react';
import './Dashboard.css'; // Reutilizamos estilos de dashboard

const Programas = () => {
  const { user } = useAuth();
  const [programas, setProgramas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        // Ejemplo: programas predefinidos o desde BD
        const { data, error } = await supabase
          .from('programas')
          .select('*')
          .order('nivel', { ascending: true });

        if (error) throw error;
        setProgramas(data || [
          // Datos mock si la tabla está vacía
          { id: 1, nombre: 'Principiante Full Body', descripcion: 'Rutina 3 días/semana', nivel: 'principiante', duracion: '45 min', imagen: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600' },
          { id: 2, nombre: 'Intermedio Push/Pull', descripcion: '4 días/semana', nivel: 'intermedio', duracion: '60 min', imagen: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600' },
          { id: 3, nombre: 'Avanzado Hipertrofia', descripcion: '5 días/semana', nivel: 'avanzado', duracion: '75 min', imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600' },
        ]);
      } catch (error) {
        console.error('Error cargando programas:', error);
        setProgramas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramas();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <Loader className="spinner" size={48} />
        <p>Cargando programas...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🏋️ Programas de Entrenamiento</h1>
        <p className="page-subtitle">Elige el plan que mejor se adapte a tu nivel</p>
      </div>

      <div className="dashboard-grid">
        {programas.map((programa) => (
          <div key={programa.id} className="dashboard-card programa-card">
            <div className="card-image" style={{ backgroundImage: `url(${programa.imagen || 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600'})` }}>
              <span className={`nivel-badge nivel-${programa.nivel}`}>{programa.nivel}</span>
            </div>
            <div className="card-content">
              <h3>{programa.nombre}</h3>
              <p>{programa.descripcion}</p>
              <div className="card-meta">
                <span><Clock size={16} /> {programa.duracion}</span>
                <span><TrendingUp size={16} /> {programa.ejercicios || '8-12'} ejercicios</span>
              </div>
              <Link to={`/programas/${programa.id}`} className="btn btn-primary btn-block">
                Ver Rutina <Dumbbell size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="info-note">
        <Calendar size={20} />
        <span>Recuerda descansar al menos 48h entre sesiones del mismo grupo muscular.</span>
      </div>
    </div>
  );
};

export default Programas;
