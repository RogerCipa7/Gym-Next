<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>IRON CORE GYM — README</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;700&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --black: #080808;
    --white: #f0ece4;
    --red: #e8290b;
    --red-dim: #9e1c07;
    --gray: #1a1a1a;
    --gray-mid: #2e2e2e;
    --gray-light: #555;
    --tan: #b5a48a;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--white);
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    position: relative;
  }

  /* GRAIN OVERLAY */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 100;
    opacity: 0.35;
  }

  /* ──────────────────────────────────────────────
     HEADER / HERO
  ────────────────────────────────────────────── */
  header {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 clamp(24px, 5vw, 80px) 64px;
    overflow: hidden;
    border-bottom: 1px solid var(--gray-mid);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
    filter: grayscale(1) brightness(0.22);
    transform: scale(1.02);
    animation: slowzoom 20s ease-in-out infinite alternate;
  }

  @keyframes slowzoom {
    from { transform: scale(1.02); }
    to   { transform: scale(1.08); }
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.4) 60%, transparent 100%);
  }

  .hero-stripe {
    position: absolute;
    top: 0;
    left: clamp(24px, 5vw, 80px);
    width: 3px;
    height: 100%;
    background: var(--red);
    opacity: 0.7;
  }

  .badge-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 1px solid var(--gray-mid);
    color: var(--gray-light);
  }

  .badge.live {
    border-color: var(--red);
    color: var(--red);
    position: relative;
  }

  .badge.live::before {
    content: '';
    display: inline-block;
    width: 6px; height: 6px;
    background: var(--red);
    border-radius: 50%;
    margin-right: 8px;
    animation: pulse 1.5s ease-in-out infinite;
    vertical-align: middle;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  .hero-title {
    position: relative;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 14vw, 200px);
    line-height: 0.88;
    letter-spacing: -0.01em;
    color: var(--white);
    text-transform: uppercase;
  }

  .hero-title .stroke {
    -webkit-text-stroke: 2px var(--white);
    color: transparent;
  }

  .hero-title .red { color: var(--red); }

  .hero-sub {
    position: relative;
    margin-top: 24px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 300;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--tan);
  }

  .hero-meta {
    position: relative;
    margin-top: 40px;
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .meta-item { display: flex; flex-direction: column; gap: 4px; }
  .meta-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray-light);
  }
  .meta-value {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
  }

  /* CTA link to web */
  .cta-web {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
    padding: 14px 32px;
    background: var(--red);
    color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.2s;
  }
  .cta-web:hover { background: #c7240a; }
  .cta-web svg { width: 14px; height: 14px; }

  /* ──────────────────────────────────────────────
     LAYOUT / CONTENT
  ────────────────────────────────────────────── */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px);
  }

  section {
    padding: 96px 0;
    border-bottom: 1px solid var(--gray-mid);
  }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(40px, 6vw, 80px);
    line-height: 1;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 48px;
  }

  /* ──────────────────────────────────────────────
     OVERVIEW CARDS
  ────────────────────────────────────────────── */
  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px;
    background: var(--gray-mid);
    border: 1px solid var(--gray-mid);
  }

  .overview-card {
    background: var(--black);
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: background 0.2s;
  }

  .overview-card:hover { background: var(--gray); }

  .card-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 52px;
    line-height: 1;
    color: var(--red);
  }

  .card-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--tan);
  }

  .card-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--gray-light);
  }

  /* ──────────────────────────────────────────────
     STACK
  ────────────────────────────────────────────── */
  .stack-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2px;
  }

  .stack-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    background: var(--gray);
    border-left: 3px solid transparent;
    transition: border-color 0.2s, background 0.2s;
    text-decoration: none;
  }

  .stack-item:hover {
    border-left-color: var(--red);
    background: #111;
  }

  .stack-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-mid);
    flex-shrink: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: var(--red);
  }

  .stack-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--white);
  }

  .stack-detail {
    font-size: 12px;
    color: var(--gray-light);
    margin-top: 2px;
  }

  /* ──────────────────────────────────────────────
     FILE TREE
  ────────────────────────────────────────────── */
  .tree-wrapper {
    background: #0c0c0c;
    border: 1px solid var(--gray-mid);
    padding: 40px;
    position: relative;
    overflow-x: auto;
  }

  .tree-wrapper::before {
    content: '// ARQUITECTURA';
    position: absolute;
    top: 16px;
    right: 20px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--gray-mid);
  }

  .tree {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 2;
    color: #888;
    white-space: pre;
  }

  .tree .folder { color: var(--tan); }
  .tree .file   { color: #6e8a6e; }
  .tree .comment { color: var(--red-dim); font-size: 11px; }
  .tree .root { color: var(--white); font-weight: 700; }

  /* ──────────────────────────────────────────────
     DESIGN PHILOSOPHY
  ────────────────────────────────────────────── */
  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1px;
    background: var(--gray-mid);
  }

  .philosophy-item {
    background: var(--black);
    padding: 36px 32px;
  }

  .philosophy-item:hover { background: var(--gray); }

  .phi-icon {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: var(--red);
    line-height: 1;
    margin-bottom: 16px;
  }

  .phi-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 12px;
  }

  .phi-body {
    font-size: 14px;
    line-height: 1.7;
    color: var(--gray-light);
  }

  /* ──────────────────────────────────────────────
     INSTALL
  ────────────────────────────────────────────── */
  .install-steps {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .install-step {
    display: grid;
    grid-template-columns: 64px 1fr;
    align-items: start;
    gap: 0;
    background: var(--gray);
  }

  .step-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    color: var(--red);
    padding: 20px 0 20px 24px;
    line-height: 1;
  }

  .step-content {
    padding: 20px 28px;
    border-left: 1px solid var(--gray-mid);
  }

  .step-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--tan);
    margin-bottom: 8px;
  }

  .code-block {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    background: #111;
    border: 1px solid var(--gray-mid);
    padding: 8px 16px;
    color: #7ec897;
    position: relative;
  }

  /* ──────────────────────────────────────────────
     RESPONSIVE
  ────────────────────────────────────────────── */
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--gray-mid);
  }

  .resp-item {
    background: var(--black);
    padding: 32px 24px;
  }

  .resp-breakpoint {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
    color: var(--red);
    line-height: 1;
    margin-bottom: 8px;
  }

  .resp-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--tan);
    margin-bottom: 12px;
  }

  .resp-desc {
    font-size: 13px;
    line-height: 1.7;
    color: var(--gray-light);
  }

  /* ──────────────────────────────────────────────
     AUTHOR
  ────────────────────────────────────────────── */
  .author-block {
    display: flex;
    gap: 48px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .author-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(48px, 8vw, 100px);
    line-height: 0.9;
    color: var(--white);
    letter-spacing: -0.01em;
  }

  .author-role {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--tan);
    margin-top: 12px;
  }

  .author-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: auto;
    padding-top: 8px;
  }

  .author-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--gray-light);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }

  .author-link:hover { color: var(--white); }

  .author-link .link-icon {
    width: 28px; height: 28px;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: var(--red);
    flex-shrink: 0;
    transition: background 0.2s;
  }

  .author-link:hover .link-icon { background: var(--gray-mid); }

  /* ──────────────────────────────────────────────
     FOOTER BAR
  ────────────────────────────────────────────── */
  .footer-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px clamp(24px, 5vw, 80px);
    border-top: 1px solid var(--gray-mid);
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.05em;
    color: var(--white);
  }

  .footer-copy {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--gray-light);
    letter-spacing: 0.1em;
  }

  /* DIVIDER */
  .divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 64px;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: var(--gray-mid);
  }

  .divider-mark {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--gray-light);
    letter-spacing: 0.2em;
  }

  /* SCROLL FADE IN */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 700px) {
    .responsive-grid { grid-template-columns: 1fr; }
    .cta-web { margin-left: 0; margin-top: 24px; }
    .hero-meta { flex-direction: column; gap: 24px; }
    .author-block { flex-direction: column; gap: 24px; }
  }
</style>
</head>
<body>

<!-- ═══ HERO ═══ -->
<header>
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-stripe"></div>

  <div class="badge-row">
    <span class="badge live">Live</span>
    <span class="badge">Next.js 16</span>
    <span class="badge">Tailwind v3</span>
    <span class="badge">Framer Motion</span>
    <span class="badge">TypeScript</span>
    <span class="badge">Bogotá, CO</span>
  </div>

  <h1 class="hero-title">
    IRON<br>
    <span class="stroke">CORE</span><span class="red">.</span>
  </h1>

  <p class="hero-sub">Gimnasio Premium de Alto Rendimiento — Bogotá, Colombia</p>

  <div class="hero-meta">
    <div class="meta-item">
      <span class="meta-label">Tipo</span>
      <span class="meta-value">Landing Page B2C</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Estilo</span>
      <span class="meta-value">Brutalismo</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Autor</span>
      <span class="meta-value">Roger Cipagauta</span>
    </div>
    <a class="cta-web" href="https://portafoliorc.netlify.app/" target="_blank">
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
      Ver Sitio Web
    </a>
  </div>
</header>

<!-- ═══ OVERVIEW ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 00 — Overview</p>
    <h2 class="section-title fade-up">El Proyecto</h2>

    <div class="overview-grid fade-up">
      <div class="overview-card">
        <div class="card-num">01</div>
        <div class="card-title">Misión</div>
        <div class="card-desc">Landing page brutalista que transmite disciplina, fuerza bruta y calidad premium. Sin estéticas corporativas ni plantillas genéricas.</div>
      </div>
      <div class="overview-card">
        <div class="card-num">08</div>
        <div class="card-title">Secciones</div>
        <div class="card-desc">Hero, Concepto, Instalaciones, Clases, Entrenadores, Precios, FAQ y CTA Final — cada una con su propia lógica y animaciones.</div>
      </div>
      <div class="overview-card">
        <div class="card-num">B2C</div>
        <div class="card-title">Enfoque</div>
        <div class="card-desc">Directo al consumidor. Diseñado para convertir visitas en membresías a través de un journey visual inmersivo y visceral.</div>
      </div>
      <div class="overview-card">
        <div class="card-num">100%</div>
        <div class="card-title">Mobile First</div>
        <div class="card-desc">Diseño responsivo completo: desde 375px hasta 1280px+ con experiencias diferenciadas en cada breakpoint.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ STACK ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 01 — Stack Tecnológico</p>
    <h2 class="section-title fade-up">Herramientas</h2>

    <div class="stack-list fade-up">
      <a class="stack-item" href="https://nextjs.org/" target="_blank">
        <div class="stack-icon">NX</div>
        <div>
          <div class="stack-name">Next.js 16</div>
          <div class="stack-detail">App Router · Turbopack · Server Components</div>
        </div>
      </a>
      <a class="stack-item" href="https://tailwindcss.com/" target="_blank">
        <div class="stack-icon">TW</div>
        <div>
          <div class="stack-name">Tailwind CSS v3</div>
          <div class="stack-detail">Utility-first · Mobile-first · Custom tokens</div>
        </div>
      </a>
      <a class="stack-item" href="https://www.framer.com/motion/" target="_blank">
        <div class="stack-icon">FM</div>
        <div>
          <div class="stack-name">Framer Motion</div>
          <div class="stack-detail">Scroll animations · Layout transitions · Gestures</div>
        </div>
      </a>
      <a class="stack-item" href="https://lucide.dev/" target="_blank">
        <div class="stack-icon">LC</div>
        <div>
          <div class="stack-name">Lucide React</div>
          <div class="stack-detail">Iconografía consistente y ligera</div>
        </div>
      </a>
      <a class="stack-item" href="https://fonts.google.com/specimen/Space+Grotesk" target="_blank">
        <div class="stack-icon">SG</div>
        <div>
          <div class="stack-name">Space Grotesk</div>
          <div class="stack-detail">Display · Titulares enormes</div>
        </div>
      </a>
      <a class="stack-item">
        <div class="stack-icon">TS</div>
        <div>
          <div class="stack-name">TypeScript</div>
          <div class="stack-detail">Interfaces estrictas · Types globales en lib/</div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- ═══ ARCHITECTURE ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 02 — Arquitectura</p>
    <h2 class="section-title fade-up">Estructura</h2>

    <div class="tree-wrapper fade-up">
      <div class="tree"><span class="root">gym-saas/</span>
├── <span class="folder">app/</span>
│   ├── <span class="file">globals.css</span>         <span class="comment">// Reset · Variables · Grain · Utilidades</span>
│   ├── <span class="file">layout.tsx</span>          <span class="comment">// SEO Metadata · Fuentes · Body Wrapper</span>
│   └── <span class="file">page.tsx</span>            <span class="comment">// Punto de ensamble — importa todas las secciones</span>
│
├── <span class="folder">components/</span>
│   ├── <span class="folder">footer/</span>
│   │   └── <span class="file">Footer.tsx</span>          <span class="comment">// Links · Contacto · Autor</span>
│   ├── <span class="folder">navbar/</span>
│   │   └── <span class="file">Navbar.tsx</span>          <span class="comment">// Responsivo · Glassmorphism</span>
│   ├── <span class="folder">sections/</span>           <span class="comment">// ─── NÚCLEO VISUAL ───</span>
│   │   ├── <span class="file">Hero.tsx</span>            <span class="comment">// CTA + Tipografía Masiva (Stroke-Text)</span>
│   │   ├── <span class="file">Concept.tsx</span>         <span class="comment">// Filosofía del Gimnasio</span>
│   │   ├── <span class="file">Facilities.tsx</span>      <span class="comment">// Grid de Imágenes de Instalaciones</span>
│   │   ├── <span class="file">Classes.tsx</span>         <span class="comment">// Lista Dinámica de Entrenamientos</span>
│   │   ├── <span class="file">Trainers.tsx</span>        <span class="comment">// Cards de Entrenadores</span>
│   │   ├── <span class="file">Pricing.tsx</span>         <span class="comment">// Cuadrícula de Membresías</span>
│   │   ├── <span class="file">FAQ.tsx</span>             <span class="comment">// Acordeón Desplegable</span>
│   │   └── <span class="file">CTAFinal.tsx</span>        <span class="comment">// Llamado a la acción visceral</span>
│   └── <span class="folder">ui/</span>
│       ├── <span class="file">Button.tsx</span>          <span class="comment">// Botón base con variantes</span>
│       ├── <span class="file">Modal.tsx</span>           <span class="comment">// Modal reutilizable y accesible</span>
│       └── <span class="file">AnimatedSection.tsx</span> <span class="comment">// Wrapper Framer Motion scroll</span>
│
└── <span class="folder">lib/</span>
    ├── <span class="file">data.ts</span>             <span class="comment">// Capa de datos: entrenadores, precios, clases</span>
    └── <span class="file">types.ts</span>            <span class="comment">// Interfaces TypeScript globales</span></div>
    </div>
  </div>
</section>

<!-- ═══ FILOSOFÍA ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 03 — Filosofía</p>
    <h2 class="section-title fade-up">Brutalismo</h2>

    <div class="philosophy-grid fade-up">
      <div class="philosophy-item">
        <div class="phi-icon">⬛</div>
        <div class="phi-title">Sin Redondeo</div>
        <div class="phi-body">Esquinas afiladas en cada elemento. Las curvas son debilidad. La geometría dura representa fuerza bruta.</div>
      </div>
      <div class="philosophy-item">
        <div class="phi-icon">◑</div>
        <div class="phi-title">Contraste Extremo</div>
        <div class="phi-body">Blanco stark <code style="color:var(--red)">#FFFFFF</code> sobre negro puro <code style="color:var(--red)">#0a0a0a</code>. Sin grises de compromiso ni paletas suaves.</div>
      </div>
      <div class="philosophy-item">
        <div class="phi-icon">▒</div>
        <div class="phi-title">Ruido Táctil</div>
        <div class="phi-body">SVG grain inyectado vía CSS raw en todo el layout. Imita pósters impresos y paredes texturizadas. Peso visual crudo y real.</div>
      </div>
      <div class="philosophy-item">
        <div class="phi-icon">AA</div>
        <div class="phi-title">Tipografía Masiva</div>
        <div class="phi-body">tracking-tighter excesivo, mayúsculas sostenidas en nav, titulares que dominan la viewport. El texto es forma, no solo contenido.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ INSTALACIÓN ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 04 — Setup</p>
    <h2 class="section-title fade-up">Desarrollo Local</h2>

    <div class="install-steps fade-up">
      <div class="install-step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Clona el repositorio</div>
          <code class="code-block">git clone https://github.com/rogercipa7/iron-core-gym</code>
        </div>
      </div>
      <div class="install-step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Instala dependencias</div>
          <code class="code-block">npm install</code>
        </div>
      </div>
      <div class="install-step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Levanta el servidor con Turbopack</div>
          <code class="code-block">npm run dev</code>
        </div>
      </div>
      <div class="install-step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Abre en tu navegador</div>
          <code class="code-block">http://localhost:3000</code>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ RESPONSIVE ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 05 — Responsividad</p>
    <h2 class="section-title fade-up">Breakpoints</h2>

    <div class="responsive-grid fade-up">
      <div class="resp-item">
        <div class="resp-breakpoint">375px</div>
        <div class="resp-label">📱 Mobile</div>
        <div class="resp-desc">Menú hamburguesa animado. Tipografías apiladas y legibles. Sliders convertidos a apilamiento vertical.</div>
      </div>
      <div class="resp-item">
        <div class="resp-breakpoint">768px</div>
        <div class="resp-label">📲 Tablet</div>
        <div class="resp-desc">Grids optimizados de 2 columnas. Layouts intermedios fluidos con spacing aumentado.</div>
      </div>
      <div class="resp-item">
        <div class="resp-breakpoint">1280px</div>
        <div class="resp-label">🖥️ Desktop</div>
        <div class="resp-desc">Experiencia full-width inmersiva. Hover complejos: revelación de color en escala de grises, imágenes flotantes.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ AUTOR ═══ -->
<section>
  <div class="container">
    <p class="section-label">// 06 — Autor</p>
    <h2 class="section-title fade-up">Creador</h2>

    <div class="author-block fade-up">
      <div>
        <div class="author-name">Roger<br>Cipagauta</div>
        <div class="author-role">Frontend Developer — Bogotá, Colombia</div>
      </div>

      <div class="author-links">
        <a class="author-link" href="https://portafoliorc.netlify.app/" target="_blank">
          <div class="link-icon">🌐</div>portafoliorc.netlify.app
        </a>
        <a class="author-link" href="https://github.com/rogercipa7" target="_blank">
          <div class="link-icon">GH</div>github.com/rogercipa7
        </a>
        <a class="author-link" href="https://www.linkedin.com/in/roger-cipagauta-b1626b329/" target="_blank">
          <div class="link-icon">IN</div>linkedin.com/in/roger-cipagauta
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<footer class="footer-bar">
  <div class="footer-logo">IRON CORE GYM</div>
  <div class="footer-copy">© 2025 ROGER CIPAGAUTA — BOGOTÁ, COLOMBIA</div>
</footer>

<script>
  // Scroll fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
</html>
