

class CompaniaAerea {
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} nome - O nome completo da compania.
     * @param {string} cnpj - O documento de identificação único.
     * @param {string} dataFundação - 
     */
    constructor(nome, cnpj, dataFundação ) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.dataFundação = dataFundação;

         this.estaEmOperacao = false; 
    }

 realizarCheckInAtividade() {
        this.estaEmOperacao = true;
        console.log(`companhia aerea ${this.nome} está em atividade.`);
    }

}