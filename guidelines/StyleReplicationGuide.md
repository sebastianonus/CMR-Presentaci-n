# Guia de estilo para replicar este modelo en otro proyecto

## Objetivo

Este documento define las reglas visuales, estructurales y narrativas para reproducir el estilo de esta presentacion en otro proyecto sin depender del contenido actual. La meta es conservar la misma sensacion: ejecutiva, premium, clara y orientada a decision.

## ADN visual del modelo

- Estetica corporativa de alto contraste.
- Lenguaje visual sobrio, tecnologico y confiable.
- Composicion centrada en impacto, no en decoracion.
- Sensacion general: "propuesta ejecutiva con respaldo tecnico".
- El diseño debe transmitir control, orden, precision y valor economico.

## Identidad cromatica

### Colores base

- Azul corporativo principal: `#000935`
- Turquesa de acento: `#00C9CE`
- Blanco: `#FFFFFF`

### Uso de color

- El azul oscuro debe dominar fondos principales, portadas y bloques de cierre.
- El turquesa se usa para resaltar: metricas, lineas divisorias, iconos clave, CTA y estados activos.
- El blanco se reserva para texto de alto contraste y superficies claras.
- Evitar introducir colores nuevos como protagonistas. Si hacen falta tonos adicionales, deben ser neutros o transparencias del sistema actual.
- Evitar bloques grandes con relleno turquesa solido cuando parecen botones; preferir superficies de vidrio/transparencia.

### Jerarquia de contraste

- Fondo oscuro + texto blanco: para mensajes de autoridad.
- Fondo claro + texto azul oscuro: para lectura, analisis y detalle.
- Turquesa sobre azul oscuro: para cifras, subrayados y puntos de foco.
- Nunca usar turquesa como color de texto largo en parrafos extensos.

## Tipografia

### Familias

- Titulares: `Raleway`
- Texto de soporte y cuerpo: `REM`

### Regla de uso

- `Raleway` se usa en titulares, cierres, palabras de marca y mensajes hero.
- `REM` se usa en subtitulos, parrafos, etiquetas, captions y microcopy.
- No mezclar otras familias salvo por una necesidad tecnica justificada.

### Pesos recomendados

- Titular principal: `700` a `800`
- Titular secundario: `600`
- Cuerpo principal: `400`
- Cuerpo destacado o labels: `500`

### Escala visual recomendada

- Hero principal: `56px` a `72px`
- Titulo de slide: `40px` a `56px`
- Subtitulo: `24px` a `32px`
- Cifra protagonista: `44px` a `64px`
- Cuerpo: `16px` a `18px`
- Texto auxiliar: `13px` a `15px`

### Reglas tipograficas

- Los titulares deben ser cortos, de una idea principal.
- Los subtitulos pueden expandir contexto, pero no competir con el titular.
- El cuerpo no debe convertirse en bloque denso; dividir en grupos de lectura cortos.
- Las cifras deben tener mas peso visual que cualquier parrafo contiguo.

## Arquitectura de layout

## Formato general

- El layout base debe sentirse como una "lamina" o "card" grande dentro del viewport.
- La presentacion trabaja con contenedores principales de bordes redondeados y aire amplio.
- El contenido se centra vertical y horizontalmente cuando la slide es de portada o cierre.
- En slides analiticas, el contenido se organiza por zonas: cabecera, cuerpo, bloque de cierre o resumen.

### Zona segura

- Margen superior util: `24px` a `40px`
- Margen lateral util: `40px` a `64px`
- Margen inferior protegido: minimo `96px`

### Bordes y radios

- Contenedor principal: `24px` de radio aproximado
- Tarjetas internas: `16px` a `24px`
- Controles flotantes: forma capsula o circular

### Sombra y profundidad

- Usar sombras suaves pero visibles en contenedores principales.
- Combinar sombra con `backdrop blur` cuando haya superficies translúcidas.
- La profundidad debe ser elegante, no dramática.

## Superficies y materiales

### Tipos de superficie

- Fondo pleno oscuro con degradado sutil.
- Tarjetas claras para contenido de lectura.
- Tarjetas translúcidas sobre fondos oscuros para bloques de enfasis.
- Badges, chips o numeradores en superficie semitransparente.

### Reglas de materialidad

- Priorizar transparencias leves (`10%` a `20%`) sobre fondos oscuros.
- Los bordes deben ser finos y discretos, no gruesos.
- El desenfoque debe apoyar separacion visual, no generar ruido.

### Sistema glass recomendado

- Alternar dos familias de superficie para mejorar jerarquia sin ruido cromatico:
- `glass-surface-neutral`: base blanca translÃºcida suave para bloques informativos.
- `glass-surface-accent`: base turquesa translÃºcida con borde sutil para bloques de enfasis.
- Para iconos, chips y numeradores usar `glass-chip-neutral` en lugar de fondos turquesa solidos.
- Regla operativa: no encadenar varios bloques de la misma familia si compiten en la misma zona visual; alternar neutro/acento.

## Sistema de composicion

### Estructura de slide recomendada

1. Cabecera con titulo.
2. Subrayado o barra de acento en turquesa.
3. Subtexto de contexto, si aplica.
4. Cuerpo principal en 1, 2 o 3 bloques.
5. Bloque final de sintesis, CTA o dato concluyente.

### Reglas de reticula

- Portadas y cierres: una sola columna, centrada.
- Slides ejecutivas: `2` columnas maximo si hay comparativa.
- Slides de metricas: `3` tarjetas maximo en una fila principal.
- Si hay un bloque resumen inferior, debe ocupar todo el ancho o dominar la jerarquia.

### Densidad

- Nunca saturar con mas de una idea fuerte por bloque.
- Si una slide tiene muchas cifras, agrupar y resumir antes de agregar mas tarjetas.
- Si el contenido no entra con aire suficiente, dividir en otra slide o reducir la cantidad de elementos.

## Componentes visuales a replicar

### Portada

- Fondo azul oscuro con degradado sutil.
- Titulo principal muy grande, centrado y en blanco.
- Barra horizontal turquesa debajo del titulo.
- Subtitulo de una o dos lineas.
- Frase de valor final en turquesa, con tono aspiracional.

### Cabecera de slide

- Titulo en azul oscuro si la superficie es clara.
- Linea corta de acento en turquesa justo debajo.
- Texto contextual breve en gris neutro o color atenuado.

### Tarjetas de metricas

- Fondo con leve degradado desde turquesa muy suave hacia transparente.
- Borde fino en turquesa semitransparente.
- Icono lineal en turquesa.
- Titulo corto.
- Cifra principal grande.
- Caption explicativo pequeno y de bajo contraste.

### Bloque de enfasis

- Fondo azul oscuro o superficie translúcida oscura.
- Titulo o promesa central en blanco.
- Cifras o palabras clave en turquesa.
- Puede contener 2 subtarjetas internas de resumen.

### Cierre

- Composicion centrada.
- Icono principal arriba.
- Titulo contundente.
- Caja central con mensaje de accion.
- Marca o nombre final en gran formato.
- Tagline breve al final.

### Navegacion flotante

- Debe vivir fuera del area critica de contenido.
- Forma capsula con blur.
- Indicadores circulares, con el activo alargado en turquesa.
- Botones de avance/retroceso con feedback claro.

## Iconografia e imagen

### Iconos

- Estilo lineal, limpio y consistente.
- Grosor uniforme.
- Usar iconos con significado funcional, no decorativo.
- El color por defecto del icono clave es turquesa.

### Imagenes y recursos graficos

- Si hay imagen, debe apoyar credibilidad o contexto.
- Nunca deformar logos, isotipos o capturas.
- Preferir `contain` antes que recorte agresivo.
- Mantener aire alrededor de marcas y elementos sensibles.

### Fondo dinamico fotografico

- El fondo dinamico debe mantener legibilidad de texto por encima de variedad visual.
- Balance actual recomendado:
- Imagen activa del carrusel: opacidad `0.4`.
- Capa de filtro oscura global: `#000935` al `60%` (`/60`).
- Rotacion sugerida: `10s` por imagen con transicion suave de `2s`.
- Excluir de la rotacion logos de marca (ONUS, CMR, Green Path); usar solo imagenes de contexto.

## Motion y transiciones

### Principio general

- La animacion debe comunicar continuidad y sofisticacion, no entretenimiento.

### Reglas

- Transiciones de slide: desplazamiento horizontal corto con fundido.
- Duracion orientativa: `0.3s` a `0.5s`.
- Animaciones de entrada en portada y cierre: escala suave + fade.
- No acumular varias animaciones complejas a la vez.
- El movimiento siempre debe ser sutil y rapido.

## Tono narrativo y contenido

### Voz

- Ejecutiva
- Directa
- Orientada a impacto
- Basada en evidencia

### Reglas de redaccion

- Hablar en terminos de negocio, riesgo, ahorro, control y resultado.
- Evitar tecnicismos si no aumentan claridad.
- Convertir capacidades en beneficios medibles.
- Usar frases cortas y titulares con verbo o consecuencia clara.

### Verbos recomendados

- Reducir
- Proteger
- Optimizar
- Asegurar
- Escalar
- Medir
- Activar

## Responsive y adaptacion

### Prioridades

- El contenido critico debe seguir siendo legible en `1366x768`.
- En resoluciones menores, reducir densidad antes que reducir contraste.
- La navegacion y contadores nunca deben tapar informacion principal.

### Reglas

- En mobile, convertir filas en pilas verticales.
- Mantener CTA y controles en una zona flotante separada.
- En laptop, no superar `2` columnas para contenido de negocio.
- En desktop amplio, solo usar `3` columnas si cada tarjeta conserva aire real.

## Reglas de replicacion para otro proyecto

### Lo que debe mantenerse

- La relacion cromatica azul oscuro + turquesa.
- La dupla tipografica `Raleway` + `REM`.
- El uso de contenedores redondeados con aire generoso.
- El sistema de jerarquia: titular fuerte, acento corto, contenido resumido, cierre con mensaje.
- El uso de una cifra o promesa central como foco de cada pantalla.

### Lo que puede cambiar

- El contenido textual y sectorial.
- Los iconos concretos.
- Las imagenes.
- El numero de slides o secciones.
- El grado de formalidad del copy, siempre que siga siendo ejecutivo.

### Lo que no debe cambiar

- La sobriedad del sistema visual.
- La consistencia de espaciados.
- El protagonismo del contraste.
- El criterio de "pocas ideas, bien jerarquizadas".

## Checklist de validacion

- Cada slide comunica una sola idea principal.
- El titular se entiende en menos de 3 segundos.
- Existe un punto focal claro: cifra, promesa o decision.
- El turquesa solo resalta, no invade.
- Ningun bloque toca bordes sin aire.
- Ningun control flotante tapa contenido.
- La slide sigue viendose solida en `1366x768`.
- El cierre y la portada comparten el mismo nivel de impacto visual.

## Formula rapida para construir nuevas slides

Usar esta secuencia como plantilla:

1. Definir una idea principal.
2. Escribir un titular corto.
3. Añadir una barra de acento turquesa.
4. Organizar el contenido en un maximo de `3` bloques.
5. Dar a una cifra o promesa el mayor peso visual.
6. Cerrar con una implicacion, CTA o consecuencia de negocio.

## Referencia operativa

Si se replica este modelo en otro proyecto, la validacion final debe hacerse preguntando:

"Esta pieza parece una presentacion ejecutiva premium, clara y medible, o parece una slide generica con branding?"

Si parece generica, normalmente el problema estara en uno de estos puntos:

- exceso de texto
- falta de contraste
- demasiados colores
- ausencia de un foco visual
- mala jerarquia entre titulo, cifra y apoyo
