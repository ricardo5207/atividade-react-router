# Atividade Prática: React Router + Supabase

Aplicação React (Vite) com React Router que lista registros de uma tabela do Supabase
e mostra os detalhes de cada registro por meio de uma rota dinâmica.

## Rotas

| Página   | Rota             | Função                                         |
|----------|------------------|------------------------------------------------|
| Início   | `/`              | Apresenta a aplicação e permite a navegação    |
| Listagem | `/registros`     | Consulta e exibe os registros do Supabase      |
| Detalhes | `/registros/:id` | Exibe um registro específico (`useParams`)     |

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie o arquivo `.env` a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

3. Preencha as variáveis no `.env`:

   | Variável                 | Onde encontrar                                                    |
   |--------------------------|-------------------------------------------------------------------|
   | `VITE_SUPABASE_URL`      | Supabase > Project Settings > API > Project URL                   |
   | `VITE_SUPABASE_ANON_KEY` | Supabase > Project Settings > API > chave `anon` / `public`       |
   | `VITE_SUPABASE_TABLE`    | Nome da tabela criada na atividade anterior                       |

   > Use somente a chave `anon`. Nunca coloque a `service_role` no projeto.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o endereço exibido no terminal (normalmente http://localhost:5173).

## Requisitos do banco

- A tabela precisa ter uma coluna `id` (usada na URL `/registros/:id`).
- Se o RLS (Row Level Security) estiver ativo, crie uma policy de `SELECT` para a role `anon`,
  por exemplo:

  ```sql
  create policy "Leitura pública" on nome_da_tabela
    for select to anon using (true);
  ```

## Publicação

Em Vercel ou Netlify, o projeto já inclui `vercel.json` e `public/_redirects` para que
abrir `/registros/1` diretamente não retorne 404. Configure as mesmas variáveis de ambiente
no painel da plataforma.

## Tecnologias

React, Vite, React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`),
`useState`, `useEffect` e Supabase Client.
