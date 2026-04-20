import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Utensils, Search, Flame, Clock } from 'lucide-react';
import './Dashboard.css';

const CATEGORIAS = ['Todas', 'Perdida de Peso', 'Ganancia Muscular', 'Mantenimiento', 'Vegetariana', 'Cetogenica'];

function Dietas() {
    const [dietas, setDietas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoria, setCategoria] = useState('Todas');
    const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
        const fetchDietas = async () => {
                setLoading(true);
                let query = supabase.from('planes_dieta').select('*').order('nombre');
                if (categoria !== 'Todas') query = query.eq('objetivo', categoria);
                const { data } = await query;
                setDietas(data || []);
                setLoading(false);
        };
        fetchDietas();
  }, [categoria]);

  const filtradas = dietas.filter(d =>
        d.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
        d.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
                                    );

  return (
        <div className="page-container">
          <div className="container">
            <div className="page-header">
              <h1>Planes de Dieta</h1>
            <p>Encuentra el plan nutricional perfecto para tus objetivos</p>
    </div>

        <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
              type="text"
              placeholder="Buscar plan de dieta..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
                          />
                </div>

        <div className="filter-bar">
              {CATEGORIAS.map(cat => (
                            <button
                                            key={cat}
                className={`filter-btn ${categoria === cat ? 'active' : ''}`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
                </button>
          ))}
            </div>

{loading ? (
            <div className="loading-state"><div className="spinner"></div></div>
          ) : (
            <div className="cards-grid">
{filtradas.map(d => (
                <div key={d.id} className="card-item" style={{ cursor: 'default' }}>
                <div className="card-img">
                    <Utensils size={48} />
  </div>
                <div className="card-body">
                    <h3>{d.nombre}</h3>
                  <p>{d.descripcion}</p>
                  <div className="card-tags">
{d.objetivo && <span className="tag tag-orange">{d.objetivo}</span>}
{d.calorias_diarias && (
                        <span className="tag">
                          <Flame size={12} style={{ display: 'inline', marginRight: 3 }} />
{d.calorias_diarias} kcal/dia
  </span>
                    )}
{d.duracion_semanas && (
                        <span className="tag tag-green">
                          <Clock size={12} style={{ display: 'inline', marginRight: 3 }} />
{d.duracion_semanas} semanas
  </span>
                    )}
</div>
                      </div>
                      </div>
            ))}
{filtradas.length === 0 && (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#64748B' }}>
                <Utensils size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <p>No se encontraron planes de dieta.</p>
  </div>
            )}
</div>
        )}
</div>
          </div>
  );
}

export default Dietas;
