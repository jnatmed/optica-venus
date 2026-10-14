# Operación

Desde la carpeta Optica ejecutar `npm ci`, luego `npm run dev`. Desarrollo escucha en 127.0.0.1:5173, salvo que el puerto esté ocupado. `npm run build` genera `dist`; `npm run preview` permite revisar la compilación. La demo está preparada para hosting estático, sin secretos ni variables obligatorias.

Dependencias externas: Google Fonts (con fallback), miniaturas y reproductor de YouTube, iframe de Instagram. Todos requieren conectividad; el sitio principal y las ilustraciones SVG no dependen de imágenes descargadas de redes.

No publicar el panel de demostración como administrador de un negocio real. No introducir datos personales, recetas ni datos de clientes. Los cambios locales pueden perderse al limpiar datos del navegador. Para recuperar la selección inicial, eliminar solo la clave `optica-demo-news-v1` desde herramientas del navegador.
