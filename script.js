// 1. CLASSE MÃE (Superclasse)
class Voo {
    // Adicionei o "idPainel" para o JS saber qual painel atualizar (jato ou carga)
    constructor(codigo, origem, destino, idPainel) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.idPainel = idPainel; 
        this.status = 'No solo';
        this.altitude = 0;
    }

    decolar() {
        if (this.status === 'No solo') {
            this.status = 'Em voo';
            this.altitude = 10000;
            this.atualizarStatus();
        } else {
            alert(`O voo ${this.codigo} já está no ar!`);
        }
    }

    pousar() {
        if (this.status === 'Em voo') {
            this.status = 'No solo';
            this.altitude = 0;
            this.atualizarStatus();
        } else {
            alert(`O voo ${this.codigo} já está no solo!`);
        }
    }

    atualizarStatus() {
        // Usa o idPainel para atualizar o HTML correto (ex: 'jato-codigo' ou 'carga-codigo')
        document.getElementById(`${this.idPainel}-codigo`).innerText = this.codigo;
        document.getElementById(`${this.idPainel}-status`).innerText = this.status;
        document.getElementById(`${this.idPainel}-altitude`).innerText = this.altitude + ' pés';

        const imagem = document.getElementById(`img-${this.idPainel}`);
        if (this.status === 'Em voo') {
            imagem.classList.add('voando');
        } else {
            imagem.classList.remove('voando');
        }
    }
}

// ==========================================
// 2. SUBCLASSE 1: Jato Executivo
// Usa o "extends Voo" para herdar decolar(), pousar(), etc.
// ==========================================
class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino, idPainel) {
        // O super() chama o constructor da classe Voo. Obrigatório fazer isso primeiro!
        super(codigo, origem, destino, idPainel);
        
        // Atributo exclusivo do Jato
        this.modoSupersonico = false; 
    }

    ativarSupersonico() {
        if (this.status === 'Em voo' && !this.modoSupersonico) {
            this.modoSupersonico = true;
            this.altitude = 50000; // Sobe drasticamente
            this.atualizarStatus();
        } else {
            alert('Para ativar o modo supersônico, o jato precisa estar em voo normal!');
        }
    }

    desativarSupersonico() {
        if (this.modoSupersonico) {
            this.modoSupersonico = false;
            this.altitude = 10000; // Volta a altitude normal
            this.atualizarStatus();
        }
    }

    // Polimorfismo: Substituímos o atualizarStatus para adicionar a regra exclusiva do Jato
    atualizarStatus() {
        super.atualizarStatus(); // Chama a atualização básica da classe Mãe
        
        // Adiciona a atualização exclusiva da tela do jato
        const textoSuper = this.modoSupersonico ? 'Ativado 🔥' : 'Desativado';
        document.getElementById(`${this.idPainel}-super`).innerText = textoSuper;
    }
}

// ==========================================
// 3. SUBCLASSE 2: Voo de Carga
// ==========================================
class VooCarga extends Voo {
    constructor(codigo, origem, destino, idPainel, capacidadeMaxima) {
        super(codigo, origem, destino, idPainel); // Classe mãe faz a parte dela
        
        // Atributos exclusivos do Cargueiro
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(peso) {
        if (this.status !== 'No solo') {
            alert('Não é possível embarcar carga com o avião voando!');
            return;
        }

        if (this.cargaAtual + peso > this.capacidadeMaxima) {
            alert(`Capacidade excedida! Limite é ${this.capacidadeMaxima} toneladas.`);
        } else {
            this.cargaAtual += peso;
            this.atualizarStatus();
        }
    }

    // Polimorfismo: Atualização exclusiva do cargueiro
    atualizarStatus() {
        super.atualizarStatus(); // Atualiza código, status, altitude (Mãe)
        
        // Atualiza a parte da carga (Filha)
        document.getElementById(`${this.idPainel}-max`).innerText = this.capacidadeMaxima;
        document.getElementById(`${this.idPainel}-atual`).innerText = this.cargaAtual;
    }
}

// ==========================================
// 4. CRIANDO OS OBJETOS E CONECTANDO O DOM
// ==========================================

// Criando o Jato ('jato' é o prefixo que usamos no HTML)
const meuJato = new JatoExecutivo('JT-001', 'São Paulo', 'Nova York', 'jato');
meuJato.atualizarStatus();

// Criando o Cargueiro (Capacidade de 100 toneladas, 'carga' é o prefixo do HTML)
const meuCargueiro = new VooCarga('CG-999', 'Manaus', 'Miami', 'carga', 100);
meuCargueiro.atualizarStatus();


// --- Eventos dos Botões do JATO ---
document.getElementById('btn-jato-decolar').addEventListener('click', () => meuJato.decolar());
document.getElementById('btn-jato-pousar').addEventListener('click', () => meuJato.pousar());
document.getElementById('btn-ativar-super').addEventListener('click', () => meuJato.ativarSupersonico());
document.getElementById('btn-desativar-super').addEventListener('click', () => meuJato.desativarSupersonico());

// --- Eventos dos Botões do CARGUEIRO ---
document.getElementById('btn-carga-decolar').addEventListener('click', () => meuCargueiro.decolar());
document.getElementById('btn-carga-pousar').addEventListener('click', () => meuCargueiro.pousar());

document.getElementById('btn-embarcar').addEventListener('click', () => {
    // Pega o valor digitado no input e transforma em número
    const inputPeso = document.getElementById('input-peso').value;
    const peso = parseFloat(inputPeso);
    
    // Verifica se a pessoa digitou um número válido
    if (!isNaN(peso) && peso > 0) {
        meuCargueiro.embarcarCarga(peso);
        document.getElementById('input-peso').value = ''; // Limpa o input
    } else {
        alert('Por favor, digite um peso válido.');
    }
});