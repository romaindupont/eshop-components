import './style.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logoAccueil.svg';

const BientotDispo = () => {

  return (
    <div className="eshop-dispo">
      <Link exact="true" to="/" className="eshop-dispo-button partenaire">Accès Partenaire</Link>
      <h1 className="eshop-dispo-title">Bienvenue <span>sur</span></h1>
      <img src={Logo} alt="eshopLogo" className="eshop-dispo-image" />
      <h2 className="eshop-dispo-website">www.eshopplus-app.com</h2>
      <h3 className="eshop-dispo-subtitle">Bientôt Disponible !!</h3>
      <a href="mailto:contact@eshopplus-app.com" className="eshop-dispo-button contact">Nous contacter</a>
      <a href="mailto:contact@eshopplus-app.com" className="eshop-dispo-contact">contact@eshopplus-app.com</a>
    </div>
  )
}

export default BientotDispo;
