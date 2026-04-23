/* ============================================================
   JHINFITNESS — AUTH SYSTEM
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyDjki3RUYCqcKE-85sTGDjvuK-nNGrVN9s",
  authDomain: "jhinfitness.firebaseapp.com",
  projectId: "jhinfitness",
  storageBucket: "jhinfitness.firebasestorage.app",
  messagingSenderId: "341753991950",
  appId: "1:341753991950:web:8f682929dd743e8d7b7d5f",
  measurementId: "G-RCDMT9LG2H"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const AUTH = {
  SESSION_KEY: 'jhinfitness_session',

  async login(username, password) {
    try {
      // Login via Firebase
      const cred = await firebase.auth().signInWithEmailAndPassword(username.trim().toLowerCase(), password);
      
      // Obtener datos del usuario desde Firestore
      const userDoc = await db.collection('users').doc(cred.user.uid).get();
      let userData = { role: 'user', name: 'Cliente' };
      if (userDoc.exists) {
        userData = userDoc.data();
      }

      // Guardar sesión local para mantener UI rápida
      const sessionData = {
        uid: cred.user.uid,
        email: cred.user.email,
        name: userData.name || 'Cliente',
        lastName: userData.lastName || '',
        role: userData.role || 'user'
      };

      // Si es la cuenta master o se especifica rol especial
      if (cred.user.email === 'admin@jhinfitness.com') {
        sessionData.role = 'admin';
        sessionData.name = 'Administrador Principal';
      }

      localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
      return { ok: true, user: sessionData };
    } catch (error) {
      console.error(error);
      let errMsg = 'Usuario o contraseña incorrectos.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') errMsg = 'Credenciales incorrectas.';
      if (error.code === 'auth/too-many-requests') errMsg = 'Demasiados intentos. Intenta más tarde.';
      return { ok: false, error: errMsg };
    }
  },

  logout() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem(this.SESSION_KEY);
      window.location.href = 'login.html';
    });
  },

  getSession() {
    try {
      const s = localStorage.getItem(this.SESSION_KEY);
      return s ? JSON.parse(s) : null;
    } catch { return null; }
  },

  requireAuth() {
    const session = this.getSession();
    if (!session) {
      window.location.href = 'login.html';
      return null;
    }
    return session;
  }
};
