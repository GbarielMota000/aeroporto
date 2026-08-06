/* 
=========================================================
RELATÓRIO DE AUDITORIA (SERIALIZAÇÃO E RE-HIDRATAÇÃO)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que o formato JSON (JSON.stringify) não consegue salvar "métodos" (funções) de uma classe, salvando apenas os "atributos" (dados textuais)?
R: O JSON foi criado para armazenar apenas dados, como números, textos, listas e objetos simples. Os métodos são funções e fazem parte da programação da classe, por isso não são convertidos para JSON.

2. O que o JavaScript perde na memória quando converte um Objeto para JSON? (Explique o que é o Prototype).
R: O JavaScript perde o Prototype do objeto. O Prototype é a ligação entre o objeto e sua classe, onde ficam armazenados os métodos, como decolar(). Quando o objeto é convertido para JSON, essa ligação é perdida e ele volta como um objeto comum.

3. Defina o que é "Re-hidratar um Objeto". Como nós consertamos o código do Júnior aplicando essa técnica?
R: Re-hidratar um objeto significa recriar uma instância da classe usando os dados recuperados do JSON. Para isso utilizamos o operador new, copiamos os atributos do objeto lido e recuperamos os métodos da classe.
=========================================================
*/


//============================
// CLASSE
//============================

class Voo {

    constructor(codigo, origem) {

        this.codigo = codigo;
        this.origem = origem;
        this.status = "No Solo";

    }

    decolar() {

        this.status = "Em Voo";

        console.log(`🛫 O voo ${this.codigo} acabou de decolar de ${this.origem}!`);

    }

}

console.log("==================================");
console.log("SALVANDO O VOO NO LOCAL STORAGE");
console.log("==================================");

//============================
// CRIAÇÃO DO OBJETO
//============================

let vooOriginal = new Voo("G3-777", "Curitiba");

console.log("Teste antes de salvar:");

vooOriginal.decolar();


//============================
// SALVANDO
//============================

localStorage.setItem(
    "meuLogbook",
    JSON.stringify(vooOriginal)
);

console.log("Voo salvo com sucesso!");



//============================
// LENDO DO DISCO
//============================

console.log("\n==================================");
console.log("RECUPERANDO O VOO");
console.log("==================================");

let dadosDoDisco = localStorage.getItem("meuLogbook");

let vooRecuperado = JSON.parse(dadosDoDisco);

console.log(vooRecuperado);

console.log("Código:", vooRecuperado.codigo);

console.log("Origem:", vooRecuperado.origem);

console.log("Status:", vooRecuperado.status);



//===================================
// RE-HIDRATAÇÃO DO OBJETO
//===================================

console.log("\nRe-hidratando objeto...");

let vooHidratado = new Voo(

    vooRecuperado.codigo,

    vooRecuperado.origem

);

vooHidratado.status = vooRecuperado.status;


//===================================
// TESTE FINAL
//===================================

console.log("Objeto re-hidratado:");

console.log(vooHidratado);

console.log("Tentando decolar...");

vooHidratado.decolar();

console.log("Status atual:", vooHidratado.status);

console.log("✅ Re-hidratação realizada com sucesso!");