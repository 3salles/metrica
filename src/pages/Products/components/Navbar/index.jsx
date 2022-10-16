import { Link } from 'react-router-dom';
import { BsGrid, BsPerson } from 'react-icons/bs';
import { TbReceipt2, TbSettings } from 'react-icons/tb';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Logo from '../../../../assets/logo.png';

import './styles.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo da Métrica" />
      </Link>
      <div className="main-nav">
        <Link to="/products">
          <div className="nav-option selected">
            <BsGrid />
            <p>Produtos</p>
          </div>
        </Link>
        <Link to="/employees">
          <div className="nav-option">
            <BsPerson />
            <p>Funcionários</p>
          </div>
        </Link>
        <Link to="/sales">
          <div className="nav-option">
            <TbReceipt2 />
            <p>Vendas</p>
          </div>
        </Link>
      </div>

      <div className="second-nav">
        <Link to="/settings">
          <div className="nav-option">
            <TbSettings />
            <p>Configurações</p>
          </div>
        </Link>
        <Link to="/">
          <div className="nav-option logout">
            <RiLogoutCircleRLine />
            <p>Sair</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
