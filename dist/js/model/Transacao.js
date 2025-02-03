export var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
export class Transacao {
    tipoTransacao = TipoTransacao.DEPOSITO;
    valor = 0;
    data = new Date();
    getTransacao() {
        return JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
    }
    getTipoTransacao() {
        return this.tipoTransacao;
    }
    getValorTransacao() {
        return this.valor;
    }
    getData() {
        return this.data;
    }
    setValorTransacao(valor) {
        this.valor = valor;
    }
    setTransacao(valor, data, tipotransacao) {
        this.setValorTransacao(valor);
        this.setData(data);
        this.setTipoTransacao(tipotransacao);
    }
    setData(data) {
        this.data = data;
    }
    setTipoTransacao(tipoTransacao) {
        this.tipoTransacao = tipoTransacao;
    }
    constructor() {
        this.tipoTransacao = TipoTransacao.DEPOSITO;
        this.data = new Date();
        this.valor = 0;
    }
}
const novaTransacao = new Transacao();
export default novaTransacao;
