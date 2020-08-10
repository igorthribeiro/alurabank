import { NegociacaoParcial, Negociacao, Negociacoes } from '../models/index';

export class NegociacaoService {

    opterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
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

export interface HandlerFunction {

    (res: Response): Response;

}