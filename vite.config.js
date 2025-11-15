/**
 * Archivo: vite.config.js
 * 
 * Descripción: Archivo de configuración de Vite para el proyecto. Define los plugins
 * utilizados (React) y la configuración base para el despliegue en GitHub Pages.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/demo-vitedeploy
 * 
 * Licencia: MIT License
 * 
 * Uso: Configura el entorno de desarrollo y build de Vite, estableciendo la ruta
 * base para el despliegue en GitHub Pages y habilitando el plugin de React.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://migbertweb.github.io/demo-vitedeploy',
})
