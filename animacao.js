const projetos = document.querySelectorAll('.projetos');

const setarClasses = () => {
const classes = ['esquerda','ativo','direita'];
projetos.forEach((projeto, index) => projeto.classList.add(classes[index]))
}


const mudarPosition = (e) => {
    const projetoClicado = e.currentTarget
    const projetoAtivo = document.querySelector('.projetos.ativo')
    if(projetoClicado.classList.contains('ativo')) return;
    const classesDe = e.currentTarget.className
    const classesPara = projetoAtivo.className
    projetoClicado.className = classesPara
    projetoAtivo.className = classesDe

}

projetos.forEach((projeto) => {
    projeto.addEventListener('click', mudarPosition)
})

setarClasses();