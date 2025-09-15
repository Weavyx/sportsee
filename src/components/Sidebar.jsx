/**
 * Composant Sidebar de l'application SportSee
 *
 * Affiche la barre latérale avec les icônes d'activités sportives et le copyright.
 * Positionné sur le côté gauche de l'interface utilisateur.
 *
 * @component
 * @returns {JSX.Element} Élément aside avec icônes d'activités et copyright
 *
 * @example
 * // Utilisation dans le layout principal
 * <Sidebar />
 *
 * @example
 * // Intégration avec header et contenu
 * function MainLayout({ children }) {
 *   return (
 *     <div className="layout">
 *       <Header />
 *       <div className="main-container">
 *         <Sidebar />
 *         <main className="content">{children}</main>
 *       </div>
 *     </div>
 *   );
 * }
 */
import './sidebar.css'
import meditatingIcon from '../assets/icons/meditating.png';
import swimmingIcon from '../assets/icons/swimming.png';
import dumbbellIcon from '../assets/icons/dumbbell.png';
import bikingIcon from '../assets/icons/biking.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className='sidebar-container-icons'>
        <img className='sidebar-icon' src={meditatingIcon} alt="Meditation" />
        <img className='sidebar-icon' src={swimmingIcon} alt="Swimming" />
        <img className='sidebar-icon' src={dumbbellIcon} alt="Dumbbell" />
        <img className='sidebar-icon' src={bikingIcon} alt="Biking" />
      </div>
        <p className='sidebar-copyright'>Copyright, SportSee 2020</p>
    </aside>
  )
}

export default Sidebar