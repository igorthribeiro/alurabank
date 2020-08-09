import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {

    //private _inputData:any; //quando o tipo não é definido
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes(); //inferência
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor =  $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event:Event) {
        const t1 = performance.now();
        
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ',')); //let = local
        
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }


        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada!');

        const t2 = performance.now();
        console.log(`o tempo de execução de adiciona é de ${t2 - t1} ms`)        
    } 

    private _ehDiaUtil(data:Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quita,
    Sexta,
    Sabado
}
