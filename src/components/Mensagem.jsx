// Componente que recebe props e exibe estados da tela (carregando, erro, vazio).
export default function Mensagem({ tipo = "info", titulo, children }) {
  return (
    <div className={`mensagem mensagem--${tipo}`} role={tipo === "erro" ? "alert" : "status"}>
      {titulo && <strong>{titulo}</strong>}
      {children && <p>{children}</p>}
    </div>
  );
}
