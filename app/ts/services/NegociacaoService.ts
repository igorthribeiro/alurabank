import { NegociacaoParcial, Negociacao, Negociacoes } from '../models/index';

export class NegociacaoService {

    opterNegociacoes(handler: Function): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dadosxxx')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                    dados               
                        .map(d => new Negociacao(new Date(), d.vezes, d.montante))                   
            )
            .catch((err: Error) => {
                throw new Error(`Erro ao obter serviço: ${err.message}`)
            });

    }

}