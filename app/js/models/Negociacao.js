class Negociacao {
    //private _inputData:any; //quando o tipo não é definido
    constructor(_data, _quantidade, _valor) {
        //o underline identifica (convenção) que os valor só poderão ser acessados por métodos
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
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
