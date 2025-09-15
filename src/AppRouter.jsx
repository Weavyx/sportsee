/**
 * Configuration du routeur principal de l'application SportSee
 *
 * Gère la navigation entre les différentes pages de l'application avec React Router.
 * Configure les routes pour les utilisateurs spécifiques et les redirections.
 *
 * @component
 * @returns {JSX.Element} Application avec routeur configuré
 *
 * @example
 * // Utilisation comme composant racine
 * import AppRouter from './AppRouter.jsx';
 *
 * function main() {
 *   return <AppRouter />;
 * }
 *
 * @example
 * // Routes disponibles :
 * // - /user/18 : Dashboard de l'utilisateur 18 (Cecilia)
 * // - /user/12 : Dashboard de l'utilisateur 12 (Karl)
 * // - /* : Redirection automatique vers /user/18
 *
 * @description
 * Routes configurées :
 * - `/user/:userId` - Dashboard d'un utilisateur spécifique
 * - `/*` - Route catch-all qui redirige vers l'utilisateur par défaut (18)
 *
 * @requires react
 * @requires react-router-dom
 * @requires ./page/Dashboard.jsx
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './page/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/user/18" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
