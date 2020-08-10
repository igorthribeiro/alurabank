import { Imprimivel } from './index';

export class Negociacao extends Imprimivel {

    //private _inputData:any; //quando o tipo não é definido


    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        super();
        
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

    paraTexto(): void {
        console.log('Impressão');
        console.log(
           `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`
        );
    }

}