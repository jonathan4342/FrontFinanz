import axios from 'axios'

// Instancia central de axios. La URL del backend se toma de una variable
// de entorno (Vite); centralizarla evita repetir la base en cada llamada.
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export default http
