const content = document.getElementById('materialContent');
const title = document.getElementById('materialTitle');
const author = document.getElementById('materialAuthor');
const date = document.getElementById('materialDate');
const subtitle = document.getElementById('materialSubtitle');
const brand = document.querySelector('.navbar-brand');

material = JSON.parse(localStorage.getItem('materia'));

title.innerText = material.titulo;
subtitle.innerText = material.legenda;
content.innerText = material.conteudo;
author.innerText = material.autor.nome;
date.innerText = material.dataCriacao;
brand.innerText = `Green News - ${material.titulo}`;
