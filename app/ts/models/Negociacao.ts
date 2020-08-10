import { MeuObjeto } from './index';

export class Negociacao implements MeuObjeto<Negociacao> {

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

    paraTexto(): void {
        console.log('Impressão');
        console.log(
           `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`
        );
    }

    ehIgual(negociacao: Negociacao):boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }

}