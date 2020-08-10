import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

let timer = 0;

@meuDecoratorDeClasse()
export class NegociacaoController {

    //private _inputData:any; //quando o tipo não é definido
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes(); //inferência
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    //@logarTempoDeExecucao()
    @throttle()
    adiciona() {        

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
    } 

    private _ehDiaUtil(data:Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {
        function isOK(res: Response) {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }            
        }

        this._service
            .opterNegociacoes(isOK)
            .then(negociacoes => {
                negociacoes.forEach(negociacao =>
                     this._negociacoes.adiciona(negociacao));
                     
                this._negociacoesView.update(this._negociacoes);
            });

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
