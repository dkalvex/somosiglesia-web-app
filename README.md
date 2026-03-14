# Somos Iglesia — Web App

Sitio web oficial de **Somos Iglesia Medellín**, una comunidad cristiana en Medellín, Colombia. Landing page moderna con modo oscuro/claro, animaciones y diseño responsive.

## Stack

- **Framework:** [Astro](https://astro.build/) v6
- **Estilos:** CSS nativo con custom properties (design tokens)
- **Tipografía:** Cormorant Garamond (serif) + Outfit (sans-serif)
- **Optimización de imágenes:** Sharp
- **Deploy:** GitHub Pages

## Secciones

| Sección | Descripción |
|---|---|
| `Navbar` | Navegación fija con toggle de tema y menú hamburguesa |
| `Hero` | Portada con imagen animada y CTAs |
| `Nosotros` | Quiénes somos, misión y comunidad |
| `Pastor` | Presentación del pastor |
| `Creemos` | Doctrinas y fe |
| `ADNSomos` | Valores y ADN de la iglesia |
| `Ministerios` | Jóvenes, Teens, Kids, Adoradores, Renace |
| `Servicios` | Horarios de servicios con enlace a Google Maps |
| `Sermones` | Grilla de mensajes con soporte para LIVE |
| `Pasos` | Cómo conectarse a la iglesia |
| `Renace` | Grupos en casa |
| `Donaciones` | Portal de diezmos y ofrendas |
| `Comunidad` | Feed de Instagram |
| `Footer` | Links, redes sociales y copyright |

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

> Requiere Node.js >= 22.12.0

## Estructura del proyecto

```
src/
├── pages/
│   └── index.astro          # Página principal
├── components/              # 14 componentes Astro
├── layouts/
│   └── Layout.astro         # Layout base con script de tema
├── styles/
│   └── global.css           # Design system y animaciones
└── assets/
    └── images/

public/
├── imgs/                    # Assets de imágenes
└── instagram/               # Feed de Instagram
```

## Tema oscuro / claro

El sitio tiene modo oscuro por defecto con prevención de FOUC. El tema se persiste en `localStorage` y se aplica mediante el atributo `data-theme` en el elemento `<html>`.

## Deploy

El sitio está configurado para GitHub Pages:

- **Site:** `https://dkalvex.github.io`
- **Base:** `/somosiglesia-web-app/`

El build se genera con `npm run build` y el output queda en `dist/`.
