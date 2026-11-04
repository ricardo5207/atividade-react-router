import { useState, useEffect } from "react";
import { Link } from "react-router";
import { supabase, TABELA } from "../supabaseClient.js";
import Mensagem from "../components/Mensagem.jsx";
import { tituloDoRegistro } from "../utils.js";

export default function Listagem() {
  const [registros, setRegistros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function buscarRegistros() {
      const { data, error } = await supabase.from(TABELA).select("*");
      if (cancelado) return;

      if (error) setErro(error.message);
      else setRegistros(data ?? []);
      setCarregando(false);
    }

    buscarRegistros();
    return () => {
      cancelado = true;
    };
  }, []);

  if (carregando) return <Mensagem titulo="Carregando registros..." />;

  if (erro) {
    return (
      <Mensagem tipo="erro" titulo="Não foi possível consultar os registros">
        {erro}
      </Mensagem>
    );
  }

  if (registros.length === 0) {
    return (
      <Mensagem titulo="Nenhum registro cadastrado">
        Cadastre dados na tabela do Supabase para vê-los aqui.
      </Mensagem>
    );
  }

  return (
    <section>
      <h1>Registros</h1>
      <p className="lead">{registros.length} encontrado(s).</p>
      <ul className="lista">
        {registros.map((registro) => (
          <li key={registro.id} className="lista__item">
            <span>{tituloDoRegistro(registro)}</span>
            <Link to={`/registros/${registro.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
