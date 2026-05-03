# 📚 Guide d'Ajout de Contenu - Portfolio Developer Web

## 🚀 Ajouter un Nouveau Projet

### 1. Créer le fichier de projet
Créez un nouveau fichier dans `src/content/projects/` :
```bash
src/content/projects/mon-projet.mdx
```

### 2. Structure du frontmatter
```yaml
---
title: "Nom du Projet"
description: "Description courte du projet (1-2 phrases)"
url: "https://exemple-projet.com"
repo: "https://github.com/username/projet"
tags: ["Astro", "React", "TypeScript"]
featured: true  # Mettre false si non mis en avant
order: 1         # Ordre d'affichage
year: 2026
role: "Développeur Full Stack"
services: ["Développement Web", "Design UX"]
image: "../../assets/projects/mon-projet.jpg"
---
```

### 3. Contenu du projet
```mdx
## 📋 À propos du projet

Description détaillée du projet, objectifs, contexte...

## 🛠️ Fonctionnalités principales

- **Fonctionnalité 1** : Description
- **Fonctionnalité 2** : Description
- **Fonctionnalité 3** : Description

## 🎯 Stack technique

- **Frontend** : Astro 6 + React 19 + TypeScript
- **Backend** : Node.js + Express
- **Base de données** : PostgreSQL
- **Déploiement** : Vercel

## 📊 Performance et accessibilité

- **Score Lighthouse** : 95+
- **WCAG 2.1 AA** : Conforme
- **SEO optimisé** : Meta tags, sitemap

## 🔗 Liens utiles

- [Démo en ligne](url)
- [Code source](repo)
```

### 4. Ajouter une image
Placez l'image dans `src/assets/projects/` :
```bash
src/assets/projects/mon-projet.jpg
```

## 📝 Ajouter un Article de Blog

### 1. Créer le fichier d'article
Créez un nouveau fichier dans `src/content/blog/` :
```bash
src/content/blog/mon-article.mdx
```

### 2. Structure du frontmatter
```yaml
---
title: "Titre de l'Article"
description: "Description de l'article"
publishDate: 2026-05-02
updateDate: 2026-05-02
author: "Votre Nom"
tags: ["Astro", "Performance", "Web Development"]
featured: true  # Mettre false si non mis en avant
image: "../../assets/blog/mon-article.jpg"
imageAlt: "Description de l'image"
draft: false   # Mettre true pour brouillon
---
```

### 3. Contenu de l'article
```mdx
import Image from '@/components/ui/primitives/Image/Image.astro';

## 🎯 Introduction

Contenu d'introduction de l'article...

## 📸 Illustration

<Image 
  src="../../assets/blog/illustration.jpg" 
  alt="Description de l'image" 
  widths={[640, 960, 1280]} 
/>

## 🔬 Section principale

Contenu détaillé avec exemples de code...

```js
// Exemple de code
const example = 'Hello World';
console.log(example);
```

## 📊 Conclusion

Résumé et points clés à retenir...
```

## 🎨 Personnalisation du Design

### 1. Thèmes de couleurs
Le projet utilise 12 thèmes prédéfinis. Pour personnaliser :
- Modifiez `src/styles/themes.css`
- Ajoutez vos variables CSS personnalisées

### 2. Composants réutilisables
```astro
<!-- Utiliser un composant Card -->
<Card variant="elevated" padding="lg">
  <h3>Titre</h3>
  <p>Contenu</p>
</Card>

<!-- Utiliser un Badge -->
<Badge variant="brand" pill>Nouveau</Badge>

<!-- Utiliser une Icon -->
<Icon name="rocket" size="md" />
```

## 📱 Bonnes Pratiques

### Images
- **Toujours utiliser le composant `<Image>`** d'Astro
- **Ajouter un alt descriptif** (jamais alt="")
- **Optimiser les dimensions** : widths={[640, 960, 1280]}
- **Placer les images** dans `src/assets/`

### SEO
- **Un seul H1 par page**
- **Hiérarchie logique** : H1 → H2 → H3
- **Meta descriptions** uniques
- **URLs parlantes**

### Accessibilité
- **Navigation au clavier** : tabindex logique
- **Contrastes WCAG AA** : ratio 4.5:1 minimum
- **Labels des formulaires** : jamais de placeholder seul

### Performance
- **Lazy loading** : images hors viewport
- **Pas de scripts bloquants**
- **Fonts locales** ou font-display: swap

## 🚀 Déploiement

### 1. Build
```bash
npm run build
```

### 2. Pré-déploiement
- Vérifier Lighthouse > 90
- Tester en navigation privée
- Valider tous les liens

### 3. Hostinger
- Upload du dossier `dist/`
- Configuration du domaine
- Vérification HTTPS

## 🔧 Maintenance

### Mise à jour des dépendances
```bash
npm audit
npm update
```

### Surveillance
- Google Analytics (si activé)
- Core Web Vitals
- Performance monitoring

## 📞 Support

Pour toute question sur l'ajout de contenu :
1. Vérifier la structure des fichiers existants
2. Consulter les composants dans `src/components/`
3. Tester en local avant déploiement

---

**Rappel** : Le projet est configuré pour des performances optimales avec Lighthouse > 90 et une sécurité stricte (CSP).
