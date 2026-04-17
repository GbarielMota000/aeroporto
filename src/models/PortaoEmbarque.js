class PortaoEmbarque {

    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} numeroPortao - O documento de identificação único.
     * @param {string} local - A data de nascimento para validar maioridade/descontos.
     */
    constructor(numeroPortao, local) {
         this.numeroPortaoe = numeroPortao;
          this.local = local;
         
           this.estaEmOperacao = false; 
    }

realizarCheckInAtividade() {
        this.estaEmOperacao = true;
        console.log(`portao de embarque ${this.nome} está em atividade.`);
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
export default PortaoEmbarque;