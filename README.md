# Portfolio web de Mirko Huck

Trabajo final de Diseño UX-UI 2026, Licenciatura en Sistemas de Información (FCyT, Sede Concepción del Uruguay). Portfolio personal de una sola página, con un caso de estudio propio.

## Enlaces
- **Sitio publicado:** https://portfoliomirkohuck.netlify.app/
- **Figma:** [Ver archivo en Figma](https://www.figma.com/design/kHqoJUB97F30tn6bd36OZZ/Trabajo-Final-UX-UI?node-id=0-1&t=sdxaTiGE6B3peuRV-1)
- **Repositorio:** https://github.com/Mirko-AI18/portfolio

## Qué incluye
- **Una sola página** con navegación por anclas (header, hero, métricas, proyectos, skills, experiencia, sobre mí, contacto y footer).
- **Caso de estudio** propio de Cubrí Seguros en una página interna (`caso-cubri.html`).
- **Modo claro y oscuro:** detecta la preferencia del sistema y cuenta con un botón conmutador manual.
- **Responsive**, diseñado de forma mobile-first y probado en 375, 768 y 1280 px.

## Stack
- HTML5 y CSS3 puro, estructurado con variables en `:root`.
- JavaScript vanilla para el menú móvil y el cambio de tema (Dark/Light).
- Tipografías Space Grotesk e Inter (Google Fonts) con `font-display: swap`.
- Recursos gráficos optimizados en formato WebP.
- Sin frameworks de JavaScript ni constructores visuales.

## Proceso de diseño y desarrollo
1. **Usuario objetivo:** Definición de proto-persona (reclutadora IT) enfocada en encontrar información clave en menos de 30 segundos.
2. **Benchmark:** Análisis de tres portfolios de referencia (Prof. Ernesto Ledesma, Brittany Chiang y Manu Arora).
3. **Concepto visual:** Tres palabras clave: *limpio, preciso, moderno*, volcadas en una interfaz minimalista con tipografía clara y acento Teal.
4. **Arquitectura de información:** Organización estructurada de las 9 secciones obligatorias.
5. **Design system:** Paleta cromática dual (modo oscuro y claro) con contrastes validados (WCAG AA), escala tipográfica y componentes base.
6. **Maquetado:** HTML semántico, jerarquía estricta de encabezados, accesibilidad por teclado y metadatos Open Graph completos.
7. **Validación (Test de usabilidad):** Pruebas cualitativas con 3 usuarios sobre el sitio desplegado:

| Persona | Tarea asignada | Hallazgo / Observación | Cambio aplicado |
|---|---|---|---|
| Joel | Probar y alternar el modo oscuro / claro | Encontró el conmutador de inmediato en la barra superior; los contrastes se adaptan correctamente. | Ninguno (fluido y funcional). |
| Pablo | Abrir e inspeccionar un caso de uso | Navegó directo a la sección de proyectos y localizó los enlaces al código y demo en vivo. | Ninguno (estructura clara). |
| Tadeo | Localizar las tecnologías y contacto | Utilizó el scroll continuo, ubicando el stack tecnológico y las vías de contacto sin fricción. | Ninguno (curva de aprendizaje nula). |

## Proyectos mostrados
| Proyecto | Descripción | Participación |
|---|---|---|
| Cubrí Seguros | Flujo mobile de 4 pasos para contratación de seguros | Maquetación frontend (HTML/CSS/JS) a partir del modelo de la cátedra |
| OpenArt | Aplicación de compra de arte (14 pantallas) | Trabajo grupal en Figma (flujos de usuario, login y registro) |
| Coffea | Sitio estático para cafetería | Maquetación basada en prototipo de Figma |

## Estructura de archivos
```text
index.html         Página principal
caso-cubri.html    Caso de estudio dedicado
styles.css         Design system y estilos generales
theme.js           Lógica del conmutador de tema (Dark/Light)
images/            Recursos gráficos en formato WebP