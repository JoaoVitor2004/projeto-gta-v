const plataformas = document.querySelector<HTMLElement>('#lista-plataformas')
const btnSelecionar = document.querySelector<HTMLButtonElement>('#selecionar')

function selecionar() {
    plataformas?.classList.toggle('hide')
}

btnSelecionar?.addEventListener('click', () => selecionar())