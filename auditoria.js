/* 
RELATÓRIO DE AUDITORIA VIP
Auditores: [Gabriel da costa mota] e [otavio puerta]

1. Por que o código quebrou na linha do constructor do PassageiroVIP? O que faltava e para que serve?
R: [O código quebrou porque faltou o super() no construtor da classe filha. O super() serve para chamar o construtor da classe mãe e inicializar os atributos herdados antes de usar o this.]

2. Por que o método exibirCredencial() deu erro de privacidade? Como resolvemos isso usando o conceito de Getter?
R: [O erro aconteceu porque o atributo #cpf é privado e não pode ser acessado diretamente fora da classe onde foi criado. Resolvemos isso usando um Getter, que permite acessar o valor do CPF de forma segura e controlada.]

3. Por que a linha cliente1.#cpf = "000..." é considerada uma falha de segurança (Encapsulamento)?
R: [Porque ela tenta alterar diretamente um dado privado da classe. O encapsulamento existe para proteger informações sensíveis e impedir modificações externas sem controle, garantindo mais segurança e organização no sistema.]
*/

/*  
=========================================================
RELATÓRIO DE AUDITORIA OOP (Mapeamento e Delegação)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que um dado JSON (ex: {id: "123"}) que vem da internet não possui os métodos da nossa classe Voo? Como o comando 'new' resolve isso?

R: Um objeto JSON é apenas um conjunto de dados, contendo propriedades e valores. Ele não é criado a partir da nossa classe Voo e, por isso, não possui seus métodos. Quando usamos o comando "new Voo(...)", criamos uma nova instância da classe, que recebe tanto os atributos quanto todos os métodos definidos nela, permitindo utilizar as funcionalidades da classe.

2. O que aconteceria com a manutenção do sistema se tivéssemos 15 arquivos diferentes avaliando a velocidade do vento manualmente com "IFs", e amanhã a regra mudasse para "ventos > 100"? Por que colocar essa regra dentro do método da Classe Voo salva a nossa vida?

R: Se a regra estivesse repetida em 15 arquivos, seria necessário alterar todos eles quando a regra mudasse, aumentando o risco de esquecer algum ou causar erros. Colocando essa validação em um método da classe Voo, basta modificar a regra em um único lugar. Assim, todo o sistema passa a utilizar automaticamente a nova regra, deixando o código mais organizado, fácil de manter e menos sujeito a falhas.

=========================================================
*/









// SISTEMA DE EMBARQUE VIP - ESCRITO PELO DEV JÚNIOR
// Contém 3 erros graves de Orientação a Objetos!

class Passageiro {
    #cpf; // Dado sensível, protegido por lei!
    
    constructor(nome, cpfPassado) {
        this.nome = nome;
        this.#cpf = cpfPassado;
    }

    get lerCpf() {
        return this.#cpf;
    }
}

class PassageiroVIP extends Passageiro {
    constructor(nome, cpfPassado, categoriaLounge) {
        // O Junior esqueceu de algo muito importante aqui para a Herança funcionar!
        this.categoriaLounge = categoriaLounge; 
    }

    exibirCredencial() {
        // O Junior tentou acessar o CPF direto, mas ele é privado na classe mãe!
        console.log(`Passageiro VIP: ${this.nome} | CPF: ${this.#cpf} | Lounge: ${this.categoriaLounge}`);
    }
}

try {
    console.log("Iniciando sistema de embarque VIP...");
    
    let cliente1 = new PassageiroVIP("Ana Souza", "111.222.333-44", "Diamante");
    
    // O Junior tentou alterar um dado privado à força!
    cliente1.#cpf = "000.000.000-00"; 
    
    cliente1.exibirCredencial();

} catch (erro) {
    console.error("ALERTA CRÍTICO NO PORTÃO DE EMBARQUE:", erro.message);
}
