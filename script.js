const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body

const header = document.createElement('header');
body.appendChild(header);
const titleText = 'Minha Lista de Tarefas';
const title = document.createElement('h1');
title.innerText = titleText;
header.appendChild(title);

const main = document.createElement('main');
body.appendChild(main);
const section0 = document.createElement('section');
main.appendChild(section0);
section0.id = 'funcionamento';
section0.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
