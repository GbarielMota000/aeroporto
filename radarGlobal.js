/* 
=========================================================
DOCUMENTAÇÃO DE DEPLOY E ARQUITETURA - AV1
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Como você usou o Polimorfismo na função iniciarRadar() para exibir informações diferentes sem precisar usar um monte de IFs na hora de escrever no HTML?

R: O polimorfismo foi utilizado criando objetos das classes VooComercial e VooCarga de acordo com o tipo recebido da API. Depois disso, o código chama apenas o método gerarRelatorio() para todos os objetos. Cada classe executa sua própria versão desse método automaticamente, sem precisar verificar novamente o tipo do voo na hora de escrever o HTML.

2. O que a IA explicou sobre o perigo de expor API Keys no código Front-end? O que são Variáveis de Ambiente?

R: Uma API Key nunca deve ficar escrita diretamente no código Front-end, pois qualquer pessoa pode visualizá-la pelo navegador ou pelo código-fonte publicado. As Variáveis de Ambiente (.env) armazenam essas informações de forma segura no servidor ou na plataforma de hospedagem, como Vercel ou Netlify, evitando que dados sensíveis sejam enviados ao GitHub.

=========================================================
*/


//======================
// CLASSE MÃE
//======================

class Voo {

    constructor(codigo){
        this.codigo = codigo;
    }

    gerarRelatorio(){
        return `Voo ${this.codigo}`;
    }

}

//======================
// VOO COMERCIAL
//======================

class VooComercial extends Voo{

    constructor(codigo, passageiros){
        super(codigo);
        this.passageiros = passageiros;
    }

    gerarRelatorio(){
        return `✈️ Comercial [${this.codigo}] - ${this.passageiros} passageiros.`;
    }

}

//======================
// VOO DE CARGA
//======================

class VooCarga extends Voo{

    constructor(codigo, cargaToneladas){
        super(codigo);
        this.cargaToneladas = cargaToneladas;
    }

    gerarRelatorio(){
        return `📦 Cargueiro [${this.codigo}] - ${this.cargaToneladas} toneladas de carga.`;
    }

}

//======================
// DADOS DA API
//======================

const dadosDaAPI = [

    { id: "G3-100", tipo: "comercial", qtd: 150 },

    { id: "AZ-999", tipo: "carga", qtd: 80 },

    { id: "LA-200", tipo: "comercial", qtd: 200 }

];

//======================
// RADAR
//======================

async function iniciarRadar(){

    console.log("📡 Conectando ao satélite global de forma segura...");

    const painel = document.getElementById("telaPainel");

    painel.innerHTML = "";

    // POLIMORFISMO
    const voosProcessados = dadosDaAPI.map(dado => {

        if(dado.tipo === "comercial"){

            return new VooComercial(
                dado.id,
                dado.qtd
            );

        }else{

            return new VooCarga(
                dado.id,
                dado.qtd
            );

        }

    });

    voosProcessados.forEach(voo=>{

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${voo.gerarRelatorio()}</h3>
        `;

        painel.appendChild(card);

    });

}

iniciarRadar();