import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    //Referência de tipo, ele entende que o useRef um objeto com essa tipagem
    const counterRef = useRef(0);
    
    return(
        <>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current}</p>
            
            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Log</button>

            <Link to="/entrar">Login</Link>
        </>
    );
}