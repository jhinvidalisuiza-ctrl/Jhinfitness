import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Utensils, Search, Flame, Clock } from 'lucide-react';
import './Dashboard.css';

const CATEGORIAS = ['Todas', 'Desayuno', 'Almuerzo', 'Cena', 'Snack', 'Postre', 'Bebida'];

function Recetas() {
    const [recetas, setRecetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoria, setCategoria] = useState('Todas');
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
          const fetchRecetas = async () => {
                  setLoading(true);
                  let query = supabase.from('recetas').select('id, nombre, descripcion, categoria, calorias, tiempo_preparacion, imagen_url').order('nombre');
                  if (categoria !== 'Todas') query = query.eq('categoria', categoria);
                  const { data } = await query;
                  setRecetas(data || []);
                  setLoading(false);
                };
          fetchRecetas();
        }, [categoria]);

    const filtradas = recetas.filter(r =>
                                         r.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
                                         r.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
                                       );

    return (
          <div className="page-container">
            <div className="container">
              <div className="page-header">
                <h1>Recetas Saludables</h1>
                <p>Descubre recetas deliciosas y nutritivas para cada momento del dia</p>
              </div>

              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Buscar receta..." value={busqueda} onChange={e => setBusqueda(e.target.value)} />
              </div>

              <div className="filter-bar">
                {CATEGORIAS.map(cat => (
                              <button key={cat} className={`filter-btn ${categoria === cat ? 'active' : ''}`} onClick={() => setCategoria(cat)}>
                                {cat}
                              </button>
                            ))}
              </div>

              {loading ? (
                          <div className="loading-state"><div className="spinner"></div></div>
                        ) : (
                          <div className="cards-grid">
                            {filtradas.map(r => (
                                            <Link to={`/recetas/${r.id}`} key={r.id} className="card-item">
                                              <div className="card-img">
                                                {r.imagen_url ? <img src={r.imagen_url} alt={r.nombre} /> : <Utensils size={48} />}
                                              </div>
                                              <div className="card-body">
                                                <h3>{r.nombre}</h3>
                                                <p>{r.descripcion?.slice(0, 80)}{r.descripcion?.length > 80 ? '...' : ''}</p>
                                                <div className="card-tags">
                                                  {r.categoria && <span className="tag tag-orange">{r.categoria}</span>}
                                                  {r.calorias && <span className="tag"><Flame size={11} style={{ display: 'inline', marginRight: 2 }} />{r.calorias} kcal</span>}
                                                  {r.tiempo_preparacion && <span className="tag tag-green"><Clock size={11} style={{ display: 'inline', marginRight: 2 }} />{r.tiempo_preparacion} min</span>}
                                                </div>
                                              </div>
                                            </Link>
                                          ))}
                            {filtradas.length === 0 && (
                                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#64748B' }}>
                                              <Utensils size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                                              <p>No se encontraron recetas.</p>
                                            </div>
                                          )}
                          </div>
                        )}
            </div>
          </div>
        );
  }

export default Recetas;
