import { Link } from "react-router";

export default function Inicio() {
  return (
    <section>
      <h1>Consulta de registros</h1>
      <p className="lead">
        Esta aplicação lê os dados de uma tabela do Supabase e permite abrir
        cada registro em uma página própria, identificada pela URL.
      </p>
      <p>
        <Link to="/registros" className="botao">Ver registros</Link>
      </p>
    </section>
  );
}
