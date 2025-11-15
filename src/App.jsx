/**
 * Archivo: App.jsx
 * 
 * Descripción: Componente principal de la aplicación React. Contiene la interfaz
 * de usuario con logos de Vite y React, un contador interactivo que demuestra el
 * uso de hooks de React (useState), y enlaces a las documentaciones oficiales.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/demo-vitedeploy
 * 
 * Licencia: MIT License
 * 
 * Uso: Componente funcional que renderiza la UI principal de la aplicación,
 * incluyendo un contador que se incrementa al hacer clic en el botón, demostrando
 * el estado reactivo de React y el Hot Module Replacement (HMR) durante el desarrollo.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
