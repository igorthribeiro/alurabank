System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function meuDecoratorDeClasse() {
        return function (construtor) {
            const original = construtor;
            const novo = function (...args) {
                console.log(`criando uma instancia com new: ${original.name}`);
                return new original(...args);
            };
            novo.prototype = original.prototype;
            return novo;
        };
    }
    exports_1("meuDecoratorDeClasse", meuDecoratorDeClasse);
    return {
        setters: [],
        execute: function () {
        }
    };
});
