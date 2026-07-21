/* 1. Header que ganha fundo ao rolar a página */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 110) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* Filtro de projetos */

const botoesFiltro = document.querySelectorAll(".filter-btn");
const colunasProjeto = document.querySelectorAll(".project-col");

botoesFiltro.forEach((botao) => {

    botao.addEventListener("click", () => {

        botoesFiltro.forEach((btn) => btn.classList.remove("active"));
        botao.classList.add("active");

        const filtro = botao.dataset.filter;

        colunasProjeto.forEach((coluna) => {
            const deveMostrar = filtro === "all" || coluna.classList.contains(filtro);
            coluna.style.display = deveMostrar ? "block" : "none";

        });

    });

});