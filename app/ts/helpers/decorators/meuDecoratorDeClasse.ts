export function meuDecoratorDeClasse() {

    return function(construtor: any) {

        const original = construtor;

        const novo: any = function(...args: any[]) {
            console.log(`criando uma instancia com new: ${original.name}`);
            return new original(...args);
        }

        novo.prototype = original.prototype;
        return novo;

    }

}