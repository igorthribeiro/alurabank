import { Negociacao, Imprimivel, Igualavel } from './index';


export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    private _negociacoes:Negociacao[] = []
    //private _negociacoes:Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    
    paraArray():Negociacao[] { //boa prática
        return ([] as Negociacao[]).concat(this._negociacoes); //encapsulamento -> imutável
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes) : boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray);
    }
}