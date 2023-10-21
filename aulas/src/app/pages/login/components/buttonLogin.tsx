//Props significa que são as propriedaes da interface de um determinado componentes
interface IButtonLoginProps {
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

//Tipagem do typescript dizendo componente é um componente funcional, ou seja de função que faz algo
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}