import { useCallback, useState } from "react";

export const Dashboard = () => {
    //<string[]> - Lista de string 
    //([]) - lista inicial
    const [lista, setLista] = useState<string[]>(['Teste 1', 'Teste 2', 'Teste 3']);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // O input emitiu o KeyDown, verifica se a tecla é o keyDown se for o enter pega o currentTarget  
        //Pega o valor na input e irá verificar se for igual 0 cancela
        if(e.key === 'Enter') {
            //Remove o espaço tanto da frente e de trás da strings
            //Se o usuário digital 1, 2, 3, espaço em branco, ele remove o espaço e verifica se sem esse espaço ainda existe alguma letra
            if(e.currentTarget.value.trim().length === 0) return; 
            
            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            //Setar o novo valor
            setLista((oldLista) => {// valor atual da lista
                //Verifica se a lista atual ela tem aquele valor não adiciona o mesmo valor na lista
                if(oldLista.includes(value)) return oldLista; 
                return [...oldLista, value];
            }); 
        }
    }, []);

    return (
        <div>
            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />
            <ul>
                {/* Indica que irá usar javascript */}
                {/* Map pega o valor atual de um elemento da lista e consegue tranformar elemento em outra coisa */}
                {
                    // Exemplo: posição [0] - valor: banana
                    //Jsx; é o html do react 
                    lista.map((value) =>  {
                        return <li key={value}>{value}</li>;
                    })
                }
            </ul>

        </div>
    );
}