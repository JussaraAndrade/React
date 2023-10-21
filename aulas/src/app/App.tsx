import { UsuarioLogadoProvider } from "./shared/contexts";
import { Routes } from "./routes";

export const App = () => {
  return (
    ///Contexto é compartilhado em outras telas
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
}

