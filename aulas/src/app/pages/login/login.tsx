import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/buttonLogin";

// Representa página de login
export const Login = () => {
    //tem que iniciar o useState vázio para ser exibido no input
    const [email, setEmail] = useState('');//useState - Valores dos componentes sejam atualizados
    const [password, setPassword] = useState('');
    
    //Exemplo 1:
    //Pegar referência de um elemento html
    //Conseguir pegar a referência do elemento html, e poder usar dentro de callback ou dentro de uma função
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    //useMemo armazena o valor na memória, e permite fazer calculo complexo e deixar armazenado
    //vai ser executado por padrão
    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    }, [email.length]);

    
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
    
    //useCallback - serve para armazena uma função em memória
    //Guarda uma função em memória, é recomendavel usar caso aplicação cresça
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);

        // Exemplo 1:
        // if(inputPasswordRef !== null){
        //     //Foca o input
        //     inputPasswordRef.current?.focus();
        // }
    }, [email, password]);

    //Tudo que retorna é um componente html
    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
               
               <InputLogin 
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputPasswordRef.current?.focus()}
               />

                <InputLogin
                label="Senha"
                type="password"
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}
               />

               <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
               </ButtonLogin>
            </form>
        </div>
    );
}