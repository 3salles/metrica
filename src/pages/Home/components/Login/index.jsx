import Dropdown from '../Dropdown';
import './styles.css';

export default function Login() {
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
        <div class="actions-container">
          <label class="remember-me" for="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            Lembrar-me
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <footer>
          <input class="submit-button" type="button" value="Entrar" />
        </footer>
      </form>
    </article>
  );
}
