let amigos = [];//array que vai armazenar os amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');//pega o campo de texto
    let nomeAmigo = inputAmigo.value;//pega o valor do campo
    if (!nomeAmigo) {//se o campo estiver vazio
        alert('Nenhum nome foi informado');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = ''; //limpa o campo
    inputAmigo.focus();//coloca o foco no campo
    atualizarLista();
}
function atualizarLista() {
    let listaAmigos = document.getElementById('listarAmigos');
    listaAmigos.innerHTML = '';//limpa a lista
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');//cria um elemento li
        item.textContent = amigos[i];//adiciona o nome do amigo
        listaAmigos.appendChild(item);//adiciona o item na lista
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo foi adicionado');
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${sorteado} é o amigo secreto`;



}