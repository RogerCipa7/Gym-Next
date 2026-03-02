# IRON CORE GYM 💀🔥

Landing page brutalista para **Iron Core**, un gimnasio premium de alto rendimiento ubicado en Bogotá, Colombia. 
Diseñado con un enfoque B2C (Directo al consumidor) que transmite disciplina, fuerza bruta y calidad, alejándose por completo de las estéticas corporativas o plantillas genéricas.

![Iron Core Preview](https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop)

## 🏗️ Stack Tecnológico

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Tipografía:** *Space Grotesk* (Titulares enormes) & *Inter* (Lectura)

## ✨ Arquitectura de la Página (Component Componentization)

El proyecto utiliza un enfoque **Component-Driven** estricto, donde cada parte visual del sitio vive aislada con su propia lógica y animaciones, lo que la hace altamente escalable. Todo converge en `app/page.tsx`.

### 📂 Estructura de Carpetas

```text
c:\Users\roger\gym-saas\
├── app/
│   ├── globals.css         # ResetCSS, Variables, Animaciones puras, Clases Utilitarias
│   ├── layout.tsx          # Metadata global (SEO), Inyección de Fuentes, Body Wrapper
│   └── page.tsx            # Punto de ensamble principal (Importa todas las secciones en orden)
├── components/
│   ├── footer/
│   │   └── Footer.tsx      # Sección inferior con Links de Autor e Info de Contacto
│   ├── navbar/
│   │   └── Navbar.tsx      # Barra de navegación principal responsiva (Glassmorphism)
│   ├── sections/           # [NÚCLEO VISUAL]
│   │   ├── Hero.tsx        # CTA Inicial, Tipografía Masiva (Stroke-Text)
│   │   ├── Concept.tsx     # Filosofía del Gimnasio
│   │   ├── Facilities.tsx  # Grid de Imágenes de Instalaciones
│   │   ├── Classes.tsx     # Lista Dinámica de Entrenamientos
│   │   ├── Trainers.tsx    # Cards de Entrenadores
│   │   ├── Pricing.tsx     # Cuadrícula de Membresías
│   │   ├── FAQ.tsx         # Acordeón Desplegable
│   │   └── CTAFinal.tsx    # Llamado a la acción visceral antes del footer
│   └── ui/                 # Componentes genéricos y wrappers
│       ├── Button.tsx           # Botón base con variantes
│       ├── Modal.tsx            # Componente de modal reutilizable y accesible
│       └── AnimatedSection.tsx  # Wrapper de Framer Motion para animaciones al hacer Scroll
├── lib/
│   ├── data.ts             # Capa de datos simulada (Lista de entrenadores, precios, etc)
│   └── types.ts            # Interfaces TypeScript que dictan la forma de los datos
```

## 🧠 Filosofía de Diseño: Brutalismo

El diseño de la aplicación ignora las convenciones típicas del diseño "suave" SaaS:
- **No redondeo excesivo:** Se prefieren las esquinas afiladas para representar "Fuerza".
- **Contraste Extremo:** Texto Blanco Stark `#FFFFFF` o gris neutro contra puros negros `#0a0a0a`.
- **Ruido Táctil (Grain):** Se le inyectó CSS raw `grain` (vía SVG filter) en el layout para imitar pósters impresos o paredes texturizadas, agregando peso visual y crudo.
- **Tipografía Masiva:** Uso excesivo de `tracking-tighter` (kerning apretado) en titulares y mayúsculas sostenidas en navegación.

## 🚀 Instalación y Desarrollo Local

1. Clona este repositorio o descarga el código.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Levanta el servidor de desarrollo (con Turbopack):
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:3000` en tu navegador.

## 📱 Responsividad

La página está construida con el enfoque *Mobile-First* gracias a Tailwind CSS.
- **Móvil (375px+):** Menú de hamburguesa animado, tipografías apiladas y legibles, sliders convertidos a apilamiento vertical.
- **Tablets (768px+):** Grids optimizados de 2 columnas.
- **Desktop (1280px+):** Experiencia Full-width inmersiva con animaciones de hover complejas (Revelación de color en escala de grises, imágenes flotantes absolutas que siguen el ratón o reaccionan al focus).

## 👨‍💻 Autor

Creado por Roger Cipagauta
- [Portafolio Web](https://portafoliorc.netlify.app/)
- [GitHub](https://github.com/rogercipa7)
- [LinkedIn](https://www.linkedin.com/in/roger-cipagauta-b1626b329/)
