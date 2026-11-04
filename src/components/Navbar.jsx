import { Link, useLocation } from "react-router";

export default function Navbar() {
  const { pathname } = useLocation();
  const ativo = (caminho) =>
    caminho === "/" ? pathname === "/" : pathname.startsWith(caminho);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Principal">
        <Link to="/" className="navbar__marca">Registros</Link>
        <Link to="/" className={ativo("/") ? "ativo" : ""}>Início</Link>
        <Link to="/registros" className={ativo("/registros") ? "ativo" : ""}>
          Listagem
        </Link>
      </nav>
    </header>
  );
}
