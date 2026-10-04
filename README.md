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
| Édition des tarifs et contacts (Pages CMS) | https://app.pagescms.org |

---

## Structure du dépôt

```
gvdc-site/
├── src/                     ← Sources du site
│   ├── index.njk            ← Page unique du site (Bootstrap 5, gabarit Nunjucks)
│   ├── _data/               ← Données modifiables via Pages CMS
│   │   ├── saison.yml       ← Saison en cours, licence et cotisations
│   │   └── contacts.yml     ← Bureau, adresse postale, email
│   ├── visuel-club.png      ← Logo/silhouette du club (navbar)
│   ├── logo.png             ← Badge Label Qualité Sport-Santé FFEPGV
│   ├── logo-ffsv.jpeg       ← Logo Fédération Française Sport Vitalité
│   ├── logo-cc-conches.png  ← Logo Communauté de Communes du Pays de Conches
│   ├── infos-utiles4.png    ← Infographie recommandations activité physique
│   ├── photo-gym1.png       ← Photo galerie (séance détente)
│   └── photo-gym2.jpeg      ← Photo galerie (séance renforcement)
│
├── .pages.yml               ← Configuration des formulaires Pages CMS
├── eleventy.config.js       ← Configuration Eleventy (générateur du site)
├── package.json             ← Dépendances Node.js (Eleventy)
├── netlify.toml             ← Configuration Netlify (build + en-têtes)
└── README.md                ← Ce fichier
```

> **Règle importante** : Netlify génère le site dans `_site/` à partir de `src/`. Seuls la page et les images de `src/` sont publiées ; les fichiers à la racine du dépôt et les données brutes de `src/_data/` ne sont pas accessibles sur le site.

---

## Déploiement

Le site est hébergé sur **Netlify** avec déploiement continu : chaque `git push` (ou chaque enregistrement dans Pages CMS) sur la branche `main` déclenche automatiquement la génération du site par Eleventy (`npm run build`) puis sa mise en ligne.

### Première installation (à faire une seule fois)

```bash
git clone git@github.com:nmasse-itix/gvdc-site.git
cd gvdc-site
npm install
```

Prérequis : Node.js 18 ou plus récent (Netlify utilise Node.js 22).

### Publier une modification

```bash
git add src/index.njk              # ou les fichiers modifiés
git commit -m "Description du changement"
git push
```

Netlify déploie en 1 à 2 minutes. Le statut du déploiement est visible sur https://app.netlify.com.

### Tester en local avant de publier

```bash
cd gvdc-site
npm start
```

Puis ouvrir http://localhost:8080 dans un navigateur. La page se recharge automatiquement à chaque modification.

---

## Mettre à jour les tarifs, la saison et les contacts (sans compétence technique)

La saison en cours, les tarifs, les membres du bureau, l'adresse postale et l'email se modifient depuis **[Pages CMS](https://app.pagescms.org)**, une interface web gratuite qui enregistre les modifications dans le dépôt GitHub à votre place.

### Accès (à faire une seule fois)

1. La personne chargée des mises à jour crée un compte gratuit sur https://github.com.
2. Un administrateur du dépôt l'invite comme collaboratrice : sur GitHub, *Settings → Collaborators → Add people*. Elle accepte l'invitation reçue par email.
3. Elle se connecte sur https://app.pagescms.org avec *Sign in with GitHub* et choisit le dépôt `gvdc-site` (à la première connexion, Pages CMS demande d'autoriser l'accès au dépôt).

### Faire une modification

1. Ouvrir https://app.pagescms.org et choisir le dépôt `gvdc-site`.
2. Dans le menu de gauche, choisir **Saison et tarifs** ou **Contacts**.
3. Modifier les champs :
   - **Saison en cours** : au format `2026-2027`.
   - **Prix** : sans le symbole €, par exemple `29,80` ou `100`.
   - **Cotisations** et **Membres du bureau** : le bouton *Add* ajoute une entrée, la corbeille la supprime, et les poignées permettent de changer l'ordre d'affichage.
   - **Téléphone** : au format `06 12 34 56 78`.
4. Cliquer sur **Save**.
5. Le site en ligne est à jour **1 à 2 minutes plus tard**. Recharger la page pour vérifier.

> En cas d'erreur, rien n'est perdu : chaque enregistrement est conservé dans l'historique GitHub et peut être annulé par un administrateur.

---

## Modifier le reste du contenu (développeurs)

La mise en page et les autres textes sont dans **`src/index.njk`** (HTML + balises [Nunjucks](https://mozilla.github.io/nunjucks/) `{{ … }}` / `{% … %}` qui insèrent les données de `src/_data/`). Le fichier est organisé en sections clairement délimitées par des commentaires :

```
<!-- NAVBAR       -->
<!-- HERO         -->   ← Accueil
<!-- À PROPOS     -->
<!-- ACTIVITÉS    -->   ← Horaires
<!-- TARIFS       -->   ← données : src/_data/saison.yml
<!-- GALERIE      -->
<!-- ACTUALITÉS   -->
<!-- CONTACT      -->   ← données : src/_data/contacts.yml
<!-- FOOTER       -->
```

Pour rendre un nouvel élément modifiable dans Pages CMS : l'ajouter dans un fichier de `src/_data/`, l'utiliser dans `src/index.njk`, puis déclarer le champ correspondant dans `.pages.yml` ([documentation](https://pagescms.org/docs/configuration/)).

### Mettre à jour les horaires

Chercher la section `id="activites"` et modifier les blocs `.schedule-card` (jour, heure, salle, ville).

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

1. Copier l'image dans `src/` (formats acceptés : JPG, PNG, WebP).
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

Saison, tarifs, bureau, adresse postale et email : voir `src/_data/saison.yml` et `src/_data/contacts.yml` (ou Pages CMS).

### Moniteur

**Mathieu DANJEAN** anime l'ensemble des séances.

### Créneaux

| Jour | Horaire | Lieu |
|---|---|---|
| Lundi | 9h00 – 10h00 | Salle Jacques Prévert, 1 rue de la Forge, Conches-en-Ouche |
| Mercredi | 9h00 – 10h00 | Salle des Fêtes, Mairie de Sainte-Marthe |
| Vendredi | 9h00 – 10h00 | Salle Jacques Prévert, 1 rue de la Forge, Conches-en-Ouche |

Séances hors congés scolaires.

---

## Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| [Bootstrap](https://getbootstrap.com) | 5.3.3 | Framework CSS/JS (chargé via CDN) |
| [Bootstrap Icons](https://icons.getbootstrap.com) | 1.11.3 | Icônes (chargées via CDN) |
| [Eleventy](https://www.11ty.dev) | 3.x | Générateur de site statique (assemble la page et les données) |
| [Pages CMS](https://pagescms.org) | — | Interface d'édition des données (gratuite, sans hébergement) |
| Netlify | — | Hébergement, génération et déploiement continu |
| GitHub | — | Dépôt de code source |

Le site ne nécessite **aucun serveur** ni **aucune base de données** : Eleventy produit une page HTML statique au moment du déploiement, et Pages CMS se contente de modifier les fichiers YAML du dépôt.

---

## Charte graphique

| Élément | Valeur |
|---|---|
| Couleur principale (violet) | `#5B3FA6` |
| Couleur secondaire (bleu-vert) | `#00A8C6` |
| Fond clair | `#f5f2fb` |
| Police | Système (Bootstrap par défaut) |

Les couleurs sont définies en variables CSS au début du bloc `<style>` de `src/index.njk` :

```css
:root {
    --gvdc-purple: #5B3FA6;
    --gvdc-teal:   #00A8C6;
    --gvdc-light:  #f5f2fb;
}
```
