/**
 * Point d'entrée principal de l'application SportSee
 *
 * Configure et démarre l'application React avec le mode strict et les styles globaux.
 * Utilise AppRouter pour gérer la navigation multi-utilisateurs.
 *
 * @fileoverview Point d'entrée de l'application SportSee
 * @author SportSee Team
 * @since 1.0.0
 *
 * @example
 * // Ce fichier est appelé automatiquement par Vite
 * // Voir index.html : <script type="module" src="/src/main.jsx"></script>
 *
 * @description
 * Configuration de l'application :
 * - Mode React.StrictMode pour le développement
 * - Styles normalisés (normalize.css)
 * - Styles globaux de l'application (index.css)
 * - Routeur configuré avec AppRouter
 * - Gestion d'erreur si l'élément root est manquant
 *
 * @requires react
 * @requires react-dom/client
 * @requires ./normalize.css
 * @requires ./index.css
 * @requires ./AppRouter.jsx
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.css'
import './index.css'
import AppRouter from './AppRouter.jsx'

/**
 * Récupération de l'élément DOM racine
 * @type {HTMLElement|null}
 */
const rootElement = document.getElementById('root');

/**
 * Vérification de la présence de l'élément root
 * @throws {Error} Si l'élément root n'existe pas dans le DOM
 */
if (!rootElement) {
  throw new Error('Élément root manquant');
}

/**
 * Création de la racine React
 * @type {Root}
 */
const root = createRoot(rootElement);

/**
 * Rendu de l'application avec mode strict et routeur
 */

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
