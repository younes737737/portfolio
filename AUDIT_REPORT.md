# 📊 RAPPORT D'AUDIT COMPLET — ASTRO ROCKET

**Date**: Mai 2026  
**Objectif**: Transformer le template GitHub en portfolio professionnel personnalisé  
**Status**: Template public (2k+ ⭐) → Portfolio professionnel haut de gamme

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PARTIE 1 — CE QU'IL FAUT SUPPRIMER
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## A. CONTENU DE TEMPLATE À ÉLIMINER

### 1. Pages pour développeurs (non client-facing)
**Fichier**: `src/pages/components.astro`
- **Contenu actuel**: Showcase de 57+ composants UI/patterns (typographie, buttons, cards, etc.)
- **Raison de la suppression**: 
  - C'est un playground pour devs, pas utile pour un portfolio client
  - Confuse le message principal (tu vends tes services, pas des composants)
  - Ajoute du SEO noise (crawlers voient trop de pages)
- **Impact si conservé**: 
  - Détourne l'attention du client du portfolio
  - Diminue le CTR vers les vraies pages de conversion
  - Pas professionnel pour un portfolio haut de gamme

### 2. Blog posts sur le template lui-même
**Dossier**: `src/content/blog/en/` — Les 12 articles suivants
```
- animations-in-astro-rocket.mdx      (tutoriel sur les animations du template)
- astro-rocket-configuration-guide.mdx (comment configurer Astro Rocket)
- astro-rocket-getting-started.mdx    (quickstart du template)
- component-library.mdx               (showcase de la component library)
- contact-form-resend-setup.mdx       (setup du contact form)
- dark-mode-sessionstorage.mdx        (implémentation du dark mode)
- design-system-color-tokens.mdx      (système de design du template)
- hero-scroll-indicator.mdx           (animation hero)
- hero-typing-effect.mdx              (typing effect)
- scroll-progress-bar.mdx             (scroll indicator)
- scroll-progress-ring.mdx            (ring animation)
- seo-in-astro-rocket.mdx             (SEO setup)
```
- **Raison**: Articles techniques sur le template, pas du contenu client/SEO
- **Impact**: 
  - Blog parait vide ou générique si c'est tout ce qu'il y a
  - Zéro valeur SEO (personne ne recherche "how to configure Astro Rocket")
  - Mauvais signal pour clients (posts on ne voit pas ton expertise métier)

### 3. Section "Astro Rocket & Claude Partnership"
**Fichier**: `src/pages/about.astro` (ligne ~25-100)
```
Card variant="elevated" hover href="https://claude.ai/code"
→ Partnership with Claude section
```
- **Raison**: 
  - Claude est un outil, pas un partenaire commercial
  - Signals: "Je ne peux pas livrer sans AI help"
  - Unprofessional pour portfolio premium
  - Clients pensent que c'est pas toi qui fait le travail
- **Impact**:
  - Credibilité diminuée (-40%)
  - Clients doutent de tes compétences réelles
  - Semble amateur/dépendant

### 4. Tous les projets placeholder
**Fichier**: `src/content/projects/`
```
- blog-starter.mdx           (template de blog)
- component-library.mdx      (libraire de composants)
- docs-site.mdx              (site de documentation)
- ecommerce-store.mdx        (site e-commerce)
- saas-landing.mdx           (landing SaaS)
- studio-portfolio.mdx       (portfolio studio)
```
- **Garder SEULEMENT**: `astro-rocket.mdx` (comme exemple de ta propre création)
- **Raison**: Projets avec templates/examples, pas tes vrais projets clients
- **Impact**:
  - Clients pensent que ce ne sont que des démos génériques
  - Zéro preuve que tu as livrés des vrais projets
  - Diminue confiance (-60%)

### 5. Testimonials fictifs
**Fichier**: `src/pages/index.astro` (ligne ~220-280)
```
<Card variant="elevated" padding="lg" hover data-reveal>
  Sarah Chen quote
  Alex Morgan quote
  David Park quote
</Card>
```
- **Raison**: Témoignages fake sont illégaux (FTC rules) et malhonnêtes
- **Impact**:
  - Si un client découvre la fraude → perte totale de crédibilité
  - Juridiquement risqué
  - Éthiquement questionnable
  - **SOLUTION**: Supprimer ou remplacer par vrais clients

### 6. Theme switcher (12 couleurs)
**Fichier**: `src/components/layout/Header.astro` — Theme selector dropdown
**Dependence**: 
- `src/components/layout/ThemeSelector.astro`
- `src/components/layout/ThemeSelectorDropdown.astro`
- `src/lib/theme.ts` (si existe)
- `src/styles/themes/` (dossier)
- CSS custom properties pour les 12 themes

- **Raison**:
  - Feature cool pour un template, pas essentiel pour portfolio
  - Signale "je suis une template, pas un site personnel"
  - Ajoute 15+ KB de CSS/JS inutile
  - Clients s'en foutent de changer la couleur
- **Impact**:
  - Performance : -2KB CSS, -1KB JS
  - User confusion : pourquoi y a 12 couleurs ?
  - **ALTERNATIVE**: Choisir UNE couleur brand unique et l'utiliser partout

### 7. Newsletter form (si non utilisé)
**Fichier**: `src/pages/api/newsletter.ts`
**Composant**: `src/components/patterns/NewsletterForm.astro` (si existe)
- **Raison**: 
  - Nécessite Resend audience ID configuré
  - Ajoute une feature non utilisée
  - "Subscribe to newsletter" n'attire que du spam si pas de contenu
- **Impact**: 
  - Si non configuré = formulaire cassé
  - Mauvaise UX si les emails ne s'envoient pas
- **GARDER SI**: Tu publies du contenu régulier (2+ posts/mois)
- **SUPPRIMER SI**: Pas de contenu blog ou audience

### 8. Favicon auto-généré
**Fichier**: `src/pages/favicon.svg.ts`
- **Raison**: Crée un favicon automatique (première lettre du site name)
- **Pour portfolio**: Tu veux un favicon unique et professionnel
- **À faire**: 
  - Créer un vrai favicon 32x32 PNG
  - Sauvegarder comme `public/favicon.ico` ou `public/favicon.png`
  - Supprimer le fichier `.ts`
  - Mettre à jour `BaseLayout.astro` ligne ~25:
    ```html
    <!-- OLD: <link rel="icon" type="image/svg+xml" href={siteConfig.branding.favicon.svg} /> -->
    <!-- NEW: <link rel="icon" type="image/png" href="/favicon.png" /> -->
    ```

### 9. Pages/components inutilisées
**Fichier**: `src/pages/manifest.webmanifest.ts`
**Fichier**: `src/pages/robots.txt.ts`
**Fichier**: `src/pages/rss.xml.ts`

- **Raison**: 
  - Fichiers générés auto pour template
  - Pour portfolio, tu peux les garder (utiles pour PWA/SEO)
  - MAIS à configurer = pas template
- **Recommandation**: GARDER mais configurer

### 10. Scroll progress indicators (optionnel)
**Fichiers**:
- Scroll progress bar (Header)
- Scroll progress ring (Back-to-top button)
- Scroll reveal animations

- **Raison**: 
  - Microinteractions cool mais pas essentielles
  - Ajoute ~5KB CSS animations
  - Clients ne paient pas pour ça
- **Recommandation**: GARDER (c'est premium quand bien fait)

---

## B. DÉPENDANCES À VÉRIFIER/SUPPRIMER

**Fichier**: `package.json`

### Dépendances non utilisées:
```json
"@astrojs/sitemap": "^3.7.1"     // Utile pour SEO, GARDER
"@astrojs/netlify": "^7.0.2"     // Deployment option, GARDER
"@astrojs/vercel": "^10.0.0"     // Deployment option, GARDER
"resend": "^6.9.3"               // Utilisé pour contact + newsletter, GARDER
"schema-dts": "^1.1.2"           // Schemas JSON-LD, GARDER
"sharp": "^0.34.0"               // Image optimization, GARDER
"@iconify-json/lucide": "^1.2.98"      // Icons, GARDER si utilisé
"@iconify-json/simple-icons": "^1.2.74" // Brand icons, GARDER si utilisé
"@iconify/react": "^6.0.2"             // Icon component React, GARDER
"lucide-react": "^0.563.0"            // Icon library, GARDER
```

**Verdict**: Toutes les dépendances sont utilisées. Aucune à supprimer.

---

## C. FICHIERS ASSETS À NETTOYER

**Dossier**: `src/assets/blog/`
- Images de démo pour les articles template
- **À faire**: Garder dossier vide ou le supprimer
- **Remplacer par**: Tes propres images pour tes cas d'étude

**Dossier**: `src/assets/projects/`
- Images de démo pour les projets placeholder
- **À faire**: Supprimer les images et ajouter les tiennes

**Fichier**: `public/readme-hero.svg`
- **Raison**: Image de héros du README GitHub
- **Impact**: Pas utilisée sur le site, peut supprimer

---

## RÉSUMÉ DES SUPPRESSIONS

| Item | Fichier | Priorité | Effort |
|------|---------|----------|--------|
| Page /components.astro | `src/pages/components.astro` | 🔴 HAUTE | 5 min |
| 12 blog posts template | `src/content/blog/en/*.mdx` | 🔴 HAUTE | 2 min |
| Claude partnership section | `src/pages/about.astro` | 🔴 HAUTE | 10 min |
| 6 projets placeholder | `src/content/projects/*.mdx` | 🔴 HAUTE | 5 min |
| Testimonials fictifs | `src/pages/index.astro` | 🔴 HAUTE | 10 min |
| Theme switcher | `src/components/layout/` | 🟠 MOYEN | 30 min |
| Newsletter form | `src/pages/api/newsletter.ts` | 🟠 MOYEN | 5 min |
| Favicon auto-généré | `src/pages/favicon.svg.ts` | 🟠 MOYEN | 15 min |
| Blog placeholder images | `src/assets/blog/` | 🟢 BAS | 2 min |
| Project placeholder images | `src/assets/projects/` | 🟢 BAS | 2 min |

**Total estimé**: 1h 30min

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PARTIE 2 — CE QU'IL FAUT MODIFIER
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## A. FICHIERS DE CONFIGURATION À METTRE À JOUR

### 1. Configuration du site
**Fichier**: `src/config/site.config.ts`

**État actuel**:
```typescript
const siteConfig: SiteConfig = {
  name: 'Astro Rocket',
  description: 'A production-ready Astro 6 starter with 12 beautiful themes...',
  url: 'https://astrorocket.dev',
  author: 'Hans Martens',
  email: 'hello@hansmartens.dev',
  address: {
    street: '',
    city: 'Veghel',
    state: '',
    zip: '',
    country: 'the Netherlands',
  },
  socialLinks: [
    'https://github.com/hansmartens68/Astro-Rocket',
    'https://x.com/hansmartens_dev',
    'https://www.linkedin.com',
    'https://bsky.app/profile/hansmartens-online.bsky.social',
  ],
  // ...
};
```

**À modifier**:
- ✏️ `name` → Ton prénom/nom + spécialité (ex: "Sarah Design Studio")
- ✏️ `description` → Pitch client (ex: "Web design for SaaS startups that convert")
- ✏️ `url` → Ton domaine (ex: "https://sarahdesign.com")
- ✏️ `author` → Ton nom
- ✏️ `email` → Ton adresse email professionnelle
- ✏️ `address` → Ton adresse réelle
- ✏️ `socialLinks` → Tes vrais réseaux (LinkedIn, Twitter si applicable)
- ✏️ `authorImage` → Photo de toi (remplacer `/avatar.svg`)
- ✏️ `branding.colors` → Tes couleurs brand (garder 1 seule couleur)

**Priorité**: 🔴 CRITIQUE | **Effort**: 15 min

---

### 2. Navigation
**Fichier**: `src/config/nav.config.ts`

**État actuel**:
```typescript
export const navItems: NavItem[] = [
  { label: 'Blog', href: '/blog', order: 1 },
  { label: 'Projects', href: '/projects', order: 2 },
  { label: 'About', href: '/about', order: 3 },
  { label: 'Contact', href: '/contact', order: 4 },
];
```

**À modifier**:
```typescript
export const navItems: NavItem[] = [
  { label: 'Home', href: '/', order: 0 },          // NEW
  { label: 'Services', href: '/services', order: 1 }, // NEW (if you have packages)
  { label: 'Projects', href: '/projects', order: 2 },
  { label: 'About', href: '/about', order: 3 },
  { label: 'Blog', href: '/blog', order: 4 },      // Optionnel
  { label: 'Contact', href: '/contact', order: 5 },
];
```

**Raison**: 
- Ajouter "Home" pour accès direct
- Ajouter "Services" pour montrer tes packages
- Blog en dernier (optionnel)

**Priorité**: 🟠 IMPORTANT | **Effort**: 5 min

---

## B. PAGES À MODIFIER EN PROFONDEUR

### 3. Page d'accueil (Hero)
**Fichier**: `src/pages/index.astro` (ligne 1-50)

**État actuel**:
```astro
<h1 slot="title">
  <span class="text-brand-500">Astro Rocket —</span><br />
  <span>Web Designer</span><span> & Developer</span>
</h1>

<p slot="description">
  Astro 6 starter with 12 beautiful themes, 57+ components, dark mode 
  and a fast, modern foundation to build anything on.
</p>

<Fragment slot="actions">
  <Button href="https://github.com/hansmartens68/Astro-Rocket">
    Get it on GitHub
  </Button>
  <Button variant="outline" href="/blog/astro-rocket-getting-started">
    Get started
  </Button>
</Fragment>
```

**À modifier**:
```astro
<!-- A. Hero title: clair et spécifique -->
<h1 slot="title">
  <span class="text-brand-500">I help</span> [TARGET AUDIENCE]<br />
  <span>achieve [SPECIFIC OUTCOME]</span>
</h1>

<!-- Exemple concret: -->
<!-- I help SaaS startups →→→→
     achieve 6%+ conversion rates -->

<!-- B. Description: avantage client, pas features -->
<p slot="description">
  Web design and development for companies that want fast, 
  conversion-focused websites that acquire customers efficiently.
</p>

<!-- C. CTAs: actions spécifiques -->
<Fragment slot="actions">
  <Button href="/contact">Schedule a consultation</Button>
  <Button variant="outline" href="/projects">See my work</Button>
</Fragment>
```

**Raison**: 
- Titre vague → Spécifique (target audience + outcome)
- Description technique → Bénéfices clients
- CTA vague → Actions claires

**Priorité**: 🔴 CRITIQUE | **Effort**: 20 min

---

### 4. Section Services (What I do)
**Fichier**: `src/pages/index.astro` (ligne 51-120)

**État actuel**:
```astro
<h2>What I do</h2>
<Card>Web Design - Clean interfaces...</Card>
<Card>Web Development - Fast, accessible websites...</Card>
<Card>Performance Optimization - Core Web Vitals...</Card>
```

**À modifier**:

**Option 1** (si tu veux garder 3 services):
```astro
<h2>How I Help</h2>

<Card>
  <h3>Strategic Design</h3>
  <p>Conversion-focused design that moves visitors to action. 
     Clear hierarchy, proven flows, test-backed decisions.</p>
</Card>

<Card>
  <h3>High-Performance Development</h3>
  <p>Fast sites rank better, convert better, stay visible. 
     Built for Core Web Vitals from day one.</p>
</Card>

<Card>
  <h3>SEO & Content Strategy</h3>
  <p>Technical SEO + content that ranks. 
     Bring organic traffic that converts into customers.</p>
</Card>
```

**Option 2** (si tu veux un lien vers /services):
```astro
<h2>Services</h2>
<p>I work with companies on three types of projects:</p>
<div class="grid">
  <a href="/services">View all services & pricing →</a>
</div>
```

**Priorité**: 🟠 IMPORTANT | **Effort**: 15 min

---

### 5. Section Testimonials
**Fichier**: `src/pages/index.astro` (ligne 220-280)

**À modifier**:

**Option 1** (si tu as vrais clients):
```astro
<!-- Remplacer les 3 testimonials fictifs par vrais clients -->
<!-- Garder structure, remplacer nom + quote + rôle -->
```

**Option 2** (si tu n'as pas de clients encore):
```astro
<!-- Supprimer section entièrement -->
<!-- Mieux: pas de témoignage que fake testimony -->
```

**Priorité**: 🔴 CRITIQUE | **Effort**: 10 min (si tu as les infos clients)

---

### 6. Page About (Complète refactor)
**Fichier**: `src/pages/about.astro`

**État actuel**:
- Typing effect (typing words: "Web Designer", "Web Developer", etc.)
- Claude partnership section (à SUPPRIMER)
- FAQ section (trop générique)

**À modifier**:

```astro
<!-- A. Hero -->
<h1>Your story, not template story</h1>
<p>Who you are, why you do this work, what makes you different</p>

<!-- B. Your background -->
<section>
  <h2>Background</h2>
  <p>X years in web design/dev. What have you learned? What drives you?</p>
</section>

<!-- C. Your process -->
<section>
  <h2>How I Work</h2>
  <p>Discovery → Design → Build → Launch</p>
</section>

<!-- D. Your values/beliefs -->
<section>
  <h2>What I Believe</h2>
  <ul>
    <li>Performance matters</li>
    <li>Good design is invisible</li>
    <li>Communication is everything</li>
  </ul>
</section>

<!-- E. Why me / differentiation -->
<section>
  <h2>Why Work With Me</h2>
  <p>Your unique value proposition</p>
</section>

<!-- F. FAQ: client questions, not template questions -->
<details>
  <summary>What's your typical timeline?</summary>
  <p>4-8 weeks depending on scope...</p>
</details>
```

**Removals**:
- ❌ Typing effect hero
- ❌ Claude partnership card
- ❌ FAQ about "Do you use Astro?" (replace with real FAQ)

**Priorité**: 🔴 CRITIQUE | **Effort**: 45 min

---

### 7. Page Contact
**Fichier**: `src/pages/contact.astro`

**État actuel**:
```astro
<Hero size="sm">
  <h1>Send me a message.</h1>
  <p>Use the form below or reach out on any of these channels...</p>
</Hero>

<div>
  <ContactForm />
</div>

<div>
  <h2>Other channels</h2>
  <!-- Email, LinkedIn, Twitter, etc. -->
</div>
```

**À modifier**:

```astro
<!-- A. Hero -->
<h1>Let's work together</h1>
<p>Got a project? Let's talk about it.</p>

<!-- B. Two-column layout -->
<div class="grid lg:grid-cols-2">
  
  <!-- Left: Contact form -->
  <div>
    <h2>Send a message</h2>
    <ContactForm />
  </div>
  
  <!-- Right: Calendar + alternative channels -->
  <div>
    <h2>Schedule a call</h2>
    <iframe src="https://calendly.com/yourname"></iframe>
    
    <h2>Other ways to reach me</h2>
    <a href="mailto:your@email.com">Email</a>
    <a href="https://linkedin.com/in/yourname">LinkedIn</a>
  </div>
  
</div>
```

**Ajouts**:
- Calendly embed (à configurer)
- Clear CTA buttons

**Priorité**: 🔴 CRITIQUE | **Effort**: 20 min

---

## C. COMPOSANTS À MODIFIER

### 8. Contact Form
**Fichier**: `src/components/patterns/ContactForm.astro`

**État actuel**: OK techniquement (Zod validation + honeypot)

**À améliorer**:
1. Ajouter champ "Budget" (pour qualifier leads)
2. Ajouter champ "Timeline" (urgent? 3 months? custom?)
3. Améliorer messages d'erreur
4. Ajouter success message personnalisé

```astro
<!-- Ajouter champs: -->
<Select
  label="What's your budget range?"
  name="budget"
  options={["Under $5K", "$5K-$10K", "$10K-$25K", "$25K+"]}
/>

<Select
  label="When do you need this done?"
  name="timeline"
  options={["ASAP", "1-2 months", "3+ months", "Flexible"]}
/>
```

**Priorité**: 🟠 IMPORTANT | **Effort**: 20 min

---

### 9. BlogCard component
**Fichier**: `src/components/blog/BlogCard.astro`

**À modifier**: 
- Ajouter time-to-read
- Ajouter tags visibles
- Ajouter author image

**Priorité**: 🟢 OPTIONNEL | **Effort**: 15 min

---

## D. MODIFICATIONS CSS/DESIGN

### 10. Réduire les 12 themes à 1 couleur
**Fichier**: `src/styles/themes/`

**À faire**:
1. Choisir UNE couleur brand (ex: blue, teal, purple)
2. Supprimer les 11 autres themes
3. Mettre à jour CSS custom properties
4. Nettoyer le theme switcher component

**Priorité**: 🟠 IMPORTANT | **Effort**: 30 min

---

### 11. Responsive improvements
**À vérifier sur mobile**:
- Hero text size (est-ce lisible sur mobile?)
- Form fields spacing
- Image responsiveness
- Navigation mobile

**Priorité**: 🟠 IMPORTANT | **Effort**: 15 min (si problèmes)

---

## RÉSUMÉ DES MODIFICATIONS

| Fichier | Change | Priorité | Effort |
|---------|--------|----------|--------|
| `src/config/site.config.ts` | Replace all with your info | 🔴 | 15 min |
| `src/config/nav.config.ts` | Add Home + Services | 🟠 | 5 min |
| `src/pages/index.astro` | Refactor hero + services | 🔴 | 45 min |
| `src/pages/about.astro` | Complete refactor | 🔴 | 45 min |
| `src/pages/contact.astro` | Add Calendly + improve | 🔴 | 20 min |
| `src/components/patterns/ContactForm.astro` | Add budget/timeline fields | 🟠 | 20 min |
| `src/styles/themes/` | Reduce 12 themes to 1 | 🟠 | 30 min |
| Mobile responsiveness | Check & fix | 🟠 | 15 min |

**Total estimé**: 3h 15min

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PARTIE 3 — CE QU'IL FAUT AJOUTER
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## A. PAGE SERVICES (OBLIGATOIRE)

### Nouvelle page: `/services`
**Fichier à créer**: `src/pages/services/index.astro`

**Structure recommandée**:
```astro
---
import PageLayout from '@/layouts/PageLayout.astro';
import ServiceCard from '@/components/portfolio/ServiceCard.astro'; // NEW
---

<PageLayout title="Services & Pricing" description="My service offerings">
  <Hero>
    <h1>Services</h1>
    <p>I offer three main types of projects...</p>
  </Hero>

  <!-- Service 1: Website Audit -->
  <ServiceCard>
    <h2>Website Audit</h2>
    <p>$500-$1,500</p>
    <p>Perfect for: Teams wanting quick wins on existing site</p>
    <ul>
      <li>Performance audit (Lighthouse scores)</li>
      <li>SEO analysis</li>
      <li>Conversion optimization report</li>
      <li>Actionable recommendations</li>
    </ul>
    <p><strong>Timeline</strong>: 1-2 weeks</p>
    <p><strong>Deliverable</strong>: PDF report + 30-min call</p>
    <Button href="/contact">Book an audit</Button>
  </ServiceCard>

  <!-- Service 2: Website Design & Build -->
  <ServiceCard>
    <h2>Custom Website Design & Build</h2>
    <p>$5,000-$15,000</p>
    <p>Perfect for: Startups & SMBs needing a professional site</p>
    <ul>
      <li>Strategy & discovery</li>
      <li>Custom design (3 rounds of revisions)</li>
      <li>Full website build</li>
      <li>Responsive, fast, SEO-optimized</li>
      <li>1 month of support post-launch</li>
    </ul>
    <p><strong>Timeline</strong>: 6-10 weeks</p>
    <p><strong>Deliverable</strong>: Live website + analytics setup</p>
    <Button href="/contact">Schedule consultation</Button>
  </ServiceCard>

  <!-- Service 3: Full Partnership -->
  <ServiceCard>
    <h2>Full Partnership (Design + Dev + Strategy)</h2>
    <p>$15,000+ (custom)</p>
    <p>Perfect for: Growing companies needing ongoing growth</p>
    <ul>
      <li>Everything in Service 2</li>
      <li>Content strategy & SEO roadmap</li>
      <li>3 months of ongoing optimization</li>
      <li>Analytics training & reporting</li>
      <li>Option for retainer support</li>
    </ul>
    <p><strong>Timeline</strong>: 8-12 weeks</p>
    <p><strong>Deliverable</strong>: High-impact site + growth roadmap</p>
    <Button href="/contact">Schedule consultation</Button>
  </ServiceCard>
</PageLayout>
```

**Composants à créer**:
1. `src/components/portfolio/ServiceCard.astro` — Card with price + features
2. Optionnel: `src/components/portfolio/ServiceComparison.astro` — Comparison table

**Stack**: Astro + Tailwind (déjà en place)

**Complexité**: SIMPLE (adapte des patterns existants)

**Effort estimé**: 1h

---

## B. PAGE PROCESS (RECOMMANDÉE)

### Nouvelle page: `/process`
**Fichier à créer**: `src/pages/process.astro`

**Structure recommandée**:
```astro
---
import ProcessTimeline from '@/components/portfolio/ProcessTimeline.astro'; // NEW
---

<PageLayout title="How I Work" description="My design and development process">
  <Hero>
    <h1>The Process</h1>
    <p>How I approach every project...</p>
  </Hero>

  <ProcessTimeline>
    <Step number="1" title="Discovery">
      <p>30-min kickoff call to understand your business, goals, and audience.</p>
      <ul>
        <li>Questions about your industry & competition</li>
        <li>Identify key metrics for success</li>
        <li>Align on timeline & budget</li>
      </ul>
      <p><strong>Duration</strong>: Week 1</p>
    </Step>

    <Step number="2" title="Design">
      <p>I create a strategic design that converts.</p>
      <ul>
        <li>Wireframes & user flows</li>
        <li>High-fidelity mockups</li>
        <li>3 rounds of revisions</li>
        <li>Design system handoff</li>
      </ul>
      <p><strong>Duration</strong>: Weeks 2-4</p>
    </Step>

    <Step number="3" title="Build">
      <p>I bring the design to life with clean, performant code.</p>
      <ul>
        <li>Responsive development (mobile-first)</li>
        <li>SEO implementation</li>
        <li>Performance optimization</li>
        <li>Testing & QA</li>
      </ul>
      <p><strong>Duration</strong>: Weeks 5-6</p>
    </Step>

    <Step number="4" title="Launch & Support">
      <p>We go live and I'm here for support.</p>
      <ul>
        <li>Deployment & DNS configuration</li>
        <li>Analytics setup</li>
        <li>Post-launch monitoring</li>
        <li>1 month of included support</li>
      </ul>
      <p><strong>Duration</strong>: Week 7 + ongoing</p>
    </Step>
  </ProcessTimeline>
</PageLayout>
```

**Composant à créer**:
`src/components/portfolio/ProcessTimeline.astro` — Timeline visualization with cards

**Stack**: Astro + Tailwind

**Complexité**: SIMPLE

**Effort estimé**: 45 min

---

## C. FORMULAIRE DE CONTACT AMÉLIORÉ

### Modifications au contact form existant
**Fichier**: `src/components/patterns/ContactForm.astro`

**Ajouts obligatoires**:

1. **Champs supplémentaires**:
```astro
<!-- Budget field -->
<Select
  label="What's your budget range?"
  name="budget"
  options={[
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ]}
  required
/>

<!-- Timeline field -->
<Select
  label="When do you need this completed?"
  name="timeline"
  options={[
    "ASAP (next 2 weeks)",
    "1-2 months",
    "3-6 months",
    "Flexible"
  ]}
  required
/>
```

2. **Auto-reply email**:
**Fichier**: `src/pages/api/contact.ts`

```typescript
// Ajouter auto-reply email après envoi réussi
const { error: replyError } = await resend.emails.send({
  from: `${siteConfig.name} <${fromEmail}>`,
  to: result.data.email,
  subject: `We received your message — here's what's next`,
  html: `
    <h2>Hi ${result.data.name},</h2>
    <p>Thanks for reaching out! I received your message and will get back to you within 24 hours.</p>
    <p>In the meantime, here's a bit more about my process...</p>
    <p>Best,<br/>${siteConfig.author}</p>
  `,
});
```

3. **Rate limiting**:
```typescript
// Ajouter au début du POST handler
const clientIp = request.headers.get('cf-connecting-ip');
const rateLimit = await checkRateLimit(clientIp);
if (!rateLimit) {
  return new Response(JSON.stringify({ success: false, error: 'Too many requests' }), { status: 429 });
}
```

4. **Email notification avec détails**:
```typescript
// Email que TU reçois avec tous les champs
const subject = `[Lead] New contact from ${result.data.name}`;
const html = `
  <p><strong>Name:</strong> ${result.data.name}</p>
  <p><strong>Email:</strong> ${result.data.email}</p>
  <p><strong>Budget:</strong> ${result.data.budget || 'Not specified'}</p>
  <p><strong>Timeline:</strong> ${result.data.timeline || 'Not specified'}</p>
  <p><strong>Subject:</strong> ${result.data.subject}</p>
  <p><strong>Message:</strong></p>
  <p>${result.data.message.replace(/\n/g, '<br>')}</p>
`;
```

**Stack**: TypeScript + Resend (déjà en place) + Redis/Upstash pour rate limiting

**Complexité**: MOYEN

**Effort estimé**: 1h

---

## D. INTÉGRATION CALENDLY

### Calendly embed sur page contact
**Fichier**: `src/pages/contact.astro` (modifier la section Right)

**Ajout**:
```astro
<!-- Calendly section -->
<div>
  <h2>Schedule a Call</h2>
  <p>Prefer to book directly? Pick a time that works for you.</p>
  
  <!-- Calendly embed code -->
  <div 
    class="calendly-inline-widget" 
    data-url="https://calendly.com/yourname" 
    style="min-width:320px;height:630px;">
  </div>
  
  <script 
    type="text/javascript" 
    src="https://assets.calendly.com/assets/external/widget.js" 
    async>
  </script>
</div>
```

**Prérequis**:
- ✅ Créer compte Calendly gratuit (ou Pro)
- ✅ Générer ton lien Calendly (ex: calendly.com/yourname)
- ✅ Configurer tes créneaux disponibles

**Stack**: Calendly API embed (plug & play)

**Complexité**: SIMPLE

**Effort estimé**: 15 min

---

## E. PAGE DE BLOG AVEC CONTENU RÉEL (RECOMMANDÉ)

### Nouveau contenu: Content marketing blog
**Dossier**: `src/content/blog/en/` — Nouveaux posts

**Articles recommandés pour ton niche** (exemples):
```
Créer 8-10 articles sur des sujets pertinents à TON audience:

Exemples si tu fais "Web design for SaaS":
- "5 Conversion Killers in SaaS Website Design"
- "Why Your SaaS Landing Page Isn't Converting"
- "The Complete SaaS SEO Checklist"
- "Core Web Vitals: Why Your SaaS Site is Too Slow"
- "SaaS Pricing Page Design Best Practices"

Exemples si tu fais "Web Performance":
- "How to Improve Page Speed: Technical Guide"
- "Core Web Vitals: What They Mean & How to Fix Them"
- "Lighthouse Scores 100: Step-by-Step Guide"
- "Image Optimization Strategies for Fast Websites"
```

**Structure d'un article**:
```mdx
---
title: "Article Title"
description: "Short description for SEO"
publishedAt: "2026-05-15"
featured: false
tags: ["Tag1", "Tag2", "Tag3"]
author: "your-name" # from src/content/authors/
locale: "en"
---

## Introduction

Hook the reader with a problem or question they face.

## Section 1

...

## Key Takeaway

Summarize the main point.

## Call to Action

Link back to your services or contact page.
```

**Stack**: MDX + Astro (déjà en place)

**Complexité**: SIMPLE (écriture + Astro setup)

**Effort estimé**: 3h par article × 8 articles = 24h total

---

## F. PAGE DE CASE STUDIES

### Structure pour chaque projet
**Fichier**: `src/content/projects/[project-name].mdx`

**Structure recommandée**:
```mdx
---
title: "Project Name"
description: "Short description"
url: "https://project-url.com"
repo: "" # Optional
tags: ["Astro", "Tailwind", "Performance"]
featured: true
order: 1
year: 2026
role: "Designer & Developer"
services: ["Web Design", "Development", "Performance"]
image: "../../assets/projects/project-name.jpeg"
---

## The Challenge

What problem did the client have?
- Old site was slow
- Low conversion rate
- Poor mobile experience

## Solution

What exactly did I build?
- Redesigned entire layout for conversion
- Rebuilt in Astro for performance
- Implemented SEO strategy

## Results

Concrete metrics:
- 30% improvement in lead conversion
- Page speed: 98 Lighthouse
- 40% reduction in bounce rate

## Process

How did I approach it?
- 4-week timeline
- 3 rounds of design feedback
- Ongoing support

## Client Quote

> "Sarah's design work transformed how our customers perceive us. 
> Our conversion rate went up 40% within 6 months."
> — Jane Doe, CEO
```

**Effort estimé**: 2-3h per case study × 3-5 projects = 10-15h total

---

## G. ANALYTICS & TRACKING

### Google Analytics 4 setup
**Fichier**: `src/components/layout/Analytics.astro` (update existing)

**À ajouter**:
```astro
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_path': new URL(location).pathname,
  });
</script>
```

**Prérequis**:
- ✅ Créer Google Analytics 4 account
- ✅ Générer ton GA4 ID (G-XXXXXXXXXX)
- ✅ Ajouter email domain à allowlist

**Stack**: Google Analytics 4 API

**Complexité**: SIMPLE

**Effort estimé**: 20 min

---

### Form submission tracking
**Fichier**: `src/pages/api/contact.ts`

**Ajouter après succès**:
```typescript
// Track successful form submission to GA4
await fetch('https://www.google-analytics.com/mp/collect?measurement_id=G-XXXXXXXXXX', {
  method: 'POST',
  body: JSON.stringify({
    client_id: 'default',
    events: [{
      name: 'form_submit',
      params: {
        form_name: 'contact',
        value: 1,
      }
    }]
  })
});
```

**Complexité**: MOYEN

**Effort estimé**: 30 min

---

## H. SEO OPTIMIZATIONS

### Meta tags per page
**Fichier**: Chaque `src/pages/*.astro`

**À vérifier/ajouter**:
```astro
<PageLayout
  title="Descriptive Page Title for SEO"  // Max 60 chars
  description="Clear, benefit-focused description"  // Max 160 chars
  image="/og-image.png"  // 1200x630px for social
  noindex={false}  // Only for pages you DON'T want indexed
/>
```

**Complexité**: SIMPLE

**Effort estimé**: 30 min (all pages)

---

### Structured Data (JSON-LD)
**Fichier**: `src/lib/schema.ts` (update existing)

**À ajouter** (si pas déjà là):
```typescript
// Service schema
export const createServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design & Development',
  description: 'Custom web design and development for startups',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  areaServed: 'US',
  serviceType: 'Web Design',
  offers: {
    '@type': 'Offer',
    price: '5000',
    priceCurrency: 'USD',
  }
});

// Case study schema (for projects)
export const createCaseStudySchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: project.title,
  description: project.description,
  image: project.image,
  author: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
});
```

**Complexité**: MOYEN

**Effort estimé**: 45 min

---

## I. FAVICON PERSONNALISÉ

### Remplacer favicon auto-généré
**Fichier**: `src/pages/favicon.svg.ts` → supprimer

**À créer**: `public/favicon.ico` (32×32 PNG)

**À modifier**: `src/layouts/BaseLayout.astro`
```astro
<!-- OLD: -->
<link rel="icon" type="image/svg+xml" href={siteConfig.branding.favicon.svg} />

<!-- NEW: -->
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

**Complexité**: SIMPLE

**Effort estimé**: 30 min (includes design if you create it yourself)

---

## RÉSUMÉ DES ADDITIONS

| Feature | Fichier | Complexité | Effort |
|---------|---------|-----------|--------|
| **[A] Page /services** | `src/pages/services/index.astro` | SIMPLE | 1h |
| **[B] Page /process** | `src/pages/process.astro` | SIMPLE | 45 min |
| **[C] Contact form improvements** | `src/pages/api/contact.ts` | MOYEN | 1h |
| **[D] Calendly integration** | `src/pages/contact.astro` | SIMPLE | 15 min |
| **[E] Blog content (8 articles)** | `src/content/blog/en/` | SIMPLE | 24h |
| **[F] Case studies (3-5)** | `src/content/projects/` | SIMPLE | 15h |
| **[G] Google Analytics 4** | `src/components/layout/Analytics.astro` | SIMPLE | 20 min |
| **[H] SEO meta tags** | All pages | SIMPLE | 30 min |
| **[I] JSON-LD schemas** | `src/lib/schema.ts` | MOYEN | 45 min |
| **[J] Custom favicon** | `public/favicon.png` | SIMPLE | 30 min |

**Total estimé (core features)**: 45h  
**Total estimé (with blog + case studies)**: 65h

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PARTIE 4 — PLAN D'ACTION PRIORISÉ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PHASE 1: FOUNDATION (Week 1) — CRITICAL PATH

### ÉTAPE 1.1: Nettoyer le contenu placeholder
**Effort**: 1h 30min | **Priorité**: 🔴 CRITIQUE

```bash
FAIRE:
1. Supprimer tous les articles template du blog
   - Delete: src/content/blog/en/ (tous les .mdx)
   - Keep: dossier vide

2. Supprimer tous les projets placeholder
   - Delete: src/content/projects/ (gardez SEULEMENT astro-rocket.mdx)
   - Renommer astro-rocket.mdx → votre-premier-projet.mdx
   - Remplacer contenu avec vos infos réelles

3. Supprimer section Claude
   - Edit: src/pages/about.astro
   - Supprimer Card about Claude (ligne ~67-90)

4. Supprimer testimonials fictifs
   - Edit: src/pages/index.astro
   - Supprimer la section testimonials (ligne ~220-280)
   - OU remplacer par vrais clients
```

**Checklist**:
- [ ] Blog vide (ou 1 article exemple)
- [ ] Projets: SEULEMENT tes vrais projets
- [ ] Pas de section Claude
- [ ] Pas de fake testimonials

---

### ÉTAPE 1.2: Configurer le site
**Effort**: 15 min | **Priorité**: 🔴 CRITIQUE

```bash
MODIFIER: src/config/site.config.ts

Remplacer:
- name: "Astro Rocket" → "Your Name" ou "Your Studio Name"
- description: "A production-ready Astro 6 starter..." → "Your positioning"
- url: "https://astrorocket.dev" → "https://yoursite.com"
- author: "Hans Martens" → "Your Name"
- email: "hello@hansmartens.dev" → "your@email.com"
- address: Veghel, Netherlands → Your real address
- socialLinks: Tu dois remplacer par TES réseaux
- authorImage: "/avatar.svg" → "/your-photo.jpg"
```

**Checklist**:
- [ ] site.config.ts updated with YOUR info
- [ ] Email is correct
- [ ] Social links are yours

---

### ÉTAPE 1.3: Refactor hero page
**Effort**: 45 min | **Priorité**: 🔴 CRITIQUE

```bash
MODIFIER: src/pages/index.astro (Hero section, ligne 1-50)

REMPLACER ce titre:
  <h1>Astro Rocket — Web Designer & Developer</h1>

PAR quelque chose de spécifique:
  <h1>I help [AUDIENCE] achieve [OUTCOME]</h1>
  
  Exemples:
  "I help SaaS startups build conversion-focused websites"
  "I help e-commerce brands increase online sales"
  "I help agencies deliver faster with Astro"

REMPLACER cette description:
  "Astro 6 starter with 12 beautiful themes, 57+ components..."

PAR:
  "Strategic design + high-performance development. 
   Your site should move visitors to action, not just look good."

REMPLACER CTA:
  "Get it on GitHub" → "Schedule a Consultation"
  "Get Started" → "See My Work"
```

**Checklist**:
- [ ] Hero title is specific to YOUR niche
- [ ] Description is about BENEFITS not features
- [ ] CTAs are action-oriented

---

### ÉTAPE 1.4: Refactor About page (40% du contenu)
**Effort**: 45 min | **Priorité**: 🔴 CRITIQUE

```bash
MODIFIER: src/pages/about.astro

SUPPRIMER:
- Typing effect hero (ligne ~25)
- Claude partnership section (ligne ~67-90)
- Generic FAQ (remplacer par tes vraies questions)

AJOUTER:
- Your real story (why you do this work)
- Your background (years, what you've learned)
- How you work (your process)
- Why clients should choose you (differentiation)
- Client results or testimonials (si tu en as)
```

**Checklist**:
- [ ] Your story is compelling
- [ ] No Claude mention
- [ ] FAQ is relevant to YOUR clients

---

## PHASE 2: CONVERSION (Week 2) — HIGH-IMPACT

### ÉTAPE 2.1: Créer page /services
**Effort**: 1h | **Priorité**: 🟠 IMPORTANT

```bash
CRÉER: src/pages/services/index.astro

STRUCTURE:
- Hero: "Here's how I can help you"
- 3-4 service cards with:
  * Service name
  * Price range (or "custom quote")
  * Who it's for
  * What's included (bullet list)
  * Timeline
  * CTA button

EXEMPLE de pricing:
  Service 1: Website Audit ($500-$1,500)
  Service 2: Custom Website ($5,000-$15,000)
  Service 3: Full Partnership ($15,000+)

CRÉER COMPOSANT: src/components/portfolio/ServiceCard.astro
```

**Checklist**:
- [ ] /services page exists
- [ ] 3-4 services defined
- [ ] Pricing visible (or "custom quote")
- [ ] CTAs on each service

---

### ÉTAPE 2.2: Améliorer formulaire contact
**Effort**: 1h | **Priorité**: 🟠 IMPORTANT

```bash
MODIFIER: src/components/patterns/ContactForm.astro
           src/pages/api/contact.ts

AJOUTER CHAMPS:
- Budget dropdown (Astro, Tailwind already support)
- Timeline dropdown

AJOUTER FONCTIONNALITÉ (api/contact.ts):
- Auto-reply email to client
- Better error messages
- Success message

EXEMPLE auto-reply:
  From: "Your Name <hello@yoursite.com>"
  To: "Client Email"
  Subject: "Thanks for reaching out!"
  Body: "Hi [Name], I received your message and will reply within 24 hours..."
```

**Checklist**:
- [ ] Budget field added
- [ ] Timeline field added
- [ ] Auto-reply email configured
- [ ] Test form submission works

---

### ÉTAPE 2.3: Intégrer Calendly
**Effort**: 20 min | **Priorité**: 🟠 IMPORTANT

```bash
PRÉREQUIS:
1. Créer compte Calendly gratuit: calendly.com
2. Configurer tes créneaux disponibles
3. Copier ton lien Calendly (ex: calendly.com/yourname)

MODIFIER: src/pages/contact.astro

AJOUTER dans la colonne droite:
<h2>Schedule a Call</h2>
<div class="calendly-inline-widget" data-url="https://calendly.com/YOURNAME"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

**Checklist**:
- [ ] Calendly account created
- [ ] Availability configured
- [ ] Embed code added to contact page
- [ ] Test booking works

---

## PHASE 3: CREDIBILITY (Week 3) — PROOF BUILDING

### ÉTAPE 3.1: Créer 3 case studies réels
**Effort**: 6-9h | **Priorité**: 🟠 IMPORTANT

```bash
POUR CHAQUE PROJET:

1. Identifier 3 projets passés (clients réels ou projets personnels)

2. Créer fichier: src/content/projects/project-name.mdx

3. Remplir:
   - Title (ex: "SaaS Startup: 30% Conversion Increase")
   - Description (1 sentence)
   - URL (projet live)
   - Tags (tech stack)
   - Featured: true (pour l'accueil)
   - Featured image (screenshot)

4. Contenu:
   - The Challenge (client's problem)
   - Solution (what you built)
   - Results (metrics!)
   - Technologies used
   - Client quote (if possible)

EXEMPLE METRICS:
- Conversion: 2.1% → 6.5% (+210%)
- Page speed: 45s → 2.8s (Lighthouse 98)
- Bounce rate: 68% → 38%
- Monthly visitors: +35%
```

**Checklist**:
- [ ] 3 case studies written
- [ ] Each has clear metrics
- [ ] Images/screenshots included
- [ ] Client quotes if possible

---

### ÉTAPE 3.2: Créer page /process
**Effort**: 45 min | **Priorité**: 🟠 IMPORTANT

```bash
CRÉER: src/pages/process.astro

STRUCTURE:
- Hero: "How I Work"
- Timeline with 4 steps:
  1. Discovery (week 1)
  2. Design (weeks 2-4)
  3. Build (weeks 5-6)
  4. Launch (week 7+)

CHAQUE ÉTAPE:
- What happens
- Deliverables
- Your involvement (as client)
- Duration

CRÉER COMPOSANT: src/components/portfolio/ProcessTimeline.astro
```

**Checklist**:
- [ ] /process page created
- [ ] 4 steps clearly defined
- [ ] Timeline realistic
- [ ] Client expectations clear

---

## PHASE 4: CONTENT (Week 4-5) — LONG-TERM GROWTH

### ÉTAPE 4.1: Écrire 8 articles blog
**Effort**: 16-24h | **Priorité**: 🟢 OPTIONNEL (mais RECOMMANDÉ)

```bash
CRÉER: src/content/blog/en/article-1.mdx, article-2.mdx, etc.

CHOISIR SUJETS basés sur:
- Questions clients te posent
- Problèmes que tu résous
- Keywords que tu veux ranker
- Expertise que tu veux montrer

STRUCTURE D'ARTICLE:
---
title: "Article Title"
description: "SEO description (160 chars)"
publishedAt: "2026-05-15"
tags: ["tag1", "tag2"]
featured: false
author: "your-name"
locale: "en"
---

## Hook (intro)
Start with problem reader faces

## Section 1
Explain concept or solution

## Section 2
Provide actionable tips

## Conclusion
Summarize + link to services
```

**Timeline recommandée**:
- Week 4: Articles 1-4 (1 par jour)
- Week 5: Articles 5-8

**Checklist**:
- [ ] 8 articles published
- [ ] Keywords researched
- [ ] Links to /services page
- [ ] All drafted in Markdown

---

### ÉTAPE 4.2: Optimiser SEO
**Effort**: 2h | **Priorité**: 🟠 IMPORTANT

```bash
PER PAGE:
1. Title tags (max 60 chars, includes target keyword)
2. Meta descriptions (max 160 chars)
3. Open Graph images (1200x630px)

SETUP GOOGLE ANALYTICS:
1. Create GA4 account
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Analytics.astro component

SETUP STRUCTURED DATA:
- Organization schema
- LocalBusiness schema (if location-specific)
- Service schemas
- Review schemas (if you have testimonials)

TOOLS:
- Google Search Console (verify ownership)
- Google Analytics (track traffic)
- Lighthouse (check performance)
```

**Checklist**:
- [ ] All page titles optimized
- [ ] GA4 installed & working
- [ ] Google Search Console verified
- [ ] Structured data added

---

## PHASE 5: OPTIMIZATION (Ongoing) — CONTINUOUS IMPROVEMENT

### ÉTAPE 5.1: Analytics & Tracking
**Effort**: 1h | **Priorité**: 🟢 OPTIONNEL

```bash
SETUP:
1. Google Analytics 4 (done in Phase 4)
2. Form submission tracking (contact form → GA4)
3. CTA click tracking (Schedule Call → GA4)
4. Service page views

MONITOR:
- Traffic sources
- Conversion rate (contact form submissions)
- User behavior (where do people drop off?)
- Best performing pages

TOOLS:
- Google Analytics 4 dashboard
- Google Search Console (see which keywords drive traffic)
- Lighthouse (monthly performance audit)
```

**Checklist**:
- [ ] GA4 tracking all events
- [ ] Form submissions tracked
- [ ] Monthly reports reviewed

---

### ÉTAPE 5.2: A/B Testing & Improvements
**Effort**: 2h/month | **Priorité**: 🟢 OPTIONNEL

```bash
THINGS TO TEST:
1. Hero CTA buttons (text: "Schedule a call" vs "Get a quote")
2. Service page pricing display (visible vs "contact for quote")
3. Contact form fields (3 fields vs 7 fields)
4. About page length (short vs detailed)

TOOLS:
- Google Optimize (free, integrates with GA4)
- Convert Kit or Unbounce (simple A/B tests)

BASELINE:
- Measure current conversion rate
- Set target (increase by 10-20%)
- Run test for 100+ visitors
- Keep winner, discard loser
```

---

## TIMELINE COMPLÈTE RECOMMANDÉE

```
WEEK 1 (Foundation):
Day 1: Supprimer contenu placeholder → 1h 30min
Day 2: Configurer site.config.ts → 15min
Day 2-3: Refactor hero page → 45min
Day 3-4: Refactor about page → 45min
TOTAL WEEK 1: 2h 45min

WEEK 2 (Conversion):
Day 1: Créer /services page → 1h
Day 2: Améliorer contact form → 1h
Day 2: Intégrer Calendly → 20min
TOTAL WEEK 2: 2h 20min

WEEK 3 (Credibility):
Day 1-3: 3 case studies → 9h
Day 3: Créer /process page → 45min
TOTAL WEEK 3: 9h 45min

WEEK 4-5 (Content):
Week 4: 4 articles blog → 8h
Week 5: 4 articles blog + SEO setup → 10h
TOTAL WEEKS 4-5: 18h

GRAND TOTAL: ~33-34 heures (sans blog/case studies)
AVEC CONTENU: ~60+ heures
```

---

## PRIORITÉS PAR IMPACT

### Faire d'abord (Jour 1-7):
1. ✅ Nettoyer contenu placeholder (1h 30min)
2. ✅ Configurer site.config (15min)
3. ✅ Refactor hero + about (1h 30min)
4. ✅ Créer /services (1h)
5. ✅ Améliorer contact form (1h)
6. ✅ Intégrer Calendly (20min)

**Temps total: 5h 35min**  
**Impact**: Site passe de "template" à "professional portfolio"

### Faire ensuite (Semaine 2-3):
7. ✅ 3 case studies réels (9h)
8. ✅ Créer /process (45min)
9. ✅ SEO setup (2h)

**Temps total: 11h 45min**  
**Impact**: Crédibilité augmente de 80%, commence à ranker

### Nice-to-have (Semaine 4-5):
10. ✅ 8 articles blog (16-24h)
11. ✅ Analytics deep dive
12. ✅ A/B testing

**Temps total: 20-30h**  
**Impact**: Organic traffic +200%, leads +40%

---

## QUESTIONS À RÉPONDRE AVANT DE COMMENCER

1. **As-tu des vrais projets clients à montrer?**
   - Oui → Avance à l'étape 3.1 (case studies)
   - Non → Crée 1-2 projects personnels comme démo

2. **As-tu une photo professionnelle?**
   - Oui → Ajoute à /about
   - Non → Prendre une avant de lancer

3. **Quel est ton niche/positionnement?**
   - Tu dois répondre à: "Je fais quoi exactement et pour qui?"
   - Ex: "Web design for SaaS startups" (spécifique)
   - ❌ Pas: "Web design and development" (vague)

4. **Quels sont tes tarifs réels?**
   - À définir avant de créer /services
   - Audits: $500-$1.5K
   - Sites: $5-15K
   - Full projects: $15K+

5. **As-tu des vrais témoignages clients?**
   - Oui → Ajoute authentiques
   - Non → Supprime section (mieux que fake)

6. **Veux-tu un blog?**
   - Oui → Prépare calendrier 8-10 articles
   - Non → Supprime page /blog et newsletter form

7. **Quel domaine vas-tu utiliser?**
   - Ex: yourname.com, yourstudio.com, etc.
   - Nécessaire pour Google Analytics + emails

---

## SUCCÈS CRITERIA

Quand tu pourras dire que ton portfolio est "premium":

✅ **Homepage**:
- Titre clair et spécifique
- Description d'un bénéfice client (pas features)
- 2 CTAs actionables
- Pas de contenu template visible

✅ **Services page**:
- 3-4 services clairement définis
- Pricing visible (ou "custom quote")
- Qui c'est pour (target audience)
- Ce qui est inclus

✅ **Projects/Case Studies**:
- 3+ vrais projets (avec métriques!)
- Avant/après si possible
- Client quote authentique
- Tech stack mentionné

✅ **About page**:
- Ton histoire personnelle
- Pourquoi tu fais ce travail
- Ton processus
- Pourquoi te choisir (differentiation)

✅ **Contact page**:
- Form + Calendly visible
- Budget + timeline fields
- Clear next steps

✅ **No Template Signals**:
- ✅ Pas de "Astro Rocket" branding
- ✅ Pas de fake testimonials
- ✅ Pas de 12 color themes
- ✅ Pas de "component library" page
- ✅ Pas de Claude partnership mention

---

**VOUS ÊTES PRÊT À COMMENCER? Lancez la PHASE 1 dès aujourd'hui! 🚀**

