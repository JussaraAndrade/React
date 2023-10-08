import { useNavigate } from 'react-router-dom';

// Representa página de login
export const Login = () => {
    const navigate = useNavigate();
    // Quando clicar naquele botão quero que faça alguma coisa
    const handleClick = () => {
       //Navegue para tela inicial 
       navigate('/pagina inicial');
    }

    //Tudo que retorna é um componente html
    return(
        <div>
            Login

            <button onClick={handleClick}>Página Inicial</button>
        </div>
    );
}