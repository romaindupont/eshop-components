import './style.scss';
import Logo from '../assets/images/logoAccueil.svg';

const BientotDispo = () => {

  return (
    <div className="eshop-dispo">
      <h1 className="eshop-dispo-title">Bientôt</h1>
      <img src={Logo} alt="eshopLogo" className="eshop-dispo-image" />
      <h2 className="eshop-dispo-subtitle">Disponible</h2>
    </div>
  )
}

export default BientotDispo;
