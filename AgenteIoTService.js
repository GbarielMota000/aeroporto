/*
=========================================================
RELATÓRIO DE AUDITORIA DE TEMPO REAL (EVENT LOOP E IOT)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que um laço infinito comum (while true) congela a aba do navegador, impedindo o usuário de clicar em qualquer botão?
R: O JavaScript é executado em uma única thread. Um while(true) nunca termina e ocupa a Call Stack continuamente. Assim, o navegador não consegue executar outras tarefas, como cliques, atualizações da tela ou outros comandos.

2. Como o 'Event Loop' e o 'setInterval' trabalham juntos para executar a nossa varredura de voos a cada 5 segundos sem travar a tela principal?
R: O setInterval pede ao navegador para executar uma função a cada 5 segundos. Enquanto o tempo é contado pelas Web APIs do navegador, o JavaScript fica livre para executar outras tarefas. Quando os 5 segundos passam, o Event Loop coloca a função novamente na fila para ser executada.

3. Pensando em um sistema do mundo real (IoT), qual o perigo de deixar um setInterval rodando para sempre se fecharmos o painel do aeroporto?
R: Um setInterval que não é encerrado pode continuar executando tarefas desnecessárias e manter referências na memória. Isso pode causar desperdício de recursos e contribuir para problemas de memória. Por isso, usamos clearInterval() para desligar o robô quando ele não for mais necessário.
=========================================================
*/

export default class AgenteIoTService {

    constructor(frota, funcaoRenderizar) {

        this.frota = frota;
        this.renderizar = funcaoRenderizar;

        this.intervalo = null;
    }


    iniciarMonitoramentoIncorreto() {

        console.log("Iniciando monitoramento...");

        /*
        while (true) {

            this.frota.forEach(voo => {

                if (voo.tempoParaDecolagem > 0) {
                    voo.tempoParaDecolagem -= 1;
                } else {
                    voo.status = "Decolado";
                }

            });

            this.renderizar();
        }
        */

        console.log(
            "O código acima travaria a Call Stack."
        );
    }


    iniciarMonitoramentoCorreto() {

        console.log(
            "🤖 Agente IoT iniciado! Verificação a cada 5 segundos."
        );

        this.intervalo = setInterval(() => {

            console.log("📡 Agente IoT verificando os voos...");


            this.frota.forEach(voo => {

                if (voo.tempoParaDecolagem > 0) {

                    voo.tempoParaDecolagem -= 1;

                    console.log(
                        `✈️ ${voo.codigo}: faltam ${voo.tempoParaDecolagem} ciclos.`
                    );

                } else {

                    voo.status = "Decolado";

                    console.log(
                        `🛫 ${voo.codigo} foi decolado automaticamente!`
                    );

                }

            });


            // Atualiza a interface

            this.renderizar();

        }, 5000);

    }


    pararMonitoramento() {

        if (this.intervalo !== null) {

            clearInterval(this.intervalo);

            this.intervalo = null;

            console.log(
                "🛑 Agente IoT desligado."
            );

        }

    }

}