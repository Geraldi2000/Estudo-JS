// EXERCICIOS
// 1.Prints
console.log("Estou estudando JavaScript!");

// 2.Contas
const A = 3;
const B = 2;
console.log(A**B);
console.log(A*B);
console.log(A+B);
console.log(A/B);
console.log(A-B);

// 3.Prints personalizados

const tecnologia = "PHP";
console.log(`Estou estudando ${tecnologia}!`);

// 5.Prints personalizados
const titulo = document.querySelector('h1');

/* 
  6.Exercícios

  1.Armazene um botão de salvar em uma variável.
  2.Capture o valor do campo de digitação.
  3.Evite o comportamento padrão de envio do formulário.
  4.Impeça que itens vazios sejam adicionados à lista.
  5.Construa dinamicamente cada item da lista com os valores inseridos pelo usuário.
*/

const BotaoSalvarItem = document.getElementById("meu-botao");
const listaPresenca = document.getElementById("Lista-de-presenca");
let contador = 1;

const inputNome = document.getElementById("meu-input");

BotaoSalvarItem.addEventListener("click", (evento) => {
    evento.preventDefault()

    if (inputNome.value === ""){
        alert("Por favor, insira um item!")
        return
    }
    
    const nomesNaLista = document.createElement("li");
    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
    const nomeDaLista = document.createElement("p");
    nomeDaLista.innerText = inputNome.value;
    
    containerLista.appendChild(inputCheckbox)
    containerLista.appendChild(nomeDaLista)

    nomesNaLista.appendChild(containerLista)
    listaPresenca.appendChild(nomesNaLista)

});
/*
  7.Exercícios

  1.No arquivo script.js, selecione o campo de entrada e o botão de salvar usando getElementById.
  
  2.Adicione um ouvinte de eventos ao botão que, ao ser clicado, chama uma função para adicionar a tarefa à lista.
  
  3.Dentro da função, obtenha o valor digitado no campo de entrada e crie um novo elemento HTML para esse item.
  
  4.Imprima no console o valor dentro desse input.

  5.Criando um checkbox com id dinamicos
 */

  const inputTarefa = document.getElementById("tarefa-input");
  const botaoSalvarTarefa = document.getElementById("botao-salvar-tarefa");

  const listaDeTarefas = document.getElementById("Lista-de-tarefas");

  botaoSalvarTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputTarefa.value === ""){
      alert("Por favor, insira um item!")
      return
    }

    const nomeDaTarefa = document.createElement("li");
    const containerListaTarefa = document.createElement("div");
    containerListaTarefa.classList.add("lista-item-container");
    const inputNomeTarefa = document.createElement("input");
    inputNomeTarefa.type = "checkbox";
    inputNomeTarefa.id = "checkbox-" + contador++;
    const tarefaNome = document.createElement("p");
    tarefaNome.innerText = inputTarefa.value;

    containerListaTarefa.appendChild(inputNomeTarefa)
    containerListaTarefa.appendChild(tarefaNome)
    
    nomeDaTarefa.appendChild(containerListaTarefa)
    listaDeTarefas.appendChild(nomeDaTarefa)

    console.log(listaDeTarefas)
  })

