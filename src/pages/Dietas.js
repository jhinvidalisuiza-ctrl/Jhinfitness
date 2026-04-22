import React, { useState } from 'react';
import './Dashboard.css';

const FASE1_DATA = {
      fase: 'Fase 1',
      nombre: 'KetoBayter',
      descripcion: 'Vamos a desintoxicar nuestro organismo y a romper la adicción.',
      semanas: [
          { semana: 1, dias: [1,2,3,4,5,6,7] },
          { semana: 2, dias: [8,9,10,11,12,13,14] },
          { semana: 3, dias: [15,16,17,18,19,20,21] }
            ],
      menus: {
              1: { carbs: '17.52', desayuno: 'Omelet Semi Primaveral', almuerzo: 'Green Salmon', cena: 'Huevitos Rellenos', snacks: ['Aceitunas (1g Carbs)', 'Pinchos de cherry (0g Carbs)'] },
              2: { carbs: '17.59', desayuno: 'Espárragos Pinchados', almuerzo: 'Pasta de Zuquini', cena: 'Champiñones aquesados', snacks: ['Pinchos de cherry (0g Carbs)', 'Chicharrones (0g Carbs)'] },
              3: { carbs: '16.90', desayuno: 'Serrano Sándwich', almuerzo: 'Pollo colorido', cena: 'Pollo a la Mexicana', snacks: ['Pepinito picoso (0g Carbs)', 'Pinchos de cherry (0g Carbs)'] },
              4: { carbs: '13.88', desayuno: 'Hongo Portobello Relleno', almuerzo: 'Trucha al gusto', cena: 'Huevo al gusto', snacks: ['Emparedado de queso (1g Carbs)', 'Pinchos de cherry (0g Carbs)'] },
              5: { carbs: '15.22', desayuno: 'Huevipinchos', almuerzo: 'Alitas voladoras', cena: 'Keto cookies', snacks: ['Papitas (0g Carbs)', 'Chicharrones (0g Carbs)'] },
              6: { carbs: '20.59', desayuno: 'Tortilla De Albahaca', almuerzo: 'Pizza', cena: 'Champiñones horneados', snacks: ['Pinchos de cherry (0g Carbs)', 'Chicharrones (0g Carbs)'] },
              7: { carbs: '18.35', desayuno: 'Tortilla Cheddar', almuerzo: 'Merluza al ajillo con camarones', cena: 'Taco de Huevo', snacks: ['Aceitunas (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              8: { carbs: '19.48', desayuno: 'Huevos cuajados', almuerzo: 'Pollo a la broaster con salsa de albahaca', cena: 'Pastelito de chicharron', snacks: ['Pepinos laminitas (0g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              9: { carbs: '18.59', desayuno: 'Rolls de salmon', almuerzo: 'Pollo salteado con verduras', cena: 'Huevos enramados', snacks: ['Aceitunas (1g Carbs)', 'Chicharrones (0g Carbs)'] },
              10: { carbs: '17.23', desayuno: 'Tortilla de aceitunas', almuerzo: 'Brócoli con lomo', cena: 'Mini bowl de champiñones', snacks: ['Pinchos de cherry (0g Carbs)', 'Cafe aquesado (1g Carbs)'] },
              11: { carbs: '17.45', desayuno: 'Espárragos al horno', almuerzo: 'Ensalada pollo ketobayter', cena: 'Canasticas chicharronudas', snacks: ['Café (0g Carbs)', 'Galletas con café (2g Carbs)'] },
              12: { carbs: '15.69', desayuno: 'Cueritos al limon', almuerzo: 'Atún napolesko', cena: 'Pastelito keto', snacks: ['Aceitunas (1g Carbs)', 'Pepinos laminitas (0g Carbs)'] },
              13: { carbs: '17.36', desayuno: 'Omelet Semi Primaveral', almuerzo: 'Tarta de aguacate y salmón', cena: 'Camarones apanados', snacks: ['Queso asado (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              14: { carbs: '17.54', desayuno: 'Omelette de queso', almuerzo: 'Ensalada de pollo y aguacate', cena: 'Brocheta de lomo al carbón', snacks: ['Aceitunas (1g Carbs)', 'Chicharrones (0g Carbs)'] },
              15: { carbs: '26.65', desayuno: 'Portobello toci-huevo', almuerzo: 'Higado en bistec', cena: 'Empanadas sorpresa', snacks: ['Jamón serrano con queso (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              16: { carbs: '17.26', desayuno: 'Huevos en salsita', almuerzo: 'Trucha con salteado de verduras', cena: 'Pizza de queso', snacks: ['Pinchos de cherry (0g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              17: { carbs: '17.45', desayuno: 'Aguacate salmonesco', almuerzo: 'Ropa vieja con pure de coliflor', cena: 'Huevitos revoltosos', snacks: ['Aceitunas (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              18: { carbs: '17.71', desayuno: 'Deditos de queso', almuerzo: 'Pernil con salsa de cilantro', cena: 'Huevos estrellados con tocineta', snacks: ['Aceitunas (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              19: { carbs: '15.39', desayuno: 'Caldo de costilla con huevo', almuerzo: 'Pizza de coliflor', cena: 'Huevo al gusto', snacks: ['Galletas con café (2g Carbs)', 'Café (0g Carbs)'] },
              20: { carbs: '25.86', desayuno: 'Champiñones rellenos', almuerzo: 'Albondigas gratinadas', cena: 'Galleta de queso y tocineta', snacks: ['Aceitunas (1g Carbs)', 'Sandwich de huevo (2g Carbs)'] },
              21: { carbs: '18.08', desayuno: 'Cueritos al limon', almuerzo: 'Pollo salteado con verduras', cena: 'Huevos enramados', snacks: ['Aceitunas (1g Carbs)', 'Chicharrones (0g Carbs)'] }
      }
};

function Dietas() {
      const [semanaActiva, setSemanaActiva] = useState(1);
      const [diaActivo, setDiaActivo] = useState(1);

  const menu = FASE1_DATA.menus[diaActivo];
      const diasSemana = FASE1_DATA.semanas.find(s => s.semana === semanaActiva)?.dias || [];

  return (
          <div className="page-container">
            <div className="container">
  {/* Header Fase 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
  }}>
          <span style={{
                background: '#e63946',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '0.75rem'
}}>FASE 1</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
            Keto<span style={{ color: '#e63946' }}>Bayter</span>
                </h1>
          <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
{FASE1_DATA.descripcion}
</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.doctorbayter.com/files/pdf/secretos-fase-1-dkp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                                  background: '#e63946',
                                  color: 'white',
                                  padding: '10px 20px',
                                  borderRadius: '25px',
                                  textDecoration: 'none',
                                  fontWeight: '700',
                                  fontSize: '0.9rem'
              }}
            >
              📄 Secretos Fase 1
                  </a>
            <a
              href="https://www.doctorbayter.com/files/pdf/lista-de-alimentos-fase-1-dkp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                                  background: 'rgba(255,255,255,0.15)',
                                  color: 'white',
                                  padding: '10px 20px',
                                  borderRadius: '25px',
                                  textDecoration: 'none',
                                  fontWeight: '700',
                                  fontSize: '0.9rem',
                                  border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              🥗 Alimentos Permitidos
                  </a>
                  </div>
                  </div>

{/* Semanas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
{FASE1_DATA.semanas.map(s => (
                <button
                                      key={s.semana}
              onClick={() => { setSemanaActiva(s.semana); setDiaActivo(s.dias[0]); }}
              style={{
                                  padding: '1rem',
                                  borderRadius: '12px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  fontWeight: '700',
                                  fontSize: '1rem',
                                  background: semanaActiva === s.semana ? '#e63946' : '#f1f5f9',
                                  color: semanaActiva === s.semana ? 'white' : '#475569',
                                  transition: 'all 0.2s',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '0.5rem'
              }}
            >
              📅 Semana {s.semana}
</button>
          ))}
</div>

{/* Descarga de semana */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <a
            href={`https://www.doctorbayter.com/files/pdf/lista-de-alimentos-fase-1-${semanaActiva}-dkp.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                              display: 'inline-block',
                              background: '#0f3460',
                              color: 'white',
                              padding: '8px 20px',
                              borderRadius: '20px',
                              textDecoration: 'none',
                              fontSize: '0.85rem',
                              fontWeight: '600'
            }}
          >
            📥 Descargar lista de alimentos Semana {semanaActiva}
</a>
    </div>

{/* Días de la semana */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
{diasSemana.map(dia => (
                <button
                              key={dia}
               onClick={() => setDiaActivo(dia)}
               style={{
                                   padding: '8px 16px',
                                   borderRadius: '8px',
                                   border: 'none',
                                   cursor: 'pointer',
                                   fontWeight: '600',
                                   fontSize: '0.85rem',
                                   background: diaActivo === dia ? '#e63946' : '#f1f5f9',
                                   color: diaActivo === dia ? 'white' : '#475569',
                                   transition: 'all 0.2s'
               }}
            >
              Día {dia}
</button>
          ))}
</div>

{/* Menú del día */}
{menu && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>
                Menú <span style={{ color: '#e63946' }}>Día {diaActivo}</span>
                    </h2>
              <div style={{
                                    background: '#fef3c7',
                                    border: '1px solid #fbbf24',
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#92400e'
                }}>
                🔥 {menu.carbs}g carbohidratos/día
                    </div>
                    </div>

{/* Comidas principales */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
{[
    { tipo: 'Desayuno', icono: '🌅', receta: menu.desayuno, color: '#fff7ed', border: '#fed7aa' },
    { tipo: 'Almuerzo', icono: '☀️', receta: menu.almuerzo, color: '#f0fdf4', border: '#bbf7d0' },
    { tipo: 'Cena', icono: '🌙', receta: menu.cena, color: '#eff6ff', border: '#bfdbfe' }
                  ].map(({ tipo, icono, receta, color, border }) => (
                                      <div key={tipo} style={{
                                          background: color,
                                                            border: `1px solid ${border}`,
                                                            borderRadius: '14px',
                                                            padding: '1.5rem',
                                                            transition: 'transform 0.2s'
                                      }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icono}</div>
                                          <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
                        {tipo}
</p>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
{receta}
</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '0.25rem 0 0 0' }}>1 persona</p>
    </div>
              ))}
                  </div>

{/* Snacks */}
            <div style={{
                              background: '#fafafa',
                              border: '1px solid #e5e7eb',
                              borderRadius: '14px',
                              padding: '1.5rem',
                              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', color: '#374151' }}>
                🍿 Snacks del Día {diaActivo} (opcional)
                    </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
{menu.snacks.map((snack, i) => (
                      <div key={i} style={{
                                     background: 'white',
                                              border: '1px solid #e5e7eb',
                                              borderRadius: '10px',
                                              padding: '10px 16px',
                                              fontSize: '0.9rem',
                                              fontWeight: '500',
                                              color: '#374151'
                      }}>
                 {snack}
                 </div>
                                 ))}
</div>
    </div>

{/* Nota */}
            <div style={{
                              background: '#eff6ff',
                              border: '1px solid #bfdbfe',
                              borderRadius: '12px',
                              padding: '1.25rem',
                              fontSize: '0.9rem',
                              color: '#1e40af'
            }}>
              <strong>💡 Nota:</strong> Se deja un rango de consumos de carbohidratos porque existen algunos alimentos que tienen carbohidratos adicionales. Lo ideal es que iniciando la DKP sigas los menús, pero si decides hacer algún cambio conserva las cantidades.
                </div>
                </div>
        )}
</div>
            </div>
  );
}

export default Dietas;
