
/**
 * Composant Header de l'application SportSee
 *
 * Affiche la barre de navigation principale avec le logo et les liens de navigation.
 * Positionné en haut de toutes les pages de l'application.
 *
 * @component
 * @returns {JSX.Element} Élément header avec logo et navigation
 *
 * @example
 * // Utilisation dans l'application principale
 * <Header />
 *
 * @example
 * // Intégration avec le layout
 * function Layout({ children }) {
 *   return (
 *     <>
 *       <Header />
 *       <div className="content">
 *         {children}
 *       </div>
 *     </>
 *   );
 * }
 */

import Logo from '../assets/logo/logo.png';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="SportSee Logo" className='header__logo'/>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'>Accueil</li>
          <li className='header__item'>Profil</li>
          <li className='header__item'>Réglage</li>
          <li className='header__item'>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;