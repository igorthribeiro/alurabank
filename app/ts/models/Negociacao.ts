class Negociacao {

    //private _inputData:any; //quando o tipo não é definido


    constructor(private _data: Date, private _quantidade: number, private _valor: number) {
        //o underline identifica (convenção) que os valor só poderão ser acessados por métodos
        
        /*
        if (!data) {
            //lança excessão
            throw new Error('data deve ser preenchida');
        }
        */

    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}