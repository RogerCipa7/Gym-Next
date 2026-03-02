<div align="center">

```
██╗██████╗  ██████╗ ███╗   ██╗     ██████╗ ██████╗ ██████╗ ███████╗
██║██╔══██╗██╔═══██╗████╗  ██║    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║██████╔╝██║   ██║██╔██╗ ██║    ██║     ██║   ██║██████╔╝█████╗  
██║██╔══██╗██║   ██║██║╚██╗██║    ██║     ██║   ██║██╔══██╗██╔══╝  
██║██║  ██║╚██████╔╝██║ ╚████║    ╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
```

### 💀 GIMNASIO PREMIUM DE ALTO RENDIMIENTO — BOGOTÁ, COLOMBIA 🔥

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br/>

![Iron Core Preview](https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop)

<br/>

> **Landing page brutalista** para Iron Core — diseñada para transmitir disciplina, fuerza bruta y calidad premium.<br/>
> Sin estéticas corporativas. Sin plantillas genéricas. Solo potencia visual.

<br/>

### 🔴 SITIO EN VIVO

**[→ IRON CORE — Gimnasio Premium | Bogotá](https://portafoliorc.netlify.app/)**

[![Ver en vivo](https://img.shields.io/badge/🌐_IRON_CORE_—_Gimnasio_Premium_|_Bogotá-E8290B?style=for-the-badge)](https://portafoliorc.netlify.app/)

</div>

---

## ⚡ Stack Tecnológico

| Herramienta | Versión | Uso |
|---|---|---|
| **Next.js** | 16 | Framework principal — App Router + Turbopack |
| **Tailwind CSS** | v3 | Estilos utility-first, Mobile-First |
| **Framer Motion** | latest | Animaciones de scroll, transiciones, gestos |
| **Lucide React** | latest | Iconografía consistente y ligera |
| **TypeScript** | strict | Tipado estricto en toda la app |
| **Space Grotesk** | — | Tipografía de titulares (display) |
| **Inter** | — | Tipografía de lectura (body) |

---

## 🗂️ Arquitectura del Proyecto

El proyecto sigue un enfoque **Component-Driven** estricto. Cada sección visual vive aislada con su propia lógica y animaciones. Todo converge en `app/page.tsx`.

```
gym-saas/
│
├── 📁 app/
│   ├── globals.css          ← Reset CSS · Variables · Grain · Utilidades
│   ├── layout.tsx           ← SEO Metadata · Fuentes · Body Wrapper
│   └── page.tsx             ← Punto de ensamble — importa todas las secciones
│
├── 📁 components/
│   ├── 📁 navbar/
│   │   └── Navbar.tsx       ← Barra responsiva con Glassmorphism
│   ├── 📁 footer/
│   │   └── Footer.tsx       ← Links de contacto e info de autor
│   │
│   ├── 📁 sections/         ← ─── NÚCLEO VISUAL ───
│   │   ├── Hero.tsx         ← CTA inicial + Stroke-Text masivo
│   │   ├── Concept.tsx      ← Filosofía del gimnasio
│   │   ├── Facilities.tsx   ← Grid de imágenes de instalaciones
│   │   ├── Classes.tsx      ← Lista dinámica de entrenamientos
│   │   ├── Trainers.tsx     ← Cards de entrenadores
│   │   ├── Pricing.tsx      ← Cuadrícula de membresías
│   │   ├── FAQ.tsx          ← Acordeón desplegable
│   │   └── CTAFinal.tsx     ← Llamado a la acción visceral
│   │
│   └── 📁 ui/               ← Componentes genéricos reutilizables
│       ├── Button.tsx       ← Botón base con variantes
│       ├── Modal.tsx        ← Modal accesible y reutilizable
│       └── AnimatedSection  ← Wrapper Framer Motion (scroll trigger)
│
└── 📁 lib/
    ├── data.ts              ← Datos simulados: entrenadores, precios, clases
    └── types.ts             ← Interfaces TypeScript globales
```

---

## 🧠 Filosofía de Diseño: Brutalismo

> *"El diseño suave es para marcas débiles. Iron Core no negocia estética."*

Este proyecto ignora deliberadamente las convenciones del diseño SaaS moderno:

**`⬛ Sin redondeo`** — Esquinas afiladas en cada elemento. La geometría dura representa fuerza.

**`◑ Contraste extremo`** — Blanco stark `#FFFFFF` sobre negro puro `#0a0a0a`. Sin grises de compromiso.

**`▒ Ruido táctil (Grain)`** — SVG filter inyectado vía CSS raw en todo el layout. Imita pósters impresos y paredes de cemento.

**`AA Tipografía masiva`** — `tracking-tighter` excesivo, mayúsculas sostenidas, titulares que dominan la viewport.

---

## 🚀 Instalación y Desarrollo Local

```bash
# 1. Clona el repositorio
git clone https://github.com/rogercipa7/iron-core-gym

# 2. Instala dependencias
npm install

# 3. Levanta el servidor con Turbopack
npm run dev

# 4. Abre en tu navegador
# http://localhost:3000
```

---

## 📱 Responsividad — Mobile First

| Breakpoint | Dispositivo | Experiencia |
|---|---|---|
| `375px+` | 📱 Móvil | Menú hamburguesa animado · Tipografías apiladas · Sliders verticales |
| `768px+` | 📲 Tablet | Grids de 2 columnas · Layouts fluidos intermedios |
| `1280px+` | 🖥️ Desktop | Full-width inmersivo · Hover con revelación de color en grayscale · Imágenes flotantes |

---

## 👨‍💻 Autor

<div align="center">

### Roger Cipagauta
**Frontend Developer — Bogotá, Colombia** 🇨🇴

<br/>

[![Portafolio](https://img.shields.io/badge/🌐_Portafolio-E8290B?style=for-the-badge)](https://portafoliorc.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rogercipa7)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/roger-cipagauta-b1626b329/)

</div>

---

<div align="center">

```
IRON CORE GYM — BOGOTÁ, COLOMBIA
NO PAIN. NO GAIN. NO EXCUSES.
```

*Creado con 💀 por Roger Cipagauta*

</div>
