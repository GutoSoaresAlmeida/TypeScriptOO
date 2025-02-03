
export enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

export type GrupoTransacao = {
    label: string;
    transacoes: Transacao[];
}



export class Transacao  {
    tipoTransacao: TipoTransacao = TipoTransacao.DEPOSITO;
    valor: number = 0;
    data: Date = new Date();

    getTransacao() : Transacao[]{
        return JSON.parse(localStorage.getItem("transacoes"), (key: string, value: any) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
    }

    getTipoTransacao() : TipoTransacao {

        return this.tipoTransacao;
    }

    getValorTransacao() : number {

        return this.valor;
    }

    getData() : Date {
       return this.data;
    }

    setValorTransacao(valor: number){

        this.valor = valor;
    }

    setTransacao(valor: number, data: Date, tipotransacao: TipoTransacao){
        this.setValorTransacao(valor);
        this.setData(data);
        this.setTipoTransacao(tipotransacao);
    }

    setData(data: Date){
        this.data = data;
    }

    setTipoTransacao(tipoTransacao: TipoTransacao){
        this.tipoTransacao = tipoTransacao;
    }

    constructor(){
        this.tipoTransacao = TipoTransacao.DEPOSITO;
        this.data = new Date();
        this.valor = 0;
    }
}

const novaTransacao = new Transacao();

export default novaTransacao;


