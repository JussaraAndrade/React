import { useState } from "react";

// Representa página de login
export const Login = () => {
    //tem que iniciar o useState vázio para ser exibido no input
    const [email, setEmail] = useState('');//useState - Valores dos componentes sejam atualizados
    const [password, setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    }

    //Tudo que retorna é um componente html
    return(
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}