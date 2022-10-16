import './styles.css';

export default function Header() {
  return (
    <header>
      <input type="text" placeholder="Procure por um produto" />
      <div className="user">
        <p>John Snow</p>
        <span>john.snow@gmail.com</span>
      </div>
    </header>
  );
}
