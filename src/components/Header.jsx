import './Header.css';

function Header() {
  return (
    <header>
      <a href="#">
        <img src="./logo.svg" alt="Logo Mateus Messias" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Aulas</a>
          </li>
          <li>
            <a href="">Trabalhos</a>
          </li>
          <li>
            <a href="">Agenda</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
