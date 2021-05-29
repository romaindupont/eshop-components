import './style.scss';
import Logo from '../assets/images/logo.png';
import Bells from '../assets/images/bell.svg';

const Header = () => {

  return (
    <header className="eshop-header">
        <div className="eshop-header-left">
          <img className="eshop-header-logo" src={Logo} alt="" />
          <h1 className="eshop-header-title">Tableau de bord</h1>
        </div>
        <div className="eshop-header-right">
        <div className="eshop-bells">
          <img className="eshop-header-bell" src={Bells} alt="" />
          <span className="eshop-header-number">1</span>
        </div>
        <h2 className="eshop-header-title2">Partner Name</h2>
        <span className="eshop-header-circle"></span>
        </div>
      </header>
  )
}

export default Header;

