# Next.js + WordPress Multilingue + Swiper Starter

Ce projet connecte Next.js 14 avec WordPress (via REST API) pour créer un site multilingue avec navigation glissante entre posts.

## Fonctions principales
- Dynamic routes `[lang]`
- SEO multilingue (`html lang`)
- Header fixe 25dvh
- Footer fixe 15dvh
- Glissement horizontal entre posts avec Swiper
- Styling responsive avec TailwindCSS

## Installation

```bash
npm install
npm run dev
```

Changer les URLs des posts dans `/posts-config.json`.

## Déploiement

```bash
npm run build
vercel
```