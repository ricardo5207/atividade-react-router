// Descobre um "título" para o registro, independente das colunas da tabela.
const CAMPOS_TITULO = ["nome", "name", "titulo", "title", "descricao", "description"];

export function tituloDoRegistro(registro) {
  for (const campo of CAMPOS_TITULO) {
    if (registro[campo]) return String(registro[campo]);
  }
  const texto = Object.values(registro).find(
    (v) => typeof v === "string" && v.trim() !== ""
  );
  return texto || `Registro ${registro.id}`;
}

export function formatarValor(valor) {
  if (valor === null || valor === undefined || valor === "") return "—";
  if (typeof valor === "boolean") return valor ? "Sim" : "Não";
  if (typeof valor === "object") return JSON.stringify(valor);
  return String(valor);
}

export function formatarRotulo(chave) {
  const texto = chave.replace(/_/g, " ");
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
