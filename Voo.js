class Voo {

    constructor(codigo, destino) {

        this.codigo = codigo;
        this.destino = destino;

        this.status = "No Solo";

        // Tempo fictício para o agente IoT
        this.tempoParaDecolagem = 3;

    }

}

export default Voo;