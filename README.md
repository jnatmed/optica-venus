# Óptica · Mockup

React + Vite. Diseño adaptable con prioridad móvil, catálogo filtrable y panel de novedades.

## Ejecutar

```sh
npm install
npm run dev
```

## Compilar

```sh
npm run build
```

La carpeta `dist` se puede publicar como sitio estático. Node instalado: 22.11; se usa Vite 6.4 por compatibilidad.

## Demostración

El botón «Gestionar novedades» permite crear, editar, ocultar, mostrar y eliminar novedades. Los datos se guardan en localStorage de este navegador, sin autenticación ni base de datos. No es un panel listo para producción. Para edición compartida se necesita una base de datos y acceso protegido.

YouTube: miniatura y reproducción dentro de un modal. Instagram: publicaciones o reels incrustados directamente en la grilla y disponibles también en modal. Instagram puede impedir mostrar contenido privado, eliminado o cuyo autor desactivó las incrustaciones; se ofrece enlace original como alternativa. No se importa automáticamente el feed.

La especificación está en [docs/spec](docs/spec/README.md); toma la documentación de sistema_tutorial como referencia orientativa.

Productos, ilustraciones y textos son de demostración, no inventario real. No se inventaron horarios, dirección, testimonios, precios ni un teléfono de WhatsApp. El contacto dirige al Instagram de JPNatMed; para habilitar WhatsApp hace falta el teléfono real. Fuentes remotas de Google Fonts, con fallback local. El contenido externo de Instagram/YouTube requiere conexión.

## Identidad y contacto de la demo

Plantilla genérica llamada Óptica, desarrollada por JPNatMed. No representa ni promociona un local real. Todos los enlaces de contacto apuntan a https://www.instagram.com/jpnatmed/. La clave local `optica-demo-news-v1` evita reutilizar las novedades guardadas en la versión anterior.

Esta modificación está realizada en la copia local; para actualizar un sitio publicado se necesita desplegar esta versión.
