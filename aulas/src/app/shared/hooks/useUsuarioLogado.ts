//hook customizado - função qualquer dentro dela ultiliza react hook padrão

import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts"

export const useUsuarioLogado = () => {
    return useContext(UsuarioLogadoContext); 
}