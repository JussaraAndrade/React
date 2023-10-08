import { useEffect, useState } from "react";

// Representa página de login
export const Login = () => {
    //tem que iniciar o useState vázio para ser exibido no input
    const [email, setEmail] = useState('');//useState - Valores dos componentes sejam atualizados
    const [password, setPassword] = useState('');


    //Serve para fazer alguns efeitos nos componentes
    //Vai ser executar apenas uma vez, somente quando ele é carregado
    useEffect(() => {
        //Pergunta somente uma vez!
        if(window.confirm('Você é homem?')){
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    }, []);

    //Não tem limite uso do useEffect
    //Consulta de api, ou outra consulta de api, etc...
    useEffect(() => {
        //Toda vez que o email ou a senha é alterada o useEffect vai ser executado 
        console.log(email);
    }, [email]);
    
    useEffect(() => { 
        console.log(password);
    }, [password]);
    
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
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}