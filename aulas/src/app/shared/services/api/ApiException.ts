// Para retorno de status code
export class ApiException extends Error {
    public readonly message: string = '';

    //Construtor da classe error
    constructor(message: string) {
        super();
        this.message = message;
    }
}