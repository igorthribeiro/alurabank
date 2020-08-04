import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes:Negociacao[] = []
    //private _negociacoes:Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray():Negociacao[] { //boa prática
        return [].concat(this._negociacoes); //encapsulamento -> imutável
    }
}