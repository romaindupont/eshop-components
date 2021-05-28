import './style.css';
import Logo from '../assets/images/logo.png'

const Header = () => {

  return (
    <div className="eshop">
      <header className="eshop-header">
        <img className="eshop-header-logo" src={Logo} alt="" />
        <h1 className="eshop-header-title">Tableau de bord</h1>
      </header>
    </div>
  )
}

export default Header;

