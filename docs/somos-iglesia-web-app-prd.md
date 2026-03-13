# PRD — Somos Iglesia Medellín: Landing Page

## Context

Somos Iglesia Medellín necesita una landing page profesional que represente la identidad de la iglesia. Se cuenta con un `index.html` base con diseño dark/elegante y dos documentos fuente con contenido. El objetivo es crear una landing page con textos resumidos y representativos (no el contenido completo de los documentos) usando **Astro** como framework para tener buena estructura y facilitar futuras integraciones con API.

**Decisiones tomadas:**
- Landing page con textos resumidos (no todo el contenido de los documentos)
- Nombre del pastor: **Daniel Hermida** (no Herrera)
- Framework: **Astro** (genera estático, buena estructura, fácil agregar API después)

---

## Identidad de marca

### Nombre y frase
- **Marca:** Somos Iglesia
- **Frase oficial:** "Jesús Nombre Sobre Todo Nombre" — Filipenses 2:9
- **Handle:** @somosiglesiamedellin
- **Saludo:** "Nos vemos en casa!"

### Paleta de colores

| Color | Hex | Uso sugerido |
|-------|-----|-------------|
| Negro | `#000000` | Fondo principal, textos sobre fondo claro |
| Marrón oscuro | `#321D08` | Acentos cálidos, bordes, elementos secundarios |
| Beige | `#6B6A61` | Textos secundarios, subtítulos, iconos |
| Blanco cálido | `#EAE6DD` | Fondo de secciones alternas, texto principal sobre fondo oscuro |
| Gris claro | `#CAC6C3` | Bordes sutiles, separadores, texto terciario |

**Notas de aplicación:**
- El diseño mantiene una estética dark/elegante usando `#000000` como fondo principal
- El blanco cálido `#EAE6DD` reemplaza el blanco puro para dar calidez
- El marrón oscuro `#321D08` se usa para acentos y hover states en lugar de dorados genéricos
- Las variables CSS deben reflejar esta paleta oficial en `global.css`

---

## Fase 1: Setup del proyecto Astro

Inicializar proyecto Astro y migrar el diseño actual.

**Estructura:**
```
somosiglesia-web-app/
├── astro.config.mjs
├── package.json
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Layout base (head, fonts, noise overlay)
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Sermones.astro
│   │   ├── Ministerios.astro
│   │   ├── Servicios.astro
│   │   ├── Nosotros.astro
│   │   ├── Pastor.astro
│   │   ├── Creemos.astro
│   │   ├── ADNSomos.astro
│   │   ├── Pasos.astro
│   │   ├── Renace.astro
│   │   ├── Donaciones.astro
│   │   ├── Comunidad.astro
│   │   └── Footer.astro
│   ├── styles/
│   │   └── global.css            ← CSS variables, reset, tipografía, componentes compartidos
│   ├── pages/
│   │   └── index.astro           ← Landing page (compone todos los componentes)
│   └── assets/
│       └── images/               ← Imágenes placeholder
└── public/
    └── favicon.svg
```

**Acciones:**
1. `npm create astro@latest` en el directorio del proyecto
2. Migrar CSS existente a `src/styles/global.css` (variables, tipografía, animaciones)
3. Crear `Layout.astro` con head, fonts, noise overlay
4. Migrar cada sección del HTML actual a su componente `.astro`

---

## Fase 2: Componentes y contenido

### 2.1 — Navbar (`Navbar.astro`)
Links: Nosotros, Ministerios, Sermones, Servicios, Creemos, Conéctate
CTA: "Visítanos"
- Incluir hamburger menu para mobile

### 2.2 — Hero (`Hero.astro`)
- Mantener diseño actual (background image, slow zoom, fade up)
- Eyebrow: "Bienvenido a"
- Título: "Somos Iglesia"
- Subtítulo: "Medellín"
- Versículo: "Venid en pos de mí, y os haré pescadores de hombres" — Mateo 4:19
- CTAs: "Visítanos" + "Conoce más"

### 2.3 — Sermones (`Sermones.astro`)
- Mantener diseño actual (grid de cards)
- Títulos de sermones placeholder
- Pastor: Daniel Hermida
- CTA: "Ver todos"
- Futuro: se conectará con API de YouTube/Vimeo

### 2.4 — Ministerios (`Ministerios.astro`)
Reemplaza la sección "Conéctate" actual. 5 cards con resumen:

| # | Ministerio | Resumen (1-2 líneas) |
|---|-----------|---------------------|
| 01 | Somos Jóvenes | Una generación conectando con Jesús. Viernes 7:00 PM |
| 02 | Somos Teens | Adolescentes caminando con Dios. 13-17 años |
| 03 | Somos Kids | Los niños aprenden sobre el amor de Jesús. 3-13 años |
| 04 | Somos Adoradores | A través de cada nota y letra, honramos a Dios |
| 05 | Renace | Grupos en casa. Conexión, estudio y oración semanal |

### 2.5 — Servicios/Horarios (`Servicios.astro`)
Mantener diseño actual + agregar:
- **Viernes** — Somos Jóvenes: 7:00 PM
- **Jueves** — ADN: 7:00 PM
- Miércoles y Domingos existentes se mantienen

### 2.6 — Quiénes Somos (`Nosotros.astro`)
Texto resumido representativo:
- Título: "¿Quiénes Somos?"
- Tagline: "Una misión a mar abierto"
- Texto (resumen): "Somos Iglesia, una misión a mar abierto, con el firme propósito de expandir el mensaje del evangelio. Creemos que cada persona es valiosa a los ojos de Dios y que el evangelio tiene el poder de transformar vidas y corazones."
- Segundo párrafo: "La iglesia no es un edificio, es el cuerpo de Cristo. Somos personas redimidas que buscan a Dios y se aman mutuamente."
- Versículo: Mateo 4:19
- CTA: "Nuestra historia"

### 2.7 — Pastor (`Pastor.astro`) — NUEVA
- Foto placeholder del Pastor Daniel Hermida
- Título: "Fundador de Somos Iglesia"
- Versículo: Salmos 37:5
- Bio resumida: "El pastor Daniel Hermida es un hombre de Dios cuya fe y perseverancia inspira y desafía. Cuando Dios le mostró la misión de Somos Iglesia, su corazón se llenó de fe cuando el Señor abrió las puertas para que se estableciera una iglesia de influencia."
- Diseño: layout 2 columnas (foto + texto), similar a "Quiénes Somos"

### 2.8 — En Qué Creemos (`Creemos.astro`)
9 cards en grid 3x3, cada una con número + título + 1 línea:

| # | Creencia | Resumen corto |
|---|---------|--------------|
| 01 | Jesús es Dios | Jesucristo es Dios eterno, poseedor de todas las perfecciones divinas |
| 02 | La Biblia | La Palabra inspirada de Dios, autoridad final en fe y conducta |
| 03 | El Bautismo | En el Nombre de Jesús, por inmersión, testimonio público de fe |
| 04 | La Salvación | Por gracia mediante la fe en Cristo, no por obras |
| 05 | El Espíritu Santo | Presencia activa que guía, fortalece y transforma vidas |
| 06 | La Familia | Institución divina establecida por Dios |
| 07 | La Iglesia | El cuerpo de Cristo, comunidad de creyentes |
| 08 | La Segunda Venida | Jesús viene por segunda vez |
| 09 | El Amor de Dios | Creemos en el gran amor de Dios y sus propósitos |

### 2.9 — ADN Somos (`ADNSomos.astro`) — NUEVA
Sección compacta con los 2 pilares de identidad:
- **Amor**: "Nos animamos unos a otros al amor y a las buenas obras" (Heb 10:24-25)
- **Unidad**: "Todo miembro debe permanecer en la palabra y promover la comunión como un solo cuerpo en Cristo" (Efe 4:3-10)
- Diseño: 2 cards lado a lado o sección con icono + texto

### 2.10 — Pasos (`Pasos.astro`) — NUEVA
Para nuevos visitantes:
- Título: "Tu nuevo comienzo"
- Texto resumido: "Estamos muy contentos de que hayas asistido. Tú y tu familia son muy importantes para nosotros. Tenemos un equipo que le encantaría conectar contigo."
- Formulario simple: Nombre, Email, Teléfono
- CTA: "Déjanos tus datos"

### 2.11 — Donaciones (`Donaciones.astro`) — NUEVA
- Título: "Somos una iglesia generosa"
- Versículo: 2 Corintios 9:8
- Texto: "Tu donación es un acto voluntario, una decisión de amor por la obra de Dios."
- Formas de donar: Cuenta bancaria (placeholder), QR (placeholder), presencial
- Diseño: limpio, con iconos para cada método

### 2.12 — Comunidad/Instagram (`Comunidad.astro`)
- Mantener diseño actual (@somosiglesiamedellin)
- Foto strip placeholder

### 2.13 — Footer (`Footer.astro`)
Actualizar con todos los links:
- Navegación: todas las secciones
- Ministerios: Somos Jóvenes, Somos Teens, Somos Kids, Somos Adoradores, Renace
- Redes sociales
- Versículo: Filipenses 2:9
- Copyright actualizado

---

## Fase 3: Estilos y responsive

**Archivo:** `src/styles/global.css`

- Migrar todo el CSS del `index.html` actual (variables, tipografía, componentes)
- Agregar estilos para secciones nuevas (Pastor, ADN, Pasos, Donaciones)
- Mobile responsive: hamburger menu, stack de columnas, ajuste de font sizes
- Aplicar paleta de marca oficial: negro `#000000`, marrón oscuro `#321D08`, beige `#6B6A61`, blanco cálido `#EAE6DD`, gris claro `#CAC6C3`
- Mantener: Cormorant Garamond + Outfit, noise overlay, animaciones fade-in

---

## Fase 4: JavaScript

**Archivo:** `src/scripts/main.js` o inline en componentes

- Intersection Observer para animaciones fade-in al scroll
- Hamburger menu toggle (mobile)
- Smooth scroll para nav links
- Live banner toggle (futuro)

---

## Orden de secciones en la landing page

1. Navbar
2. Hero
3. Quiénes Somos
4. Pastor
5. En Qué Creemos
6. ADN Somos
7. Ministerios
8. Servicios/Horarios
9. Sermones
10. Pasos
11. Renace (dentro de ministerios o separado)
12. Donaciones
13. Comunidad/Instagram
14. Footer

---

## Archivos a crear

| Archivo | Descripción |
|---------|-------------|
| `astro.config.mjs` | Configuración de Astro |
| `src/layouts/Layout.astro` | Layout base |
| `src/styles/global.css` | CSS migrado + nuevos estilos |
| `src/pages/index.astro` | Landing page |
| `src/components/*.astro` | 13 componentes (uno por sección) |

---

## Items pendientes del cliente

- [ ] Confirmar edades Somos Teens (13-17) y Somos Kids (3-13)
- [ ] Confirmar frecuencia Somos Teens (quincenal domingos)
- [ ] Datos bancarios para donaciones
- [ ] Código QR para donaciones
- [ ] Fotos reales (hero, pastor, ministerios, comunidad)
- [ ] Redes sociales (links reales de YouTube, Instagram)
- [ ] Versículo para Somos Adoradores
- [ ] Bio extendida del Pastor (si se quiere agregar más)

---

## Verificación

1. `npm run dev` — verificar que el sitio corre en localhost
2. Revisar cada sección visualmente en desktop y mobile
3. Verificar que la navegación scrollea correctamente a cada sección
4. Verificar textos contra los documentos fuente del cliente
5. `npm run build` — verificar que genera HTML estático sin errores
6. Verificar que no queden imágenes base64 (usar placeholders o archivos reales)
