/*
=========================================================
RELATÓRIO DE AUDITORIA DE CLEAN CODE E SOLID
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. O que significa a sigla SRP (Single Responsibility Principle) e por que aplicamos ela hoje?
R: SRP significa Princípio da Responsabilidade Única. Ele determina que cada módulo deve ter uma única responsabilidade. Aplicamos esse princípio para separar o modelo dos voos, o armazenamento, a interface e o controle principal.

2. Se amanhã o Diretor do Aeroporto pedir para trocar a interface de "Cards" por uma "Tabela de Excel" no HTML, qual NOME DE ARQUIVO exato precisaremos alterar?
R: O arquivo PainelView.js, porque ele é responsável pela interface. O StorageService.js continua responsável apenas pelo armazenamento.

3. Para o código funcionar separado em 4 arquivos, tivemos que usar 'export' e 'import'. O que isso tem a ver com a "Modularização (ES6 Modules)"?
R: A modularização permite dividir o sistema em arquivos menores. O export disponibiliza uma classe ou função e o import permite utilizá-la em outro arquivo.
=========================================================
*/


import Voo from "./Voo.js";

import {
    salvarVoo,
    buscarVoos
} from "./StorageService.js";

import renderizarTela from "./PainelView.js";

import AgenteIoTService from "./AgenteIoTService.js";


// ======================================================
// FUNÇÃO PARA ATUALIZAR A TELA
// ======================================================

function atualizarTela() {

    const tela =
        document.getElementById("telaPainel");

    tela.innerHTML = "";


    frota.forEach(voo => {

        tela.innerHTML += `
            <div class="card">

                <h3>✈️ ${voo.codigo}</h3>

                <p>Destino: ${voo.destino}</p>

                <p>Status: ${voo.status}</p>

                <p>
                    Tempo para decolagem:
                    ${voo.tempoParaDecolagem}
                </p>

            </div>
        `;

    });

}


// ======================================================
// CARREGAR VOOS
// ======================================================

let frota = [];


// Busca os voos armazenados

const dadosSalvos = buscarVoos();


// Transforma os dados novamente em objetos Voo

dadosSalvos.forEach(dado => {

    const voo = new Voo(
        dado.codigo,
        dado.destino
    );

    voo.status = dado.status;

    voo.tempoParaDecolagem =
        dado.tempoParaDecolagem ?? 3;

    frota.push(voo);

});


// ======================================================
// CADASTRAR VOO
// ======================================================

const botaoCadastrar =
    document.getElementById("btnCadastrar");


botaoCadastrar.addEventListener("click", () => {

    const codigo =
        document.getElementById("inputCod").value.trim();

    const destino =
        document.getElementById("inputDest").value.trim();


    if (codigo === "" || destino === "") {

        alert("⚠️ Preencha o código e o destino!");

        return;

    }


    const novoVoo =
        new Voo(codigo, destino);


    frota.push(novoVoo);


    salvarVoo(novoVoo);


    atualizarTela();


    document.getElementById("inputCod").value = "";

    document.getElementById("inputDest").value = "";

});


// ======================================================
// PRIMEIRA RENDERIZAÇÃO
// ======================================================

function atualizarTela() {

    renderizarTela(frota);

}


// ======================================================
// AGENTE IoT
// ======================================================

const agente =
    new AgenteIoTService(
        frota,
        atualizarTela
    );


agente.iniciarMonitoramentoCorreto();