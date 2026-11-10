# Portfolio web de Mirko Huck

Trabajo final de Diseño UX-UI 2026, Licenciatura en Sistemas de Información (FCyT, Sede Concepción del Uruguay). Es un portfolio personal de una sola página, con un caso de estudio propio.

## Enlaces
- **Sitio publicado:** https://portfoliomirkohuck.netlify.app/
- **Figma (https://www.figma.com/design/kHqoJUB97F30tn6bd36OZZ/Trabajo-Final-UX-UI?node-id=0-1&t=sdxaTiGE6B3peuRV-1):**
- **Repositorio:** https://github.com/Mirko-AI18/portfolio

## Qué incluye
- **Una sola página** con navegación por anclas: header, hero, métricas, proyectos, skills, experiencia y formación, sobre mí, contacto y footer.
- **Caso de estudio** de Cubrí Seguros en una página interna (`caso-cubri.html`).
- **Modo claro y oscuro:** sigue la preferencia del sistema y tiene un botón para cambiarlo.
- **Responsive**, pensado desde el celular y probado en 375, 768 y 1280 px, y con zoom hasta 400 %.

## Stack
- HTML5 y CSS3 puro, con las variables del design system en `:root`.
- JavaScript vanilla solo para el menú del celular y el cambio de tema.
- Tipografías Space Grotesk e Inter, de Google Fonts, con `font-display: swap`.
- Imágenes en WebP.
- Sin frameworks, plantillas ni constructores visuales.

## Cómo lo fui haciendo
1. **Usuario objetivo.** Definí una proto-persona (una reclutadora IT que revisa muchos portfolios en poco tiempo) y qué necesita encontrar en menos de 30 segundos: quién soy, si estoy disponible, evidencia de trabajo y cómo contactarme.
2. **Benchmark.** Analicé tres portfolios de referencia: el del docente, el de Brittany Chiang y el de Adham Dannaway, con lo que funciona y lo que no en cada uno.
3. **Concepto visual.** Tres palabras clave: *limpio, curioso, moderno*. Se traducen en fondo claro con mucho aire, un solo acento verde azulado y tipografía con carácter.
4. **Arquitectura de información.** Ordené las 9 secciones pensando en la reclutadora: los proyectos van antes que las skills.
5. **Design system.** Paleta con contrastes calculados (mínimo 4.5:1 en texto), escala tipográfica, espaciado en múltiplos de 4 y 8, y componentes: botón en 4 estados, tag, tarjeta de proyecto e ítem de timeline.
6. **Maquetación.** HTML semántico, un solo `h1`, link "Saltar al contenido", menú móvil con `aria-expanded` y `aria-controls`, foco visible, `prefers-reduced-motion` y metadatos con Open Graph.
7. **Modo oscuro.** Segunda paleta con los contrastes verificados y botón para alternar.


8.8. **Validación.** Test de usabilidad con 3 personas sobre el sitio, con estas tareas: encontrar el email, abrir el caso de estudio y cambiar a modo oscuro.

   | Persona | Tarea que le costó | Hallazgo | Cambio aplicado |
   |---|---|---|---|
   | 1 | (completar) | (completar) | (completar) |
   | 2 | (completar) | (completar) | (completar) |
   | 3 | (completar) | (completar) | (completar) |

## Proyectos que muestra
| Proyecto | Qué es | Mi parte |
|---|---|---|
| Cubrí Seguros | Flujo mobile de 4 pasos para contratar un seguro de celular | Implementación en HTML, CSS y JavaScript del diseño de la cátedra |
| OpenArt | App para comprar arte, con 14 pantallas | Trabajo grupal en Figma: flujos de usuario y login y registro |
| Coffea | Sitio estático de una cafetería | Maquetación a partir de un modelo en Figma |

## Estructura de archivos
```
index.html        página principal
caso-cubri.html   caso de estudio
styles.css        design system y estilos
theme.js          modo claro y oscuro
images/           imágenes en WebP
```



## Despliegue
El sitio se publica en Netlify desde este repositorio de GitHub:
1. Subir el repo a GitHub con commits incrementales.
2. En Netlify: Add new site, Import an existing project y elegir el repo.
3. Sin comando de build; la carpeta de publicación es la raíz.
4. Cada push a `main` despliega automáticamente.

## Recursos y créditos
- Tipografías: Google Fonts (Space Grotesk e Inter).
- No se usó ninguna plantilla: el diseño del portfolio es propio.
- Material de la cátedra: el diseño de Cubrí lo entregó la cátedra en Figma. Coffea se maquetó a partir de un modelo en Figma. OpenArt es un trabajo grupal.
- Las imágenes de los proyectos son capturas de esos trabajos.

## Uso de IA
Usé IA (Claude, de Anthropic) como asistente para:
- Generar y revisar el HTML, el CSS y el modo oscuro del sitio, y los textos.
- Ayudarme con la lógica de estado del flujo de Cubrí.

Cómo lo revisé: probé el sitio en 375, 768 y 1280 px, lo navegué solo con teclado, verifiqué los contrastes y corrí Lighthouse.

## Capturas
TODO: capturas del sitio y del reporte de Lighthouse (mobile).
