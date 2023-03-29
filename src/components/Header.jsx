import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul class="navbar-nav ">
          <li class="nav-item me-auto">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/quemsou">
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
