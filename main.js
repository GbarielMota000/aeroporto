/* 
=========================================================
RELATÓRIO DE AUDITORIA DE CLEAN CODE E SOLID
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. O que significa a sigla SRP (Single Responsibility Principle) e por que aplicamos ela hoje?
R: SRP significa Princípio da Responsabilidade Única. Ele determina que cada módulo ou classe deve ter uma única responsabilidade. Aplicamos esse princípio para separar o modelo dos voos, o armazenamento dos dados, a interface e o fluxo principal em arquivos diferentes.

2. Se amanhã o Diretor do Aeroporto pedir para trocar a interface de "Cards" por uma "Tabela de Excel" no HTML, qual NOME DE ARQUIVO exato precisaremos alterar? Por que essa separação evita que a gente estrague o Banco de Dados sem querer?
R: O arquivo que precisaremos alterar será o PainelView.js, pois ele é responsável pela apresentação dos dados na tela. Como o armazenamento está separado no StorageService.js, podemos modificar a interface sem alterar a lógica do LocalStorage.

3. Para o código funcionar separado em 4 arquivos, tivemos que usar 'export' e 'import'. O que isso tem a ver com a "Modularização (ES6 Modules)"?
R: A modularização permite dividir o programa em arquivos menores e independentes. O export disponibiliza uma classe ou função para outros arquivos, enquanto o import permite utilizar essas funcionalidades em outro módulo. Isso deixa o código mais organizado, reutilizável e fácil de manter.
=========================================================
*/


import Voo from "./Voo.js";

import {
    salvarVoo
} from "./StorageService.js";

import renderizarTela from "./PainelView.js";


// ======================================================
// CADASTRAR VOO
// ======================================================

const botaoCadastrar =
    document.getElementById("btnCadastrar");


botaoCadastrar.addEventListener("click", () => {

    const codigo =
        document.getElementById("inputCod").value;

    const destino =
        document.getElementById("inputDest").value;


    // Verificação dos campos

    if (codigo === "" || destino === "") {

        alert("⚠️ Preencha o código e o destino!");

        return;

    }


    // Criação do objeto

    const novoVoo =
        new Voo(codigo, destino);


    // Salvar no LocalStorage

    salvarVoo(novoVoo);


    // Atualizar a tela

    renderizarTela();


    // Limpar campos

    document.getElementById("inputCod").value = "";

    document.getElementById("inputDest").value = "";

});


// ======================================================
// CARREGAR VOOS AO ABRIR A PÁGINA
// ======================================================

renderizarTela();