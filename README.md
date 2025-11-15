# Demo Vite Deploy

Proyecto de demostración de una aplicación React con Vite configurada para desplegarse en GitHub Pages.

## 📋 Descripción

Este proyecto es una aplicación web simple construida con React y Vite que demuestra cómo configurar y desplegar una aplicación React en GitHub Pages. Incluye un contador interactivo y una interfaz moderna con soporte para temas claro y oscuro.

## 🚀 Características

- ⚡ **Vite** - Build tool rápida y moderna
- ⚛️ **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- 🎨 **CSS Moderno** - Estilos con soporte para modo claro/oscuro
- 📦 **GitHub Pages** - Configurado para despliegue automático
- 🔥 **Hot Module Replacement (HMR)** - Recarga rápida durante el desarrollo

## 🛠️ Tecnologías

- React 18.2.0
- Vite 4.3.9
- ESLint para linting
- GitHub Pages para hosting

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/migbertweb/demo-vitedeploy.git
cd demo-vitedeploy
```

2. Instala las dependencias:
```bash
npm install
```

## 🎯 Uso

### Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build

Para crear una versión de producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Preview

Para previsualizar la build de producción:

```bash
npm run preview
```

### Linting

Para ejecutar el linter:

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
demo-vitedeploy/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── App.css          # Estilos del componente App
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales
├── index.html           # Archivo HTML principal
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias y scripts del proyecto
```

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages. La configuración base está definida en `vite.config.js`:

```javascript
base: 'https://migbertweb.github.io/demo-vitedeploy'
```

Para desplegar:

1. Haz push de tus cambios a la rama `main`
2. Ejecuta `npm run build`
3. Configura GitHub Pages para usar la carpeta `dist/` o usa GitHub Actions para automatizar el despliegue

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Migbertweb**

- GitHub: [@migbertweb](https://github.com/migbertweb)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.

## 📄 Nota sobre la Licencia

Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener derivados como código libre, especialmente para fines educativos.

