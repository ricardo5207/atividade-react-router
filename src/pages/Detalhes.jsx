import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { supabase, TABELA } from "../supabaseClient.js";
import Mensagem from "../components/Mensagem.jsx";
import CamposDoRegistro from "../components/CamposDoRegistro.jsx";
import { tituloDoRegistro } from "../utils.js";

export default function Detalhes() {
  const { id } = useParams();
  const [registro, setRegistro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function buscarRegistro() {
      setCarregando(true);
      setErro(null);
      setRegistro(null);

      const { data, error } = await supabase
        .from(TABELA)
        .select("*")
        .eq("id", id)
        .maybeSingle(); // retorna null (sem erro) quando o id não existe

      if (cancelado) return;

      if (error) setErro(error.message);
      else setRegistro(data);
      setCarregando(false);
    }

    buscarRegistro();
    return () => {
      cancelado = true;
    };
  }, [id]);

  let conteudo;
  if (carregando) {
    conteudo = <Mensagem titulo="Carregando registro..." />;
  } else if (erro) {
    conteudo = (
      <Mensagem tipo="erro" titulo="Não foi possível consultar o registro">
        {erro}
      </Mensagem>
    );
  } else if (!registro) {
    conteudo = (
      <Mensagem titulo="Registro não encontrado">
        Não existe um registro com o identificador {id}.
      </Mensagem>
    );
  } else {
    conteudo = (
      <>
        <h1>{tituloDoRegistro(registro)}</h1>
        <CamposDoRegistro registro={registro} />
      </>
    );
  }

  return (
    <section>
      {conteudo}
      <p>
        <Link to="/registros">Voltar para a listagem</Link>
      </p>
    </section>
  );
}
