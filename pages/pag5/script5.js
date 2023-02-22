const elementoTabela = document.getElementById('tabelaJogadores');
const elInputJogador = document.getElementById('inputJogador');
const elPlayGame = document.getElementById('playGame');

const vetorJogadores = [];

function inserirJogador(){
    insereJogadorNoVetor(elInputJogador.value);
}

function insereJogadorNoVetor (nome){
    let jogador = {
        nome: nome,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    };
    vetorJogadores.push(jogador);
    elInputJogador.value = '';
}

function exibirNaTela(){
    elementoTabela.innerHTML = '';
    iniciarJogo();
}

function iniciarJogo(){
    elementoTabela.innerHTML = '';
    for(let i = 0; i < vetorJogadores.length; i++){
        elementoTabela.innerHTML += `
        <tr>
          <td>${vetorJogadores[i].nome}</td>
          <td>${vetorJogadores[i].vitoria}</td>
          <td>${vetorJogadores[i].empate}</td>
          <td>${vetorJogadores[i].derrota}</td>
          <td>${vetorJogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(vetorJogadores, ${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(vetorJogadores, ${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(vetorJogadores, ${i})">Derrota</button></td>
        </tr>`
    }
}
  
function adicionarVitoria(vetorJogadores, posicao){
    vetorJogadores[posicao].vitoria++;
    vetorJogadores[posicao].pontos += 3;
    exibirNaTela()
}
function adicionarEmpate(vetorJogadores, posicao){
    vetorJogadores[posicao].empate++;
    vetorJogadores[posicao].pontos += 1;
    exibirNaTela()
}
  
function adicionarDerrota(vetorJogadores, posicao){
    vetorJogadores[posicao].derrota++;
    exibirNaTela()
}
