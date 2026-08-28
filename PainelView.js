// VIEW - RESPONSÁVEL PELA INTERFACE

import { buscarVoos } from "./StorageService.js";


function renderizarTela() {

    const tela =
        document.getElementById("telaPainel");

    const frota = buscarVoos();

    tela.innerHTML = "";

    frota.forEach(voo => {

        tela.innerHTML += `
            <div class="card">
                ✈️ ${voo.codigo} - ${voo.destino}
            </div>
        `;

    });

}


export default renderizarTela;