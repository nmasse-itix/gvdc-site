# Site web — Gymnastique Volontaire de Conches-en-Ouche

Site statique Bootstrap 5 de l'association **Gymnastique Volontaire de Conches-en-Ouche** (association n° 27015, affiliée FFEPGV).

---

## Accès rapides

| Ressource | URL |
|---|---|
| Site en ligne | https://gym-vitalite-conches.netlify.app |
| Tableau de bord Netlify | https://app.netlify.com |
| Dépôt GitHub | https://github.com/nmasse-itix/gvdc-site |
| Espace FFEPGV | https://ffepgv.fr/ |
| Page Intramuros | https://www.conches-en-ouche.fr/associations/175709 |

---

## Structure du dépôt

```
gvdc-site/
├── public/                  ← Dossier publié par Netlify
│   ├── index.html           ← Page unique du site (Bootstrap 5)
│   ├── visuel-club.png      ← Logo/silhouette du club (navbar)
│   ├── logo.png             ← Badge Label Qualité Sport-Santé FFEPGV
│   ├── logo-ffsv.jpeg       ← Logo Fédération Française Sport Vitalité
│   ├── logo-cc-conches.png  ← Logo Communauté de Communes du Pays de Conches
│   ├── infos-utiles4.png    ← Infographie recommandations activité physique
│   ├── photo-gym1.png       ← Photo galerie (séance détente)
│   └── photo-gym2.jpeg      ← Photo galerie (séance renforcement)
│
├── netlify.toml             ← Configuration Netlify
└── README.md                ← Ce fichier
```

> **Règle importante** : seul le dossier `public/` est déployé. Tout fichier ajouté à la racine du dépôt reste privé et n'est pas accessible sur le site.

---

## Déploiement

Le site est hébergé sur **Netlify** avec déploiement continu : chaque `git push` sur la branche `main` déclenche automatiquement une mise en ligne.

### Première installation (à faire une seule fois)

```bash
git clone git@github.com:nmasse-itix/gvdc-site.git
cd gvdc-site
```

### Publier une modification

```bash
git add public/index.html          # ou les fichiers modifiés
git commit -m "Description du changement"
git push
```

Netlify déploie en 1 à 2 minutes. Le statut du déploiement est visible sur https://app.netlify.com.

### Tester en local avant de publier

```bash
cd gvdc-site
python3 -m http.server 8080 --bind 0.0.0.0 --directory public
```

Puis ouvrir http://localhost:8080 dans un navigateur.

---

## Modifier le contenu du site

Tout le contenu est dans **`public/index.html`**. Le fichier est organisé en sections clairement délimitées par des commentaires :

```
<!-- NAVBAR       -->
<!-- HERO         -->   ← Accueil
<!-- À PROPOS     -->
<!-- ACTIVITÉS    -->   ← Horaires
<!-- TARIFS       -->
<!-- GALERIE      -->
<!-- ACTUALITÉS   -->
<!-- CONTACT      -->
<!-- FOOTER       -->
```

### Mettre à jour les horaires

Chercher la section `id="activites"` et modifier les blocs `.schedule-card` (jour, heure, salle, ville).

### Mettre à jour les tarifs

Chercher la section `id="tarifs"` et modifier les valeurs dans les `.price-amount` et la liste des avantages.

### Mettre à jour les contacts

Chercher la section `id="contact"` et modifier les noms, titres et numéros de téléphone dans les `.contact-card`.

### Ajouter une actualité

Chercher la section `id="actualites"` et remplacer le bloc `.p-5.rounded-4.bg-light` (message "Aucune actualité") par une ou plusieurs cartes Bootstrap :

```html
<div class="col-md-6">
  <div class="card shadow-sm p-4">
    <p class="text-muted small mb-1">15 septembre 2025</p>
    <h5 class="fw-bold">Reprise des cours</h5>
    <p>Les cours reprennent le lundi 15 septembre. Bienvenue à tous !</p>
  </div>
</div>
```

### Ajouter une photo à la galerie

1. Copier l'image dans `public/` (formats acceptés : JPG, PNG, WebP).
2. Dans la section `id="galerie"`, dupliquer un bloc `.col-md-6` et adapter le `src` et le `alt`.

```html
<div class="col-md-6">
  <div class="gallery-item shadow">
    <img src="ma-nouvelle-photo.jpg" alt="Description de la photo">
  </div>
</div>
```

> Les images de la galerie sont affichées à **300 px de hauteur**, recadrées automatiquement (CSS `object-fit: cover`). Largeur recommandée : au moins 800 px.

---

## Informations de l'association

| Champ | Valeur |
|---|---|
| Nom complet | Gymnastique Volontaire de Conches-en-Ouche |
| Numéro d'association | 27015 |
| Fédération | FFEPGV (1re fédération non-compétitive, reconnue d'utilité publique) |
| Label | Qualité Club Sport-Santé 2025-2029 |
| Email | gymnastiquevolontaireconches@gmail.com |
| Adresse | 39 bis rue François Décorchemont, 27190 Conches-en-Ouche |

### Bureau

| Rôle | Nom | Téléphone |
|---|---|---|
| Président | Didier MASSÉ | 06 87 75 11 15 |
| Secrétaire | Patricia ODEN | 06 84 44 03 07 |
| Trésorière | Monique LORIEUL | 06 20 17 47 54 |

### Moniteur

**Mathieu DANJEAN** anime l'ensemble des séances.

### Créneaux

| Jour | Horaire | Lieu |
|---|---|---|
| Lundi | 9h00 – 10h00 | Salle Jacques Prévert, 1 rue de la Forge, Conches-en-Ouche |
| Mercredi | 9h00 – 10h00 | Salle des Fêtes, Mairie de Sainte-Marthe |
| Vendredi | 9h00 – 10h00 | Salle Jacques Prévert, 1 rue de la Forge, Conches-en-Ouche |

Séances hors congés scolaires.

### Tarifs 2025-2026

| Poste | Montant |
|---|---|
| Licence FFEPGV (obligatoire) | 29,80 € |
| Cotisation 1 cours / semaine | 100,00 € |
| Cotisation 2 cours / semaine | 155,00 € |

---

## Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| [Bootstrap](https://getbootstrap.com) | 5.3.3 | Framework CSS/JS (chargé via CDN) |
| [Bootstrap Icons](https://icons.getbootstrap.com) | 1.11.3 | Icônes (chargées via CDN) |
| Netlify | — | Hébergement et déploiement continu |
| GitHub | — | Dépôt de code source |

Le site ne nécessite **aucun serveur**, **aucune base de données** et **aucune dépendance Node.js**. Toute modification se fait directement dans `public/index.html`.

---

## Charte graphique

| Élément | Valeur |
|---|---|
| Couleur principale (violet) | `#5B3FA6` |
| Couleur secondaire (bleu-vert) | `#00A8C6` |
| Fond clair | `#f5f2fb` |
| Police | Système (Bootstrap par défaut) |

Les couleurs sont définies en variables CSS au début du bloc `<style>` de `index.html` :

```css
:root {
    --gvdc-purple: #5B3FA6;
    --gvdc-teal:   #00A8C6;
    --gvdc-light:  #f5f2fb;
}
```
