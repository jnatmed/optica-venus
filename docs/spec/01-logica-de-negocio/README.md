# Lógica de negocio

## Visitante

1. Conoce la propuesta de la óptica desde la portada.
2. Filtra modelos por Todos, Recetados o Sol y abre un detalle ilustrativo.
3. Consulta al negocio a través del Instagram real suministrado.
4. Lee novedades y ve publicaciones de Instagram directamente en la grilla.
5. Abre publicaciones y videos en modal dentro de la web.

## Gestión de contenido de demostración

El botón Gestionar novedades abre un formulario con tipo, título, descripción y enlace. Permite crear, editar, ocultar, mostrar y eliminar entradas. Las nuevas aparecen primero; editar no altera el orden ni la visibilidad. Título obligatorio, máximo 100 caracteres; descripción hasta 500. Una novedad simple puede no tener enlace. Instagram exige una URL HTTPS a un post, reel o TV; no acepta perfiles. YouTube admite watch, shorts, embed y youtu.be con identificador válido. No se acepta HTML arbitrario.

Los cambios afectan la misma página y sobreviven a una recarga en el mismo navegador mediante localStorage. No afectan otros dispositivos. El panel es público a propósito dentro de la demo; no proporciona seguridad de administrador.

## Contenido externo

Instagram se muestra mediante iframe de la publicación elegida, en tarjeta y modal. YouTube muestra miniatura y reproductor en modal. Las plataformas controlan la disponibilidad: publicaciones privadas, restricciones de incrustación, eliminación o bloqueos de red pueden impedir mostrarlas. El enlace original permanece como alternativa. No se inventan posts o videos de Venus: los espacios iniciales indican que falta agregar contenido real.

## Datos pendientes del cliente

Número de WhatsApp, dirección, horarios, fotos autorizadas, productos disponibles, precios si corresponde y enlaces a publicaciones/videos. Mientras falten no se simulan pedidos, ventas ni información geográfica.
