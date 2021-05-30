import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../assets/images/home.svg';
import './style.scss';

const Menu = () => {

  return (
    <div className="eshop-menu">
      <nav className="eshop-menu-nav">
        <Link exact="true" to="/" className="eshop-menu-link" >
          <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
          Accueil
        </Link>
        <Link exact="true" to="/" className="eshop-menu-link" >
          <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
          Mon compte partenaire
        </Link>
        <Link exact="true" to="/" className="eshop-menu-link" >
          <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
          Mes Promos
        </Link>
        <Link exact="true" to="/" className="eshop-menu-link" >
          <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
          Mes cartes de fidélité
        </Link>
        <Link exact="true" to="/" className="eshop-menu-link" >
          <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
          Mes bons d'achats
        </Link>
      </nav>
      <div className="nav-bottom">
        <Link exact="true" to="/" className="eshop-menu-link" >
            <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
            Se déconnecter
        </Link>
        <Link exact="true" to="/" className="eshop-menu-link" >
            <img src={HomeLogo} alt="accueilLogo" className="eshop-menu-link-image" />
            Conditions Générales
        </Link>
      </div>
    </div>
  );
}

export default Menu;