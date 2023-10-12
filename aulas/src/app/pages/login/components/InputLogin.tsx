interface IInputLoginProps {
    label: string;
    value: string;
    type?: string;
    onPressEnter?: () => void; //? indica que não é obrigatório informar a propriedade
    onChange: (newValue: string) => void;
}

//Acessar dentro de props outras
export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <label>
        <span>{props.label}</span>
        <input 
            type={props.type} 
            value={props.value} 
            onChange={e => props.onChange(e.target.value)}
            onKeyDown={e => e.key === 'Enter' 
                ? props.onPressEnter && props.onPressEnter() 
                : undefined}
        />
    </label>
    );
}