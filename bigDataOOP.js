```javascript
/* 
=========================================================
RELATÓRIO DE AUDITORIA DE BIG DATA (Paradigma Funcional)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Defina com suas palavras a diferença entre '.filter()' e '.map()'. O que o Array de saída tem de diferente do Array de entrada em cada caso?
R: O método .filter() serve para selecionar apenas os elementos que atendem a uma determinada condição. O array de saída geralmente possui menos elementos que o original. Já o método .map() transforma os elementos do array, gerando um novo array com a mesma quantidade de elementos, mas com os dados modificados ou extraídos.

2. O que o método '.reduce()' faz? Por que ele precisa de um parâmetro extra (o "acumulador") que o map e filter não precisam?
R: O método .reduce() percorre todos os elementos de um array para gerar um único resultado final, como uma soma, média ou contador. Ele precisa de um acumulador porque vai guardando o resultado parcial de cada operação até chegar ao valor final.

3. Por que o código usando "filter/map/reduce" (Declarativo) é considerado melhor no mercado de trabalho do que um monte de laços "for" (Imperativo)?
R: Porque ele é mais legível, organizado e fácil de manter. Ao ler o código, é possível entender rapidamente a intenção da operação (filtrar, transformar ou reduzir dados), sem precisar analisar toda a lógica de controle de um laço. Isso reduz erros e facilita futuras alterações no sistema.
=========================================================
*/

// Classe Voo
class Voo {
    constructor(codigo, companhia, status, passageiros) {
        this.codigo = codigo;
        this.companhia = companhia;
        this.status = status;
        this.passageiros = passageiros;
    }
}

// Array de objetos
const frotaAtiva = [
    new Voo("G3-111", "Gol", "Confirmado", 150),
    new Voo("LA-222", "Latam", "Atrasado", 200),
    new Voo("AD-333", "Azul", "Atrasado", 120),
    new Voo("AF-444", "AirFrance", "No Solo", 300)
];

console.log("=== RELATÓRIO PROFISSIONAL ===");

// Filter + Map (encadeamento de métodos)
const codigosAtrasados = frotaAtiva
    .filter(voo => voo.status === "Atrasado")
    .map(voo => voo.codigo);

console.log("Voos Atrasados:", codigosAtrasados);

// Reduce
const totalPassageiros = frotaAtiva
    .reduce((acumulador, voo) => acumulador + voo.passageiros, 0);

console.log("Total de Passageiros voando:", totalPassageiros);
```
