# JhinFitness - Documentación Técnica y Funcional

**Última actualización:** Abril 23, 2026  
**Versión:** 1.0  
**Estado:** Producción

---

## 1. DESCRIPCIÓN DEL PROYECTO

**JhinFitness** es una plataforma web de nutrición y fitness basada en el Método DKP (método keto del Dr. Bayter). Proporciona a los usuarios:

- Planes de alimentación keto estructurados en 4 fases (70 días)
- Acceso a recetas keto completas
- Programas de ejercicios adaptados
- Seguimiento de progreso personal
- Centro de descargas con documentos educativos
- Gestión de perfiles de usuario

**Audiencia objetivo:** Hombres y mujeres con sobrepeso en Latinoamérica (25-55 años) que buscan transformar su cuerpo mediante nutrición keto.

---

## 2. STACK TECNOLÓGICO

### Frontend
- **Framework:** React 18.2.0
- **Router:** React Router DOM 6.21.0
- **Estilos:** CSS custom con variables OKLCH
- **Tipografía:** Barlow Condensed + Figtree (Google Fonts)
- **Iconos:** Lucide React 0.307.0
- **Build tool:** Create React App 5.0.1
- **Hosting:** Vercel

### Backend & Bases de Datos
- **Autenticación:** Firebase Authentication
  - Método: Email/Password
  - Gestión de usuarios: Firebase User Management
  
- **Base de datos (Datos):** Supabase PostgreSQL
  - Tablas: recetas, dietas, programas, progreso, perfiles
  - Acceso: Supabase JS SDK 2.39.0

### DevOps & CI/CD
- **Control de versiones:** Git + GitHub
- **Hosting:** Vercel (auto-deploy en push a main)
- **Entorno de compilación:** Node.js + npm
- **Compiler flags:** cross-env 7.0.3

---

## 3. REQUERIMIENTOS FUNCIONALES

### 3.1 Autenticación y Gestión de Usuarios

**RF-001: Registro de Usuario**
- El usuario puede crear cuenta con email y contraseña
- Campo de nombre completo requerido
- Validación de contraseña mínimo 6 caracteres
- Confirmación de contraseña
- Almacenamiento en Firebase Authentication

**RF-002: Inicio de Sesión**
- Login con email y contraseña
- Sesión persistente (localStorage)
- Redirección automática a dashboard si está autenticado
- Mensaje de error si credenciales son incorrectas

**RF-003: Cierre de Sesión**
- Botón "Cerrar Sesión" en navbar y perfil
- Limpia autenticación de Firebase
- Redirección a landing page

**RF-004: Gestión de Perfil**
- Usuario puede actualizar: nombre, fecha nacimiento, género, altura, objetivo
- Email no es modificable
- Almacenamiento de datos en Supabase tabla "perfiles"
- Cambio de contraseña (próximamente)

### 3.2 Landing Page

**RF-005: Hero Section**
- Título impactante: "Transforma tu cuerpo en 70 días"
- Descripción del programa
- CTA diferenciado: "Ver mi Plan" (usuarios) vs "Comenzar Gratis" (público)
- Estadísticas: 70 días, 4 fases, recetas incluidas

**RF-006: Sección de Fases**
- Visualización de 4 fases: Ignite, Burn, Flow, Peak
- Tarjetas con imagen, descripción, duración
- Colores distintivos por fase
- Efecto hover con elevación y cambio de borde

**RF-007: Sección de Beneficios**
- 4 beneficios principales: Menús Diarios, Ejercicios, Seguimiento, Recetas
- Iconos representativos
- Descripción breve de cada beneficio

### 3.3 Centro de Descargas

**RF-008: Página de Descargas**
- Acceso en navbar → "Descargas"
- Documentos organizados por fase (Ignite, Burn, Flow, Peak)
- 3 tipos de documentos:
  - Alimentos Permitidos
  - Secretos de Éxito
  - Listas de Compras (semanales)

**RF-009: Modal de Visualización**
- Click en documento abre modal
- Visualización de contenido HTML extraído del PDF
- Tabla de alimentos con información nutricional
- Listas formateadas correctamente
- Botón de descarga

**RF-010: Descarga de Documentos**
- Usuario puede descargar documentos en formato HTML
- Nombre de archivo descriptivo
- Logo JhinFitness incluido en documento

### 3.4 Dietas y Menús

**RF-011: Acceso a Dietas (requiere login)**
- Usuario ve dietas disponibles por fase
- Selecciona fase y semana
- Visualiza menú diario (desayuno, almuerzo, cena)
- Información nutricional

**RF-012: Recetas**
- Biblioteca de recetas keto
- Búsqueda y filtro por fase
- Detalle de receta: ingredientes, instrucciones, información nutricional
- Link a receta completa

### 3.5 Programas de Ejercicios

**RF-013: Acceso a Programas**
- Rutinas adaptadas por nivel (principiante, intermedio, avanzado)
- Ejercicios complementarios para cada fase
- Instrucciones y recomendaciones

### 3.6 Seguimiento de Progreso

**RF-014: Dashboard de Progreso**
- Usuario registra medidas: peso, cintura, cadera
- Gráficos de progreso en tiempo real
- Historial de cambios
- Meta de transformación personal

### 3.7 Responsive Design

**RF-015: Adaptación Mobile**
- Layout responsivo en dispositivos móviles (320px - 1920px)
- Navegación mobile con hamburger menu
- Tablas adaptadas para mobile
- Touch-friendly buttons y inputs

---

## 4. REQUERIMIENTOS TÉCNICOS

### 4.1 Performance

**RT-001: Optimización de Carga**
- Landing page carga en < 3 segundos
- Imágenes optimizadas (WebP cuando sea posible)
- CSS minificado y bundled
- JavaScript lazy loading de componentes
- Cache en Vercel (default)

**RT-002: Web Vitals**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

### 4.2 Seguridad

**RT-003: Autenticación Segura**
- Contraseñas hasheadas en Firebase
- Tokens JWT para sesiones
- HTTPS forzado en Vercel
- Credenciales en variables de entorno (no en código)

**RT-004: Protección de Datos**
- Datos sensibles solo accesibles por usuario autenticado
- Supabase RLS (Row Level Security) en tablas
- No almacenar información bancaria
- GDPR compliance (soporte a solicitudes de datos)

**RT-005: Validación de Entrada**
- Validación cliente-side en formularios
- Validación servidor-side en APIs
- Prevención de XSS en contenido dinámico
- Sanitización de inputs

### 4.3 Base de Datos

**RT-006: Estructura Supabase**
```
Tabla: users (manejada por Firebase)
- uid (primary key)
- email
- displayName

Tabla: perfiles
- id (uuid, PK)
- user_id (FK a Firebase)
- nombre
- fecha_nacimiento
- genero
- altura
- objetivo
- created_at
- updated_at

Tabla: recetas
- id (uuid, PK)
- nombre
- descripcion
- fase (ignite, burn, flow, peak)
- categoria
- calorias
- proteina, grasa, carbohidratos
- tiempo_preparacion
- imagen_url
- ingredientes (json)
- pasos (json)

Tabla: dietas
- id (uuid, PK)
- fase
- semana
- dia
- desayuno_id (FK recetas)
- almuerzo_id (FK recetas)
- cena_id (FK recetas)

Tabla: programas
- id (uuid, PK)
- nombre
- fase
- nivel (principiante, intermedio, avanzado)
- descripcion
- ejercicios (json)
- duracion_minutos

Tabla: progreso
- id (uuid, PK)
- user_id (FK)
- fecha
- peso
- cintura
- cadera
- notas
```

**RT-007: Backups**
- Backups automáticos diarios en Supabase
- Retención de 30 días mínimo
- Plan: Backup semanal exportado a almacenamiento externo

### 4.4 Escalabilidad

**RT-008: Arquitectura**
- Frontend stateless (escalable horizontalmente)
- Vercel auto-scaling según tráfico
- Supabase soporta 100k+ usuarios concurrentes
- Firebase escalable por defecto

**RT-009: Caché**
- Browser cache: 1 año para assets estáticos
- Vercel Edge Cache: 60 minutos para páginas
- Redis: N/A (fase 1, agregable después)

### 4.5 Monitoreo

**RT-010: Logging y Monitoring**
- Vercel Analytics integrado
- Error tracking: Google Analytics
- Monitor uptime: Vercel built-in
- Alertas: Configurar en Vercel/Firebase console

---

## 5. ARQUITECTURA

### 5.1 Diagrama de Flujo

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENTE (React)                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Components: Navbar, Home, Dietas, Recetas, etc.      │   │
│  │ Context: AuthContext (usuario actual)                │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
            ┌───────────────┴────────────────┐
            ↓                                 ↓
    ┌──────────────────┐           ┌─────────────────┐
    │ Firebase Auth    │           │  Supabase       │
    │                  │           │  PostgreSQL     │
    │ • Signup         │           │                 │
    │ • Login          │           │ • Recetas       │
    │ • Sessions       │           │ • Dietas        │
    │ • Users          │           │ • Programas     │
    └──────────────────┘           │ • Progreso      │
                                   │ • Perfiles      │
                                   └─────────────────┘
```

### 5.2 Flujo de Autenticación

```
1. Usuario accede jhinfitness.vercel.app
2. App.js verifica onAuthStateChanged() en Firebase
3. Si no está autenticado → Muestra landing o login
4. Usuario hace login → Firebase valida credenciales
5. Firebase retorna session token
6. App guarda en localStorage y context
7. Usuario accede a rutas protegidas (PrivateRoute)
8. Componentes usan useAuth() para acceder a user
9. Logout → signOut() en Firebase + limpia localStorage
```

---

## 6. ESTRUCTURA DE CARPETAS

```
JhinFitness/
├── public/
│   ├── index.html
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── DescargarModal.js
│   │   └── DescargarModal.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── Dietas.js
│   │   ├── Recetas.js
│   │   ├── RecetaDetalle.js
│   │   ├── Programas.js
│   │   ├── Progreso.js
│   │   ├── Perfil.js
│   │   ├── Descargas.js
│   │   ├── Descargas.css
│   │   └── [varios CSS files]
│   ├── data/
│   │   └── descargas.json
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── firebaseConfig.js
│   └── supabaseClient.js
├── pdfs/
│   ├── alimentos-*.html
│   ├── secretos-*.html
│   ├── compras-*.html
│   └── print-base.css
├── .vercel/
│   └── project.json
├── vercel.json
├── package.json
├── package-lock.json
├── .gitignore
└── DOCUMENTACION_TECNICA.md
```

---

## 7. VARIABLES DE ENTORNO

### Vercel Production

```
REACT_APP_SUPABASE_URL=https://uwtipfujeikidhalwoid.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGc...
```

### Local Development (.env.local - NO COMMITEAR)

```
REACT_APP_SUPABASE_URL=https://uwtipfujeikidhalwoid.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGc...
```

### Firebase Configuration (en código - es pública)

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDjki3RUYCqcKE-85sTGDjvuK-nNGrVN9s",
  authDomain: "jhinfitness.firebaseapp.com",
  projectId: "jhinfitness",
  storageBucket: "jhinfitness.firebasestorage.app",
  messagingSenderId: "341753991950",
  appId: "1:341753991950:web:8f682929dd743e8d7b7d5f"
};
```

---

## 8. URLs Y CREDENCIALES

### URLs en Producción

| Componente | URL |
|-----------|-----|
| Landing | https://jhinfitness.vercel.app |
| GitHub | https://github.com/jhinvidalisuiza-ctrl/Jhinfitness |
| Vercel | https://vercel.com/jhinvidalisuiza-ctrls-projects/jhinfitness |
| Firebase Console | https://console.firebase.google.com/project/jhinfitness |
| Supabase Console | https://app.supabase.com/projects |

### Credenciales de Administrador

**Email para testing:** zuinglio23@gmail.com

**Nota:** Las contraseñas se configuran localmente. Para recetas y datos de prueba, ver Supabase Dashboard.

---

## 9. GUÍA DE DESARROLLO

### 9.1 Configuración Local

```bash
# Clonar repositorio
git clone https://github.com/jhinvidalisuiza-ctrl/Jhinfitness.git
cd Jhinfitness

# Instalar dependencias
npm install

# Crear .env.local con variables
cp .env.example .env.local
# Editar .env.local con credenciales reales

# Iniciar en desarrollo
npm start

# Build para producción
npm run build
```

### 9.2 Deploy en Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Conectar y deployar
vercel
# O push a GitHub (auto-deploy)
git push origin main
```

### 9.3 Migraciones de BD

Supabase migrations:
```sql
-- Crear tabla de perfiles (si no existe)
CREATE TABLE IF NOT EXISTS perfiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR NOT NULL,
  nombre VARCHAR(255),
  fecha_nacimiento DATE,
  genero VARCHAR(50),
  altura NUMERIC,
  objetivo VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 10. TESTING

### 10.1 Test Plan

**Usuario No Autenticado:**
- [ ] Accede a landing page
- [ ] Ve sección descargas (sin contenido privado)
- [ ] Hace click en "Comenzar Gratis"
- [ ] Accede a formulario de registro
- [ ] Se registra con email y contraseña

**Usuario Autenticado:**
- [ ] Login exitoso
- [ ] Ve dashboard con sus datos
- [ ] Accede a dietas, recetas, programas
- [ ] Puede descargar documentos
- [ ] Puede actualizar perfil
- [ ] Puede ver progreso
- [ ] Logout funcionalmente

**Responsive:**
- [ ] Mobile (320px): Todo funciona
- [ ] Tablet (768px): Layouts adaptados
- [ ] Desktop (1920px): Layouts completos

---

## 11. ROADMAP Y PRÓXIMAS FASES

### Fase 2 (Próximas semanas)
- [ ] Integración de pagos (Stripe)
- [ ] Email confirmación en registro
- [ ] Recuperación de contraseña
- [ ] Dashboard mejorado con gráficos
- [ ] Notificaciones push

### Fase 3 (Mes 2)
- [ ] App móvil (React Native)
- [ ] Sincronización con wearables
- [ ] Comunidad / foro
- [ ] Integración con Whatsapp

### Fase 4 (Mes 3)
- [ ] Videoconferencias con nutricionistas
- [ ] IA para recomendaciones personalizadas
- [ ] Marketplace de productos keto
- [ ] Integración con apps de fitness

---

## 12. SOPORTE Y MANTENIMIENTO

### Responsables

| Rol | Contacto | Responsabilidad |
|-----|----------|-----------------|
| Product Owner | zuinglio23@gmail.com | Requerimientos, visión |
| Frontend | [Equipo] | React, UI/UX, responsive |
| Backend | [Equipo] | APIs, bases de datos |
| DevOps | [Equipo] | Vercel, Firebase, Supabase |

### SLA Esperado

- **Uptime:** 99.9%
- **Tiempo de respuesta:** < 200ms (p95)
- **Disponibilidad:** 24/7

### Tickets y Soporte

- GitHub Issues para bugs
- GitHub Discussions para features
- Email para urgencias críticas

---

## 13. CONCLUSIÓN

JhinFitness es una plataforma robusta, escalable y user-friendly para transformación corporal mediante nutrición keto. La arquitectura permite crecimiento futuro con mínimas modificaciones.

**Versión actual:** 1.0 - Producción  
**Última actualización:** Abril 23, 2026  
**Siguiente review:** Mayo 2026

---

**Documento preparado por:** Claude Code  
**Para:** Equipo de Desarrollo JhinFitness  
**Confidencialidad:** Interno
