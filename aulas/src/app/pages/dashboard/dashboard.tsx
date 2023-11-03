import { useCallback, useState } from "react";

interface IListItem {
    title: string;
    isSelected: boolean;

}

export const Dashboard = () => {
    //<string[]> - Lista de string 
    //([]) - lista inicial
    const [lista, setLista] = useState<IListItem[]>([]);

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
                //Na lista antiga verifica some algum o item tem o title igual ao value some irá retornar um boolean
                if(oldLista.some((listItem) => listItem.title === value)) return oldLista; 
                return [...oldLista, {
                    title: value,
                    isSelected: false,
                }];
            }); 
        }
    }, []);

    return (
        <div>
            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />
            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>
            <ul>
                {/* Indica que irá usar javascript */}
                {/* Map pega o valor atual de um elemento da lista e consegue tranformar elemento em outra coisa */}
                {
                    // Exemplo: posição [0] - valor: banana
                    //Jsx; é o html do react 
                    lista.map((listItem, index) =>  {
                        return <li key={listItem.title}>{listItem.title}
                            <input 
                                type="checkbox"
                                checked={listItem.isSelected} //garante que o checkbox esteja com valor atualizado
                                onChange={() => {
                                    setLista(oldLista => {
                                        return oldLista.map(oldListItem => {
                                            const newIsSelected = oldListItem.title === listItem.title
                                            ? !oldListItem.isSelected 
                                            : oldListItem.isSelected;

                                            return {
                                                ...oldListItem,
                                                isSelected: newIsSelected,
                                            };
                                        })
                                    })
                                }}
                            />
                        
                        </li>
                        ;
                    })
                }
            </ul>

        </div>
    );
}