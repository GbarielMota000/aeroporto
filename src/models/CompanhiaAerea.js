

class CompaniaAerea {
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} nome - O nome completo da compania.
     * @param {string} cnpj - O documento de identificação único.
     * @param {string} dataFundacao - 
     */
    constructor(nome, cnpj, dataFundacao ) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.dataFundacao = dataFundacao;

         this.estaEmOperacao = false; 
    }

 realizarCheckInAtividade() {
        this.estaEmOperacao = true;
        console.log(`companhia aerea ${this.nome} está em atividade.`);
    }

        /**
     * Método para atualizar os dados da companhia caso haja erro de digitação.
     * @param {string} novoNome - O nome corrigido.
     */
    corrigirNome(novoNome) {
        this.nome = novoNome;
        console.log(`Nome atualizado para: ${this.nome}`);
    }

}
// Exporta a classe para ser usada em outros arquivos (Modularização)
export default CompaniaAerea;

