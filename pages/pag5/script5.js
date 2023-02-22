const paulo = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0  
}
  
const rafa = {
    nome: 'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0  
}
  
const elementoTabela = document.getElementById('tabelaJogadores');
  exibirNaTela();
  
function exibirNaTela(){
    elementoTabela.innerHTML = `
        <tr>
          <td>${paulo.nome}</td>
          <td>${paulo.vitoria}</td>
          <td>${paulo.empate}</td>
          <td>${paulo.derrota}</td>
          <td>${paulo.pontos}</td>
          <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
          <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>`
}
  
function adicionarVitoria(jogador){  
    jogador.vitoria++;
    jogador.pontos += 3;
    exibirNaTela()
}
function adicionarEmpate(jogador){
    jogador.empate++;
    jogador.pontos += 1;
    exibirNaTela()
}
  
function adicionarDerrota(jogador){
    jogador.derrota++;
    exibirNaTela()
}
  
  
  //FAZER LISTA COM JOGADORES E FOR PARA EXIBIR TELA, TALVEZ ATÉ CADASTRAR JOGADORES
  
  //PERSONALIZAR TABELA: PARA O JOGO QUE GOSTA - KILL, DEATH, KD, VIT, DER, ASSIST, RANK
  
  //COMPARTILHAR NAS REDES SOCIAIS