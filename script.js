const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body
const header = document.createElement('header');
body.appendChild(header);
const titleText = 'Minha Lista de Tarefas';
const title = document.createElement('h1');
title.innerText = titleText;
header.appendChild(title);
