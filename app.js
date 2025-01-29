let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('#amigo');
    if (nome.value == "") {
        alert("Digite um nome por favor!");
    } else {
        amigos.push(nome.value);
    }
    limparCampo();
    listaDeAmigos();
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function listaDeAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar os novos itens

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item); // Adiciona o item à lista
    }
}

function sortearAmigo(){
    let resultado = document.querySelector("#resultado")
    const sorteioAmigo = document.createElement("li")
    let indiceSorteado = sorteioNome()
    sorteioAmigo.textContent = amigos[indiceSorteado]
    resultado.appendChild(sorteioAmigo)
}


function sorteioNome(){
   return Math.floor(Math.random()* amigos.length)  
}