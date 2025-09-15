# SportSee - Tableau de Bord Analytics Sportif

![SportSee Logo](./src/assets/logo/logo.png)

SportSee est une application web moderne de suivi et d'analyse de performances sportives, développée en React avec Vite. Elle fournit un tableau de bord interactif permettant aux utilisateurs de visualiser leurs activités, performances et objectifs à travers des graphiques riches et intuitifs.

## 🚀 Fonctionnalités

### Dashboard Interactif

- **Vue d'ensemble personnalisée** : Tableau de bord adapté à chaque utilisateur
- **Métriques nutritionnelles** : Suivi des calories, protéines, glucides et lipides
- **Message de bienvenue** personnalisé avec prénom utilisateur

### Graphiques de Performance

- **Activité quotidienne** : Graphique en barres combiné (poids + calories brûlées)
- **Sessions d'entraînement** : Courbe lissée des durées moyennes par jour
- **Performance radar** : Visualisation hexagonale des capacités sportives
- **Score d'objectif** : Graphique circulaire du pourcentage de réalisation

### Architecture Technique

- **Mode dual** : Basculement entre données API réelles et données mockées
- **Normalisation automatique** : Gestion des inconsistances de schéma API
- **Hooks personnalisés** : Gestion avancée des états de chargement et d'erreur
- **Transformateurs de données** : Logique pure de formatage pour graphiques
- **Architecture modulaire** : Services organisés par responsabilité (api/, data/, transformers/, hooks/)
- **Design responsive** : Optimisé pour les résolutions 1024x720 à 1440x1024
- **Routage dynamique** : Navigation multi-utilisateurs avec React Router

## 🛠️ Technologies

| Technologie | Version | Usage |
|-------------|---------|--------|
| **React** | 19.1.1 | Framework UI avec hooks modernes |
| **Vite** | 7.1.2 | Build tool et serveur de développement |
| **React Router** | 7.8.1 | Routage côté client |
| **Recharts** | 3.1.2 | Bibliothèque de graphiques |
| **ESLint** | 9.33.0 | Linting et qualité du code |

## 📦 Installation

### Prérequis

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 ou **yarn** ≥ 1.22.0

### Backend API (Optionnel)

Pour utiliser l'application avec de vraies données API, vous devez installer le backend SportSee :

**Repository officiel :** [SportSee Backend](https://github.com/OpenClassrooms-Student-Center/SportSee)

**Prérequis backend :**

- **Node.js** ≥ 12.18 (testé jusqu'à Node 20.0)
- **Yarn** (gestionnaire de paquets)
- **Docker Desktop** (optionnel, pour conteneurisation)

**Installation sans Docker :**

```bash
# Cloner le repository backend
git clone https://github.com/OpenClassrooms-Student-Center/SportSee.git sportsee-backend
cd sportsee-backend

# Installer les dépendances
yarn

# Démarrer le serveur de développement
yarn dev
# Le backend sera accessible sur http://localhost:3000
```

**Installation avec Docker :**

```bash
# Construire l'image Docker
docker image build --no-cache -t micro-api .

# Créer et lancer le conteneur
docker container run --name micro-api -p 3000:3000 -dt micro-api yarn

# Arrêter le conteneur
docker container stop micro-api

# Supprimer le conteneur
docker container rm micro-api
```

> **Note** : Le backend est optionnel. L'application fonctionne parfaitement en mode mock avec des données de démonstration.

**Utilisateurs disponibles :** Le backend ne contient que 2 utilisateurs mockés (ID: 12 et 18).

### Installation des dépendances

```bash
# Cloner le repository
git clone <repository-url>
cd sportsee

# Installer les dépendances
npm install
# ou
yarn install
```

## 🚦 Lancement de l'Application

### Mode Développement

```bash
# Démarrage du serveur de développement
npm run dev
# ou
yarn dev
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

### Scripts Disponibles

```bash
# Développement avec hot reload
npm run dev

# Build de production
npm run build

# Linting du code
npm run lint

# Prévisualisation du build
npm run preview

# Démarrage rapide (alias de dev)
npm start
```

## 🗂️ Structure du Projet

```text
sportsee/
├── public/
│   └── fonts/              # Polices Roboto (woff2)
├── src/
│   ├── assets/
│   │   ├── icons/          # Icônes d'activités et nutrition
│   │   └── logo/           # Logo SportSee
│   ├── components/
│   │   ├── charts/         # Composants de graphiques
│   │   │   ├── ActivityChart.jsx      # Graphique d'activité
│   │   │   ├── SessionsChart.jsx      # Graphique de sessions
│   │   │   ├── PerformanceChart.jsx   # Radar de performance
│   │   │   ├── ScoreChart.jsx         # Score circulaire
│   │   │   ├── ActivityTooltip.jsx    # Tooltip personnalisé
│   │   │   ├── charts.css             # Styles des graphiques
│   │   │   └── index.jsx              # Exports centralisés
│   │   ├── Header.jsx      # Navigation principale
│   │   └── Sidebar.jsx     # Barre latérale
│   ├── page/
│   │   ├── Dashboard.jsx   # Page principale
│   │   └── dashboard.css   # Styles du dashboard
│   ├── services/           # Architecture modulaire organisée
│   │   ├── index.js        # Point d'entrée centralisé des services
│   │   ├── api/
│   │   │   └── DataService.js          # Service de données principal unifié
│   │   ├── data/
│   │   │   ├── index.js                # Exports des données et normalisation
│   │   │   ├── DataNormalizer.js       # Normalisation schémas API
│   │   │   └── mockData.js             # Données de démonstration
│   │   ├── transformers/
│   │   │   └── ChartTransformers.js    # Formatage pur pour graphiques
│   │   └── hooks/
│   │       ├── index.js                # Exports des hooks React
│   │       ├── useApiData.js           # Hook générique API avec optimisations
│   │       ├── hooks.js                # Hooks utilisateur basiques
│   │       └── chartHooks.js           # Hooks spécialisés graphiques
│   ├── types/
│   │   └── jsdoc-types.js  # Définitions de types JSDoc
│   ├── App.jsx             # Composant racine simple
│   ├── AppRouter.jsx       # Configuration du routeur
│   ├── main.jsx            # Point d'entrée
│   ├── index.css           # Styles globaux
│   └── normalize.css       # Reset CSS
├── index.html              # Template HTML
├── vite.config.js          # Configuration Vite
├── eslint.config.js        # Configuration ESLint
└── package.json            # Dépendances et scripts
```

## 🎯 Utilisation

### Navigation Multi-Utilisateurs

L'application supporte plusieurs utilisateurs via l'URL :

```bash
# Utilisateur 18 (Cecilia) - Par défaut
http://localhost:5173/user/18

# Utilisateur 12 (Karl)
http://localhost:5173/user/12

# Redirection automatique vers l'utilisateur 18
http://localhost:5173/
```

### Mode Données (Mock vs API)

L'application utilise un système de configuration statique avec normalisation automatique :

#### Mode Mock (Par défaut)

```javascript
// Dans DataService.js
static USE_MOCK_DATA = false; // true = données mockées, false = API réelle
```

**Avantages :**

- Développement rapide sans dépendance backend
- Données cohérentes et testées
- Normalisation appliquée automatiquement
- Deux utilisateurs complets disponibles (ID: 12 et 18)

#### Mode API Réelle

Pour utiliser l'API réelle, modifiez la configuration dans `DataService.js` :

```javascript
// Dans services/api/DataService.js
static USE_MOCK_DATA = false;
```

**Configuration du backend :**

1. Cloner le repository : [SportSee Backend](https://github.com/OpenClassrooms-Student-Center/SportSee)
2. Installer les dépendances : `yarn`
3. Démarrer le serveur : `yarn dev`
4. Le backend sera accessible sur `http://localhost:3000`

> **Note** : Utilisez `yarn` plutôt que `npm` pour le backend, comme recommandé dans la documentation officielle.

#### Normalisation Automatique

Le système **DataNormalizer** traite automatiquement les inconsistances de l'API :

- **Score unifié** : Gère `todayScore` vs `score` selon l'utilisateur
- **Performance mappée** : Convertit les clés numériques en noms lisibles
- **Sessions complètes** : Ajoute les jours manquants avec `sessionLength: 0`
- **Données fallback** : Valeurs par défaut pour éviter les erreurs

La normalisation s'applique **aussi bien aux données mockées qu'aux données API** pour garantir une interface cohérente.

## 📊 API et Données

### Structure des Données

#### Données Utilisateur

```javascript
{
  id: 18,
  userInfos: {
    firstName: "Cecilia",
    lastName: "Ratorez",
    age: 34
  },
  todayScore: 0.3,  // Score entre 0 et 1
  keyData: {
    calorieCount: 2103,
    proteinCount: 132,     // grammes
    carbohydrateCount: 271, // grammes
    lipidCount: 68         // grammes
  }
}
```

#### Données d'Activité

```javascript
{
  userId: 18,
  sessions: [
    {
      day: "2020-07-01",
      kilogram: 70,    // poids en kg
      calories: 300    // calories brûlées
    }
    // ... 7 jours
  ]
}
```

#### Données de Sessions

```javascript
{
  userId: 18,
  sessions: [
    {
      day: 1,          // 1=Lundi, 7=Dimanche
      sessionLength: 45 // durée en minutes
    }
    // ... 7 jours
  ]
}
```

#### Données de Performance

```javascript
{
  userId: 18,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity"
  },
  data: [
    { value: 150, kind: 1 }
    // ... 6 catégories
  ]
}
```

### Endpoints API

Quand `USE_MOCK_DATA = false`, l'application appelle l'API sur `http://localhost:3000` :

**Endpoints disponibles :**

```bash
GET /user/:userId                    # Données utilisateur principales
GET /user/:userId/activity           # Activité quotidienne (poids + calories)
GET /user/:userId/average-sessions   # Sessions moyennes par jour de la semaine
GET /user/:userId/performance        # Performance sportive (6 catégories)
```

**Exemples d'appels :**

```bash
# Informations principales de l'utilisateur 12
http://localhost:3000/user/12

# Activité quotidienne de l'utilisateur 18
http://localhost:3000/user/18/activity

# Sessions moyennes de l'utilisateur 12
http://localhost:3000/user/12/average-sessions

# Performance de l'utilisateur 18
http://localhost:3000/user/18/performance
```

> **⚠️ Important** : Seuls les utilisateurs avec les ID **12** et **18** sont disponibles dans le backend.

## 🏗️ Architecture du Code

### Services Modulaires

L'architecture des services est organisée par responsabilité dans des dossiers séparés :

#### DataService (services/api/)

Service principal gérant l'accès aux données :

- **Configuration statique** mock/API via USE_MOCK_DATA
- **Gestion d'erreurs unifiée** avec fallbacks appropriés
- **Normalisation transparente** appliquée aux deux modes
- **Cache et optimisations** pour les performances

```javascript
// Utilisation simple
import { DataService } from './services/index.js';

const userData = await DataService.getUserById(18);
const activity = await DataService.getUserActivity(18);
```#### DataNormalizer (services/data/)

Système de normalisation automatique des inconsistances API :

```javascript
// Exemples d'inconsistances gérées
// Utilisateur 12: { "todayScore": 0.12 }
// Utilisateur 18: { "score": 0.3 }
// → Toujours accessible via data.score

// Performance avec mapping intelligent
// API: { value: 150, kind: 1 } où kind.1 = "cardio"
// → Normalisé: { value: 150, kind: "cardio" }

// Sessions avec jours manquants
// API: [{ day: 1, sessionLength: 30 }, { day: 3, sessionLength: 45 }]
// → Normalisé: [..., { day: 2, sessionLength: 0 }, ...]
```

#### ChartTransformers (services/transformers/)

Logique pure de formatage des données pour les graphiques, séparée de React :

```javascript
import { ActivityTransformer, SessionsTransformer } from './services/index.js';

// Formatage pour graphique d'activité
const chartData = ActivityTransformer.format(rawActivityData);

// Ajout de points fantômes pour sessions
const withGhosts = SessionsTransformer.addGhostPoints(rawSessionsData);
```

#### Hooks Personnalisés (services/hooks/)

Trois niveaux de hooks pour une architecture flexible :

**Hooks de base (hooks.js) :**
```javascript
useUser(userId)          // Données utilisateur brutes
useUserActivity(userId)  // Activité quotidienne
useUserSessions(userId)  // Sessions moyennes
useUserPerformance(userId) // Données de performance
```

**Hook générique optimisé (useApiData.js) :**
```javascript
const { data, loading, error } = useApiData(
  `/user/${userId}/activity`,
  [userId] // Dépendances avec useRef pour éviter boucles infinies
);
```

**Hooks spécialisés graphiques (chartHooks.js) :**
```javascript
useActivityChart(userId)    // Données formatées pour barres combinées
useSessionsChart(userId)    // Courbe avec points fantômes
usePerformanceChart(userId) // Radar avec données réordonnées
useScoreChart(userId)       // Score en pourcentage
useAllCharts(userId)        // Tous les graphiques optimisés
```

### Optimisations Performances

#### Dashboard avec useMemo
```javascript
// Calculs coûteux mémorisés
const statsData = useMemo(() => ({
  calorieCount: userData?.keyData?.calorieCount ?? 0,
  proteinCount: userData?.keyData?.proteinCount ?? 0,
  carbohydrateCount: userData?.keyData?.carbohydrateCount ?? 0,
  lipidCount: userData?.keyData?.lipidCount ?? 0
}), [userData]);

const firstName = useMemo(() =>
  userData?.userInfos?.firstName ?? 'Utilisateur',
  [userData]
);
```

#### useApiData avec useRef
```javascript
// Évite les boucles infinies de re-rendu
const dependenciesRef = useRef();
const isEqual = JSON.stringify(dependencies) === JSON.stringify(dependenciesRef.current);
```

### Point d'Entrée Centralisé

Le fichier `services/index.js` offre un accès unifié à tous les services :

```javascript
// Import centralisé
import {
  DataService,           // Service principal
  DataNormalizer,        // Normalisation
  ActivityTransformer,   // Transformateurs
  useActivityChart,      // Hooks spécialisés
  useApiData            // Hook générique
} from './services/index.js';
```### Système de Types

Le projet utilise JSDoc avec des types centralisés dans `src/types/jsdoc-types.js` pour :

- **Documentation du code** claire et maintenue
- **IntelliSense amélioré** dans l'éditeur
- **Validation des données** en développement
- **Maintenance facilitée** avec typage explicite

Cette architecture modulaire permet une maintenance aisée, des tests isolés, et une évolutivité optimale du code.

## 🎨 Design et Responsive

### Résolutions Supportées

- **Minimum** : 1024x720px
- **Maximum** : 1440x1024px
- **Spéciales** : 1024x1024px, 1440x780px

### Système CSS

- **Polices** : Roboto (Regular, Medium, Bold)
- **Couleurs** : Rouge SportSee (#E60000), gris (#282D30, #74798C)
- **Layout** : Flexbox et CSS Grid
- **Responsive** : Clamp() et media queries

## ⚙️ Configuration et Environnement

### Variables d'Environnement

```bash
# Mode développement avec API réelle
VITE_USE_REAL_API=true

# Mode production
NODE_ENV=production
```

### Configuration Vite

```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 5173,        // Port de développement
    host: true,        // Accès réseau
    open: false        // Pas d'ouverture auto
  },
  build: {
    sourcemap: true,   // Sourcemaps pour debug
    target: "es2015",  // Compatibilité navigateurs
    outDir: "dist"     // Dossier de build
  }
});
```

### ESLint

Configuration moderne avec :

- **Règles React** : Hooks et refresh
- **ES2020+** : Syntaxe moderne
- **Globals** : Variables navigateur
- **Ignores** : Dossier dist

## 🧪 Développement

### Environnement de Développement

```bash
# Démarrer en mode watch
npm run dev

# Le serveur redémarre automatiquement
# Hot reload activé
# Sourcemaps disponibles
```

### Workflow Recommandé

1. **Développement** : Utiliser le mode mock pour développer rapidement
2. **Tests d'intégration** : Basculer vers l'API réelle
3. **Debug** : Utiliser les sourcemaps et React DevTools
4. **Build** : Tester le build de production localement

### Hooks de Développement

```javascript
// Debug des données
const { data, loading, error } = useUser(18);
console.log('Mode actuel:', DataService.getCurrentMode());

// Test des erreurs
const { data, loading, error } = useActivityChart(999); // Utilisateur inexistant
```

## 🐛 Dépannage

### Problèmes Courants

#### Port déjà utilisé

```bash
# Changer le port dans vite.config.js
server: { port: 3001 }

# Ou utiliser un port libre
npm run dev -- --port 3001
```

#### Données non chargées

```javascript
// Vérifier le mode
console.log(DataService.getCurrentMode());

// En mode API, vérifier le serveur backend
// En mode mock, vérifier les données dans mockData.js
```

#### Erreurs de build

```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install

# Vérifier ESLint
npm run lint
```

### Debug avec les DevTools

1. **React DevTools** : Inspecter les composants et hooks
2. **Network Tab** : Vérifier les appels API (mode API uniquement)
3. **Console** : Messages d'erreur et logs de debug

## 📄 Licence

Ce projet est développé dans le cadre d'une formation OpenClassrooms.

## 👥 Équipe

- **Développement** : Équipe SportSee
- **Design** : Spécifications Figma
- **Documentation** : JSDoc complète

---

**SportSee** - Tableau de bord analytics sportif moderne

[🚀 Démarrer](#-installation) • [📊 API](#-api-et-données) • [🏗️ Architecture](#-architecture-du-code)
