import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Asegúrate de usar el puerto correcto del backend
  headers: {
    'Content-Type': 'application/json',
    // Si necesitas token de autenticación, lo puedes agregar aquí
  }
});

export default api;