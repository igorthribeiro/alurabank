export abstract class View<T> {
    
    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) { //? indica parâmetro opicional (recebe undefined) devem ficar por último
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T):void {
        const t1 = performance.now();
        
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this._elemento.html(template);

        const t2 = performance.now();
        console.log(`o tempo de renderização é de ${t2 - t1} ms`);
    }

    abstract template(model: T): string;
}

