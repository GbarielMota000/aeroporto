/* 
=========================================================
RELATÓRIO DE AUDITORIA (DESIGN PATTERN - SINGLETON)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. O que é um "Design Pattern" (Padrão de Projeto) e, especificamente, o que o padrão Singleton garante para a nossa aplicação?
R: Design Pattern é uma solução reutilizável para problemas comuns de programação. O Singleton garante que uma determinada classe tenha apenas uma única instância durante a execução do sistema. No nosso caso, isso garante que todos os setores utilizem a mesma Torre de Controle e compartilhem o mesmo estado da pista.

2. O que a palavra-chave 'static' (estático) faz em uma classe JavaScript? Qual a diferença de uma variável estática para uma variável comum (this)?
R: Uma propriedade static pertence à própria classe e não a cada objeto criado com new. Já uma propriedade criada com this pertence a cada instância individual. No Singleton, usamos static para armazenar a única instância da Torre de Controle e reutilizá-la quando alguém tentar criar outra.

3. Como você comprova no código que 'torreSetorNorte' e 'torreSetorSul' são exatamente o mesmo objeto na memória após a correção? (Dica: tente fazer console.log(torreSetorNorte === torreSetorSul)).
R: A comparação usando === retorna true. Isso comprova que as duas variáveis apontam para exatamente a mesma instância da Torre de Controle na memória.
=========================================================
*/


// ========================================================
// TORRE DE CONTROLE - SINGLETON
// ========================================================

class TorreDeControle {

    // Guarda a única instância da classe
    static instancia;

    constructor() {

        // Se já existe uma torre, retorna a mesma
        if (TorreDeControle.instancia) {
            return TorreDeControle.instancia;
        }

        // Primeira instância
        this.pistaOcupada = false;

        this.nomeDaTorre =
            "Torre Central " +
            Math.floor(Math.random() * 1000);

        // Guarda a primeira instância
        TorreDeControle.instancia = this;
    }


    // ====================================================
    // AUTORIZAR POUSO
    // ====================================================

    autorizarPouso(codigoVoo) {

        if (this.pistaOcupada) {

            console.log(
                `❌ [RECUSADO] Pista ocupada! Voo ${codigoVoo} aguarde.`
            );

        } else {

            this.pistaOcupada = true;

            console.log(
                `✅ [AUTORIZADO] Voo ${codigoVoo} pousando via ${this.nomeDaTorre}.`
            );

        }

    }

}


// ========================================================
// CRIAÇÃO DAS TORRES
// ========================================================

// Setor Norte tenta criar uma torre
let torreSetorNorte = new TorreDeControle();

// Setor Sul tenta criar outra torre
let torreSetorSul = new TorreDeControle();


// ========================================================
// TESTE DO SINGLETON
// ========================================================

console.log("--- TESTANDO SINGLETON ---");

console.log(
    "As duas torres são o mesmo objeto?",
    torreSetorNorte === torreSetorSul
);


// ========================================================
// TESTE DOS POUSOS
// ========================================================

console.log("--- INICIANDO APROXIMAÇÃO ---");

// Primeiro voo
torreSetorNorte.autorizarPouso("LATAM-100");

// Segundo voo
torreSetorSul.autorizarPouso("GOL-200");