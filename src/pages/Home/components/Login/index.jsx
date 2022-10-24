import { useNavigate } from 'react-router-dom';

import Dropdown from '../Dropdown';
import './styles.css';

export default function Login() {
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate('/products');
  };

  return (
    <article className="login-container">
      <h1>Entrar</h1>
      <form action="login">
        <label for="selector">
          Setor
          <Dropdown />
        </label>
        <label for="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex.: jon.snow@mail.co"
          />
        </label>
        <label for="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
          />
        </label>
        <div className="actions-container">
          <label className="remember-me" for="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            Lembrar-me
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <footer>
          <input
            className="submit-button"
            type="button"
            value="Entrar"
            onClick={handleOnSubmit}
          />
        </footer>
      </form>
    </article>
  );
}
