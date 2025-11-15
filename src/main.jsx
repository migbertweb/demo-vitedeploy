/**
 * Archivo: main.jsx
 * 
 * Descripción: Punto de entrada principal de la aplicación React. Renderiza el
 * componente App dentro del elemento root del DOM, envolviéndolo en StrictMode
 * para detectar problemas potenciales durante el desarrollo.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/demo-vitedeploy
 * 
 * Licencia: MIT License
 * 
 * Uso: Inicializa la aplicación React y monta el componente principal en el DOM.
 * Importa los estilos globales y configura React en modo estricto.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
