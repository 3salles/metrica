import Searchbar from 'components/Searchbar';
import './styles.css';

export default function Header() {
  return (
    <header>
      <Searchbar text="Procure por um produto" />
      <div className="user">
        <p>John Snow</p>
        <span>john.snow@gmail.com</span>
      </div>
    </header>
  );
}
