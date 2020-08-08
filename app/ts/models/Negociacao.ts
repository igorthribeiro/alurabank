export class Negociacao {

    //private _inputData:any; //quando o tipo não é definido


    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        //o underline identifica (convenção) que os valor só poderão ser acessados por métodos
        
        /*
        if (!data) {
            //lança excessão
            throw new Error('data deve ser preenchida');
        }
        */

    }

    get volume() {
        return this.quantidade * this.valor;
    }

}