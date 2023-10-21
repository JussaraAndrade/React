import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Dashboard = () => {
    //Referência de tipo, ele entende que o useRef um objeto com essa tipagem
    const counterRef = useRef(0);

    //useContext que é um hook customizado do react que vai permitir ultilizar aquele contexto que tem no react 
    const {nomeDoUsuario} = useContext(UsuarioLogadoContext);

    return(
        <>
            <p>Dashboard</p>
            <p>{nomeDoUsuario}</p>


            <p>Contador: {counterRef.current}</p>
            
            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Log</button>

            <Link to="/entrar">Login</Link>
        </>
    );
}