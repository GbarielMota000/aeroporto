/* 
=========================================================
RELATÓRIO DE CONECTIVIDADE (Async/Await & UX)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que é impossível conectar um sistema na internet sem lidar com o "Assincronismo" (espera)? O que o "await" faz literalmente com a execução do código?
R: A comunicação com a internet leva um tempo para acontecer, pois depende da rede e do servidor. O JavaScript não pode ficar esperando e travar toda a aplicação. O "await" faz a função aguardar a resposta da operação assíncrona antes de continuar executando o restante do código.

2. O que acontece com a Experiência do Usuário (UX) se não colocarmos uma mensagem de "Loading..." antes do fetch?
R: O usuário pode pensar que o sistema travou ou parou de funcionar, pois não recebe nenhuma informação enquanto os dados estão sendo carregados. A mensagem de carregamento melhora a experiência do usuário ao informar que a aplicação está trabalhando.

3. Para que serve o bloco 'finally' em uma requisição de internet? Por que ele é o lugar perfeito para esconder a animação/texto de "Loading"?
R: O bloco finally é executado sempre, independentemente de a requisição dar certo ou erro. Por isso, ele é o local ideal para remover a mensagem de carregamento ou encerrar animações, garantindo que a interface fique organizada.
=========================================================
*/

class Voo {
    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
    }
}

class RadarService {

    async buscarVoosGlobais() {

        try {

            console.log("📡 Conectando ao satélite...");

            // API pública para simular os voos
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!resposta.ok) {
                throw new Error("Servidor indisponível.");
            }

            const dadosJson = await resposta.json();

            // Transformando os dados da API em objetos da classe Voo
            const voos = dadosJson.map(usuario =>
                new Voo(usuario.id, usuario.address.city)
            );

            return voos;

        } catch (erro) {

            console.error("Erro:", erro);

            throw erro;

        }

    }

}

// ======================
// Interface
// ======================

const painelDOM = document.getElementById("telaPainel");

const radar = new RadarService();

async function carregarRadar() {

    try {

        painelDOM.innerHTML = "<h2>📡 Buscando dados no satélite...</h2>";

        const listaVoos = await radar.buscarVoosGlobais();

        painelDOM.innerHTML = "<h2>🌎 Voos encontrados:</h2>";

        listaVoos.forEach(voo => {

            painelDOM.innerHTML += `
                <p>
                    <strong>Voo:</strong> ${voo.codigo}
                    |
                    <strong>Destino:</strong> ${voo.destino}
                </p>
            `;

        });

    } catch (erro) {

        painelDOM.innerHTML = `
            <h2 style="color:red;">
                ❌ Falha de Conexão com o Satélite!
            </h2>
        `;

    } finally {

        console.log("Busca finalizada.");

    }

}

carregarRadar();