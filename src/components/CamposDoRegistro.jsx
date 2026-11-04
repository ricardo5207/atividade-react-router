import { formatarRotulo, formatarValor } from "../utils.js";

// Lista todas as colunas do registro, sem depender do esquema da tabela.
export default function CamposDoRegistro({ registro }) {
  return (
    <dl className="campos">
      {Object.entries(registro).map(([chave, valor]) => (
        <div key={chave} className="campos__linha">
          <dt>{formatarRotulo(chave)}</dt>
          <dd>{formatarValor(valor)}</dd>
        </div>
      ))}
    </dl>
  );
}
