import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/tarefasService";
import { ApiException } from "../../shared/services/api/ApiException";

export const Dashboard = () => {
    //<string[]> - Lista de string 
    //([]) - lista inicial
    const [lista, setLista] = useState<ITarefa[]>([]);

    //buscar no banco de dados a lista
    useEffect(() => {
        //buscar todos os registros
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(result);
                }
            });
    }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // O input emitiu o KeyDown, verifica se a tecla é o keyDown se for o enter pega o currentTarget  
        //Pega o valor na input e irá verificar se for igual 0 cancela
        if (e.key === 'Enter') {
            //Remove o espaço tanto da frente e de trás da strings
            //Se o usuário digital 1, 2, 3, espaço em branco, ele remove o espaço e verifica se sem esse espaço ainda existe alguma letra
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            //Na lista antiga verifica some algum o item na lista que irá retornar um boolean
            //Verifica se existe a tarefa, se não ele cria uma nova tarefa
            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message);
                    } else {
                        setLista((oldLista) => [...oldLista, result]);
                    }
                });
        }
    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id); //Está buscando a tarefa

        //Se for false não altera nada
        if(!tarefaToUpdate) return;

        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted,
        }).then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista(oldLista => {
                    return oldLista.map(oldListItem => {
                        if(oldListItem.id === id) return result;
                        return oldListItem;
                    });
                });
            }
            }
        );
    }, [lista]);

    return (
        <div>
            <p>Lista</p>

            <input
                onKeyDown={handleInputKeyDown}
            />
            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
            <ul>
                {/* Indica que irá usar javascript */}
                {/* Map pega o valor atual de um elemento da lista e consegue tranformar elemento em outra coisa */}
                {
                    // Exemplo: posição [0] - valor: banana
                    //Jsx; é o html do react 
                    lista.map((listItem) => {
                        return <li key={listItem.id}>
                            <input
                                type="checkbox"
                                checked={listItem.isCompleted} //garante que o checkbox esteja com valor atualizado
                                onChange={() => handleToggleComplete(listItem.id)}
                            />
                            {listItem.title}
                        </li>;
                    })}
            </ul>

        </div>
    );
}