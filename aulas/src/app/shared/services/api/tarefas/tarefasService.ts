import { ApiException } from "../ApiException";
import { Api } from "../apiConfig";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

//Irá consultar todas as tarefas
//O método retorna dois tipo, retorna dado que será uma tarefa ou vai ser uma ApiException
const getAll = async (): Promise<ITarefa[] | ApiException > => {
    try {
        const { data } = await Api().get('/tarefas'); //esperar que essa resposta seja retornada
        return data;
    } catch(error: any) {
        //Tratando o erro
        return new ApiException(error.message || 'Erro ao buscar os registros.');
    }
};
const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`tarefas/${id}`); //esperar que essa resposta seja retornada
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar o registro.');
    }
};

//Omit serve para ignorar algum atributo dentro do objeto como por exemplo o id não vai ser criado pq ele gera automaticamente o id
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post(`/tarefas`, dataToCreate); //Criando uma tarefa nova
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao criar o registro.');
    }
};
const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro.');
    }
};
const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`tarefas/${id}`);
        return undefined;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao apagar o registro.');
    }
};

export const TarefasService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
};