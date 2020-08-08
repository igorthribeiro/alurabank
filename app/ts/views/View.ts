export abstract class View<T> {
    
    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean) { //? indica parâmetro opicional (recebe undefined) devem ficar por último
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T):void {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this._elemento.html(template);
    }

    abstract template(model: T): string;
}

