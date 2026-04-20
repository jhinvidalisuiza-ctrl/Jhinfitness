import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Dietas from './pages/Dietas';
import Recetas from './pages/Recetas';
import RecetaDetalle from './pages/RecetaDetalle';
import Programas from './pages/Programas';
import Progreso from './pages/Progreso';
import Perfil from './pages/Perfil';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Auth Context
export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <div className="loading-screen"><div className="spinner"></div></div>;
    return user ? children : <Navigate to="/login" />;
}

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
                setUser(session?.user ?? null);
                setLoading(false);
        });

                const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                        setUser(session?.user ?? null);
                });

                return () => subscription.unsubscribe();
  }, []);

  return (
        <AuthContext.Provider value={{ user, loading }}>
      <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/dietas" element={<PrivateRoute><Dietas /></PrivateRoute>} />
                <Route path="/recetas" element={<PrivateRoute><Recetas /></PrivateRoute>} />
                <Route path="/recetas/:id" element={<PrivateRoute><RecetaDetalle /></PrivateRoute>} />
                <Route path="/programas" element={<PrivateRoute><Programas /></PrivateRoute>} />
                <Route path="/progreso" element={<PrivateRoute><Progreso /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
  </Routes>
  </main>
          <Footer />
  </div>
  </Router>
  </AuthContext.Provider>
  );
}

export default App;
