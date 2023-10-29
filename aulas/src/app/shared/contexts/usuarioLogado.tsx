import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    // arrow function - o contexto vai está compartilhando atráves dele uma função
    logout: () => void;
}

interface IUsuarioLogadoContextProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContextProps> = ({children}) => {
    //Atualiza o valor
    const [nome, setNome] = useState('');

    useEffect(()=> {
        setTimeout(() => {
            setNome('Lucas');
        }, 1000);   
    });

    //Passando todas as páginas e componentes uma função chamada logout
    //Recomenda useCallback para compartilhar o contexto
    const handleLogout = useCallback(() => {
        console.log('Logout executou')
    }, []);

    //Componente abaixo dele? todos os componentes estão como filho
    return(
        ///vai permitir que compartilhe esse contexto
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}