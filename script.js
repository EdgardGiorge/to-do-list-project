const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body

const header = document.createElement('header');
body.appendChild(header);
const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas'; /* Título no header */
header.appendChild(title);

const main = document.createElement('main');
body.appendChild(main); /* cria parte principal do site */
const section0 = document.createElement('section');
main.appendChild(section0); /* cria a descrição do site */
section0.id = 'funcionamento';
section0.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

const input0 = document.createElement('input');
main.appendChild(input0); /* Ref. aula 6.1 - parte 2 do course */
input0.id = 'texto-tarefa'; /* Cria o campo de Entrada de valor */
input0.placeholder = 'Insira uma tarefa'; /* Texto de ajuda dentro do campo input */

const button0 = document.createElement('button');
main.appendChild(button0);
button0.id = 'criar-tarefa'; /* botão Adicionar */
button0.innerText = 'Adidionar';

const ol0 = document.createElement('ol'); /* lista Ordenada */
main.appendChild(ol0);
ol0.id = 'lista-tarefas';

let itemList = 0; /* cria array de vazia fora da função */
function adItemList() {
  const text = input0.value; /* recup. o valor de input(digitado) */
  if (input0.value !== '') {
    itemList = document.createElement('li'); /* Cria li */
    ol0.appendChild(itemList); /* determina o pai */
    itemList.innerText = text; /* inseri o valor digitado na li */
    input0.value = ''; /* zera a entrada */
    itemList.id = 'itemList';
  }
} /* Ao clicar no button0, acione a função adItemList */
button0.addEventListener('click', adItemList);

function selecItem(itemClicado) { /* Seleção de item da lista */
  const linePaint = document.querySelector('.selItem'); /* Traz tags com esta classe */
  const lineClick = itemClicado.target; /* var de item clicado */
  if (lineClick.id === 'itemList') { /* Se a tag tiver este id */
    if (linePaint !== null) { /* Se as tag's conterem a classe(selItem) */
      linePaint.classList.remove('selItem'); /* remova esta classe de todos */
      lineClick.classList.add('selItem'); /* add esta classe ao item clicado */
    } else { /* Se não, houver a classe, faça isso.. */
      lineClick.classList.add('selItem'); /* add esta classe ao item clicado */
    }
  }
} /* Ao clicar no item da lista (ol), aciona a função selecItem */
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
const button6 = document.createElement('button');
section1.appendChild(button6); /* Botão Remover Selecionado */
button6.id = 'remover-selecionado';
button6.innerText = 'X';
const button4 = document.createElement('button');
section1.appendChild(button4); /* Botão Mover pra cima */
button4.id = 'mover-cima';
button4.innerText = 'Up';
const button5 = document.createElement('button');
section1.appendChild(button5); /* Botão Mover pra baixo */
button5.id = 'mover-baixo';
button5.innerText = 'Down';
const button2 = document.createElement('button');
section1.appendChild(button2); /* Botão Limpar Completos */
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

function removOk() { /* Remove itens completos */
  const completos = document.querySelectorAll('.completed');
  for (let i = 0; i < completos.length; i += 1) {
    ol0.removeChild(completos[i]); /* remove child do ol */
  }
}
button2.addEventListener('click', removOk);

const button3 = document.createElement('button');
section1.appendChild(button3); /* Botão Salvar Lista */
button3.id = 'salvar-tarefas';
button3.innerText = 'Salvar Lista';

function salvaLista() {
  const itens = ol0.innerHTML; /* recupera toda lista */
  localStorage.setItem('lista', itens); /* salva modo chave, objeto */
}
button3.addEventListener('click', salvaLista);

function pegaLista() {
  ol0.innerHTML = localStorage.getItem('lista'); /* "pega" a chave */
}
pegaLista();

function upItem() { /* Ref. Mentoria Joel 25/11/2021 */
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].classList.contains('selItem') && lista[i].previousElementSibling !== null) {
      lista[i].parentElement.insertBefore(lista[i], lista[i].previousElementSibling);
    }
  }
}
button4.addEventListener('click', upItem);

function downItem() { /* Ref. Mentoria Joel 25/11/2021 */
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].classList.contains('selItem') && lista[i].nextElementSibling !== null) {
      lista[i].parentElement.insertBefore(lista[i].nextElementSibling, lista[i]);
    }
  }
}
button5.addEventListener('click', downItem);

function removeSelected() { /* Seleção de item da lista */
  const selecionados = document.querySelectorAll('.selItem');
  for (let i = 0; i < selecionados.length; i += 1) {
    ol0.removeChild(selecionados[i]); /* remove child do ol */
  }
} /* Ao clicar no item da lista (ol), aciona a função removeSelected */
button6.addEventListener('click', removeSelected);
