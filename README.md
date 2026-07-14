# Frontend — Gestión de Clientes y Tickets

Interfaz web en **React + Vite** para la gestión de clientes y tickets de soporte. Consume la API REST del backend (FastAPI).

## Requisitos

- Node.js 20+
- El backend en ejecución (por defecto en `http://localhost:8000`)

## Instalación y ejecución

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

## Configuración

La URL del backend se toma de la variable de entorno `VITE_API_URL`. Si no se define, usa `http://localhost:8000` por defecto.

Para personalizarla, crea un archivo `.env` (hay un `.env.example` de referencia):

```
VITE_API_URL=http://localhost:8000
```

## Scripts disponibles

- `npm run dev` — servidor de desarrollo con recarga en caliente.
- `npm run build` — build de producción en `dist/`.
- `npm run preview` — sirve el build de producción localmente.
- `npm run lint` — ejecuta ESLint.

## Estructura del proyecto

```
src/
├── api/          # Cliente HTTP (axios) y llamadas a la API
├── components/   # Componentes reutilizables (listas y formularios)
├── pages/        # Vistas: clientes y tickets
├── App.jsx       # Layout y navegación
├── main.jsx      # Punto de entrada
└── index.css     # Estilos globales
```

## Funcionalidades

- Visualizar y registrar clientes.
- Visualizar y crear tickets.
- Actualizar el estado de un ticket (Pendiente, En progreso, Finalizado).

## Docker

El frontend se construye y sirve con nginx a través del `Dockerfile` incluido. Para levantar toda la solución (frontend, backend, PostgreSQL y MongoDB) se usa el `docker-compose.yml` de la raíz del proyecto:

```bash
docker compose up --build
```
