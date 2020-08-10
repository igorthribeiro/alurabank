System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                opterNegociacoes(handler) {
                    return fetch('http://localhost:8080/dadosxxx')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dados) => dados
                        .map(d => new index_1.Negociacao(new Date(), d.vezes, d.montante)))
                        .catch((err) => {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
