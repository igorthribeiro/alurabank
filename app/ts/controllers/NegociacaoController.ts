import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';
import { NegociacaoService, HandlerFunction } from '../services/index';
import { imprime } from '../helpers/Utils';

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

        imprime(negociacao, this._negociacoes);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada!');       
    } 

    private _ehDiaUtil(data:Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    async importaDados() {

        try {
            const isOK: HandlerFunction = (res:Response) => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }            
            }

            const negociacoesParaImportar = await this._service
                .opterNegociacoes(isOK);
                
                    
            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada =>
                            negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
        } catch (err) {
            this._mensagemView.update(err.message);
        }
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

/*
    @throttle()
    importaDados() {
        const isOK: HandlerFunction = (res:Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }            
        }

        this._service
            .opterNegociacoes(isOK)
            .then(negociacoesParaImportar => {

                const negociacoesJaImportadas = this._negociacoes.paraArray();

                negociacoesParaImportar
                    .filter(negociacao => 
                        !negociacoesJaImportadas.some(jaImportada =>
                             negociacao.ehIgual(jaImportada)))
                    .forEach(negociacao => 
                        this._negociacoes.adiciona(negociacao));

                this._negociacoesView.update(this._negociacoes);
            });
*/