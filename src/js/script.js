"use strict";
const plataformas = document.querySelector('#lista-plataformas');
const btnSelecionar = document.querySelector('#selecionar');
function selecionar() {
    plataformas === null || plataformas === void 0 ? void 0 : plataformas.classList.toggle('hide');
}
btnSelecionar === null || btnSelecionar === void 0 ? void 0 : btnSelecionar.addEventListener('click', () => selecionar());
