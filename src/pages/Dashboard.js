import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import { supabase } from '../supabaseClient';
import { Utensils, Dumbbell, TrendingUp, ChevronRight, Apple, Target } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
    const { user } = useAuth();
    const [recientes, setRecientes] = useState([]);
    const [stats, setStats] = useState({ recetas: 0, programas: 0, progresos: 0 });
    const nombre = user?.user_metadata?.nombre_completo || user?.email?.split('@')[0] || 'Usuario';

  useEffect(() => {
        const fetchData = async () => {
                const { data: recetasData } = await supabase
                  .from('recetas').select('id, nombre, categoria, calorias, imagen_url').limit(4).order('created_at', { ascending: false });
                if (recetasData) setRecientes(recetasData);

                const [{ count: rc }, { count: pc }, { count: pg }] = await Promise.all([
                          supabase.from('recetas').select('*', { count: 'exact', head: true }),
                          supabase.from('programas_fitness').select('*', { count: 'exact', head: true }),
                          supabase.from('registros_progreso').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
                        ]);
                setStats({ recetas: rc || 0, programas: pc || 0, progresos: pg || 0 });
        };
        if (user) fetchData();
  }, [user]);

  return (
        <div className="dashboard">
          <div className="container">
            <div className="dash-header">
              <div>
                <h1>Hola, <span className="text-accent">{nombre}</span></h1>
                <p>Bienvenido de vuelta a tu espacio fitness</p>
    </div>
    </div>

        <div className="dash-stats">
              <div className="stat-card">
                <div className="stat-icon" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316' }}><Utensils size={24} /></div>
            <div>
                <span className="stat-val">{stats.recetas}+</span>
              <span className="stat-lbl">Recetas</span>
  </div>
  </div>
          <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(27,45,110,0.3)', color: '#60A5FA' }}><Dumbbell size={24} /></div>
            <div>
                <span className="stat-val">{stats.programas}</span>
              <span className="stat-lbl">Programas</span>
  </div>
  </div>
          <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}><TrendingUp size={24} /></div>
            <div>
                <span className="stat-val">{stats.progresos}</span>
              <span className="stat-lbl">Registros</span>
  </div>
  </div>
          <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(168,85,247,0.15)', color: '#A855F7' }}><Target size={24} /></div>
            <div>
                <span className="stat-val">0</span>
              <span className="stat-lbl">Metas</span>
  </div>
  </div>
  </div>

        <div className="dash-grid">
            <div className="dash-section">
              <div className="section-title">
                <h2><Apple size={20} /> Recetas Recientes</h2>
              <Link to="/recetas" className="ver-mas">Ver todas <ChevronRight size={16} /></Link>
  </div>
            <div className="recetas-grid">
{recientes.map(r => (
                  <Link to={`/recetas/${r.id}`} key={r.id} className="receta-mini">
                    <div className="receta-mini-img">
{r.imagen_url ? <img src={r.imagen_url} alt={r.nombre} /> : <Utensils size={28} />}
  </div>
                  <div className="receta-mini-info">
                      <h4>{r.nombre}</h4>
                    <span>{r.categoria}</span>
{r.calorias && <span className="cals">{r.calorias} kcal</span>}
  </div>
  </Link>
              ))}
{recientes.length === 0 && <p className="empty-msg">Explorando recetas...</p>}
  </div>
  </div>

          <div className="dash-section">
              <div className="section-title">
                <h2><Target size={20} /> Acciones Rapidas</h2>
  </div>
             <div className="acciones">
                <Link to="/dietas" className="accion-card">
                  <Utensils size={22} />
                  <span>Ver mis Dietas</span>
                 <ChevronRight size={16} />
  </Link>
               <Link to="/programas" className="accion-card">
                  <Dumbbell size={22} />
                  <span>Programas Fitness</span>
                 <ChevronRight size={16} />
  </Link>
               <Link to="/progreso" className="accion-card">
                  <TrendingUp size={22} />
                  <span>Registrar Progreso</span>
                 <ChevronRight size={16} />
  </Link>
               <Link to="/recetas" className="accion-card">
                  <Apple size={22} />
                  <span>Explorar Recetas</span>
                 <ChevronRight size={16} />
  </Link>
  </div>
  </div>
  </div>
  </div>
  </div>
   );
}

export default Dashboard;
