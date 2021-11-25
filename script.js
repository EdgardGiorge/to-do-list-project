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

const input0 = document.createElement('input');
main.appendChild(input0);
input0.id = 'texto-tarefa'; /* Entrada */

const button0 = document.createElement('button');
main.appendChild(button0);
button0.id = 'criar-tarefa'; /* botão Adicionar */
button0.innerText = 'Adidionar';

const ol0 = document.createElement('ol'); /* lista Ordenada */
main.appendChild(ol0);
ol0.id = 'lista-tarefas';

function adItemList() {
  const text = input0.value; /* recup. o valor de input(digitado) */
  if (input0.value !== '') {
    const itemList = document.createElement('li'); /* Cria li */
    ol0.appendChild(itemList); /* determina o pai */
    itemList.innerText = text; /* inseri o valor digitado na li */
    input0.value = ''; /* zera a entrada */
    itemList.id = 'itemList';
    ol0.style.backgroundColor = 'white'; /* inicio background ol */
  }
}
button0.addEventListener('click', adItemList);

ol0.className = 'selItem';
function selecItem(itemClicado) { /* Seleção de item da lista */
  if (itemClicado.target.id === 'itemList') {
    const linePaint = document.querySelector('.selItem');
    linePaint.classList.remove('selItem');
    itemClicado.target.classList.add('selItem');
  }
}
ol0.addEventListener('click', selecItem);

function throughItem(itemClicado2) { /* Risca item da lista */
  if (itemClicado2.target.classList.contains('completed') === true) {
    itemClicado2.target.classList.remove('completed');
  } else {
    itemClicado2.target.classList.add('completed');
  }
}

ol0.addEventListener('dblclick', throughItem);

const section1 = document.createElement('section');
main.appendChild(section1); /* Section de botões */
const button2 = document.createElement('button');
section1.appendChild(button2); /* Botão Limpar Lista */
button2.id = 'remover-finalizados';
button2.innerText = 'Limpar Completos';
const button1 = document.createElement('button');
section1.appendChild(button1); /* Botão Limpar Lista */
button1.id = 'apaga-tudo';
button1.innerText = 'Limpar Lista';

function delAllItem() { /* apaga toda a <lo> lista */
  ol0.innerText = '';
}

button1.addEventListener('click', delAllItem);

function removOk() {
  const completos = document.querySelectorAll('.completed');
  for (let i = 0; i < completos.length; i += 1) {
    ol0.removeChild(completos[i]); /* remove child do ol */
  }
}

button2.addEventListener('click', removOk);
