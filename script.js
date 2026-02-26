// A Classe Voo com seus atributos e métodos
class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.status = 'No solo';
        this.altitude = 0;
    }

    decolar() {
        if (this.status === 'No solo') {
            this.status = 'Em voo';
            this.altitude = 10000;
            this.atualizarStatus();
        } else {
            alert('Atenção: O avião já está no ar!');
        }
    }

    pousar() {
        if (this.status === 'Em voo') {
            this.status = 'No solo';
            this.altitude = 0;
            this.atualizarStatus();
        } else {
            alert('Atenção: O avião já está no solo!');
        }
    }

    atualizarStatus() {
        // Atualiza os textos no HTML
        document.getElementById('info-codigo').innerText = this.codigo;
        document.getElementById('info-origem').innerText = this.origem;
        document.getElementById('info-destino').innerText = this.destino;
        document.getElementById('info-status').innerText = this.status;
        document.getElementById('info-altitude').innerText = this.altitude + ' pés';

        // Atualiza a imagem do avião (animação CSS)
        const imagem = document.getElementById('imagem-aviao');
        if (this.status === 'Em voo') {
            imagem.classList.add('voando'); 
        } else {
            imagem.classList.remove('voando'); 
        }
    }
}

// Criando nosso objeto na memória do computador
const meuVoo = new Voo('JS-2024', 'São Paulo', 'Rio de Janeiro');

// Mostra os dados iniciais na tela
meuVoo.atualizarStatus();

// Configurando os botões para executar as ações do nosso objeto
document.getElementById('btn-decolar').addEventListener('click', () => meuVoo.decolar());
document.getElementById('btn-pousar').addEventListener('click', () => meuVoo.pousar());