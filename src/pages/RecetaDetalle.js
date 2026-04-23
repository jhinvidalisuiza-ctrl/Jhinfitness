import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../App';
import { ArrowLeft, Clock, Users, ChefHat, Flame, Loader } from 'lucide-react';
import './RecetaDetalle.css';

const RecetaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('recetas')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        if (!data) throw new Error('Receta no encontrada');

        setReceta(data);
      } catch (err) {
        console.error('Error cargando receta:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchReceta();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-screen">
        <Loader className="spinner" size={48} />
        <p>Cargando receta...</p>
      </div>
    );
  }

  if (error || !receta) {
    return (
      <div className="error-container">
        <h2>😕 Receta no encontrada</h2>
        <p>{error || 'La receta que buscas no existe.'}</p>
        <Link to="/recetas" className="btn btn-primary">
          <ArrowLeft size={18} /> Volver a Recetas
        </Link>
      </div>
    );
  }

  // Parsear ingredientes e instrucciones si vienen como string JSON
  const ingredientes = typeof receta.ingredientes === 'string' 
    ? JSON.parse(receta.ingredientes) 
    : receta.ingredientes || [];
  const instrucciones = typeof receta.instrucciones === 'string'
    ? JSON.parse(receta.instrucciones)
    : receta.instrucciones || [];

  return (
    <div className="page-container receta-detalle-page">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} /> Volver
        </button>
        <h1 className="page-title">{receta.nombre}</h1>
      </div>

      <div className="receta-hero">
        <img 
          src={receta.imagen_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'} 
          alt={receta.nombre}
          className="receta-imagen"
          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'}
        />
        <div className="receta-badges">
          <span className="badge"><Clock size={16} /> {receta.tiempo_preparacion || '30'} min</span>
          <span className="badge"><Users size={16} /> {receta.porciones || 4} porciones</span>
          <span className="badge"><Flame size={16} /> {receta.calorias || '~'} kcal</span>
          {receta.dificultad && (
            <span className="badge"><ChefHat size={16} /> {receta.dificultad}</span>
          )}
        </div>
      </div>

      <div className="receta-content-grid">
        <div className="ingredientes-section">
          <h2>🥑 Ingredientes</h2>
          <ul className="ingredientes-list">
            {ingredientes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="instrucciones-section">
          <h2>📝 Preparación</h2>
          <ol className="instrucciones-list">
            {instrucciones.map((paso, index) => (
              <li key={index}>{paso}</li>
            ))}
          </ol>
        </div>

        {receta.notas && (
          <div className="notas-section">
            <h3>📌 Notas del chef</h3>
            <p>{receta.notas}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecetaDetalle;
