import { Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Listagem from "./pages/Listagem.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import { configurado } from "./supabaseClient.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        {!configurado && (
          <p className="aviso">
            Variáveis de ambiente do Supabase não configuradas. Copie
            <code> .env.example </code> para <code>.env</code> e preencha os valores.
          </p>
        )}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registros" element={<Listagem />} />
          <Route path="/registros/:id" element={<Detalhes />} />
          <Route
            path="*"
            element={
              <section>
                <h1>Página não encontrada</h1>
                <p>O endereço acessado não existe.</p>
                <Link to="/">Ir para o início</Link>
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}
