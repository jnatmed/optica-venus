# Arquitectura y datos

## Componentes

- Node.js ejecuta herramientas de desarrollo y build; no hay backend Node en la demo.
- React renderiza la interfaz y gestiona estado.
- Vite 6.4 compila y sirve desarrollo; compatible con Node 22.11 instalado. Lockfile incluido.
- `src/main.jsx`: punto de entrada.
- `src/App.jsx`: pantallas, formularios, filtros y modales.
- `src/domains/content.js`: contenido inicial, persistencia y validación de enlaces.
- `src/components/Frame.jsx`: ilustraciones SVG de productos, con IDs únicos.
- `src/styles.css`: estilos con base móvil y breakpoints de 600 y 1000 px.

## Datos

Clave de localStorage: `optica-demo-news-v1`. Cada entrada contiene `id`, `title`, `description`, `type` (Novedad, Instagram, YouTube), `url`, `active`. Los productos de demostración están definidos en código. Fallas de lectura restauran contenido inicial; fallas de escritura muestran un aviso dentro del panel.

## Accesibilidad y validación

Campos etiquetados, botones con nombre accesible, foco visible, Escape para cerrar, foco atrapado en modal y restauración al cerrar. Modales limitados a la altura de pantalla. Respeto de reducción de movimiento. Textos ingresados renderizados por React, sin HTML crudo. URLs de incrustación construidas desde proveedores permitidos. Enlaces externos con `noreferrer`.

## Evolución a producción

Separar contenido público del panel con autenticación real, persistencia compartida y autorización en servidor. Agregar imágenes, datos comerciales y contacto verificados. Seleccionar proveedor y presupuesto con el cliente. localStorage no reemplaza una base de datos ni un control de acceso.
