import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

interface IUsuarioLogadoContextProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContextProps> = ({children}) => {
    //Componente abaixo dele? todos os componentes estão como filho
    return(
        ///vai permitir que compartilhe esse contexto
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Juca'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}