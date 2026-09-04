function renderizarTela(frota) {

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


export default renderizarTela;