# 🟦 GIFs App – Buscador de GIFs 
React + TypeScript + Vite

Aplicación hecha en React + TypeScript que permite buscar GIFs en tiempo real, guardar búsquedas recientes y visualizar resultados de forma dinámica.
Cuenta con una caché interna optimizada y un input con debounce para evitar llamadas innecesarias.


# 🚀 Tecnologías utilizadas
  1. React 18
  2. TypeScript
  3. Custom Hooks (useGifs)
  4. useState / useEffect / useRef
  5. Fetch API
  6. CSS simple
  7. Netlify (deploy)

# 📌 Características principales
✔️ Búsqueda dinámica de GIFs con debounce (700ms)
✔️ Historial de las últimas 8 búsquedas
✔️ Caché interna usando useRef para evitar peticiones repetidas
✔️ Completamente tipado
✔️ Interfaz sencilla, modular y fácil de extender

# 🧩 Custom Hook: useGifs
Encapsula toda la lógica de la aplicación:
- Peticiones a la API
- Manejo de términos previos
- Selección rápida desde el historial
- Cacheo en memoria usando useRef
- Manejo de resultados

# 🧠 Debounce en SearchBar
