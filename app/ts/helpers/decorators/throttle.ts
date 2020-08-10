export function throttle(milissegundos = 500) { //milissegundos:number = 500

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;
        
        descriptor.value = function(...args: any[]) {
            if (event) event.preventDefault(); //previne que o submit recarregue a página
            clearInterval(timer);
            timer = setTimeout(() => 
                metodoOriginal.apply(this, args) //chamada do método sobrescrito
            , milissegundos);
        }

        return descriptor;
        
    }

}