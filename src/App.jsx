/**
 * Composant racine simple de l'application SportSee
 *
 * Version simplifiée qui affiche directement le Dashboard sans routage.
 * Utilisé pour un accès direct à l'interface principale.
 *
 * @component
 * @returns {JSX.Element} Application avec Dashboard par défaut
 *
 * @example
 * // Utilisation en mode développement simple
 * import App from './App.jsx';
 *
 * function main() {
 *   return <App />;
 * }
 *
 * @note Pour une application avec routage complet, utiliser AppRouter.jsx
 * @requires ./page/Dashboard.jsx
 */
import Dashboard from './page/Dashboard.jsx'

function App() {

  return (
    <>
     <Dashboard />
    </>
  )
}

export default App
