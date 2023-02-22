const jogo = document.getElementById("game");
const valorChute = document.getElementById("inputNumber");
const mensagem = document.getElementById("msg");

const numeroSecreto = parseInt((Math.random() * 1000) + 1);
// se 0 no mathRandom - fica 0 * 1000 = 0, soma com 1, 
//sempre vai dar maior que 1 e até 1000 
//pq o mathRandom fica até 0.9999999999999, logo vira 999 quando * 1000, 
//somando com 1 fica 1000.

//fazer tentativas máximas
//variavel de controle de quantidade de chutes

let qtdChute = 0;

function tentarAcertar() {
    console.log(valorChute.value)
    console.log(numeroSecreto)
    let chute = valorChute.value;

    qtdChute++;

    if (numeroSecreto == chute) {
        mensagem.innerHTML = `Acertou em ${qtdChute} chutes - NUMERO SECRETO: ${numeroSecreto}`;
    } else if (numeroSecreto > chute) {
        mensagem.innerHTML = `Errou... o número secreto é MAIOR do que ${chute} Quantidade de chutes: ${qtdChute}`;
    } else if (numeroSecreto < chute) {
        mensagem.innerHTML = `Errou... o número secreto é MENOR do que ${chute} Quantidade de chutes: ${qtdChute}`;
    }
    if (qtdChute >= 11) {
        console.log("Já tentou além, voce é ruim nesse jogo");
    }
    valorChute.value = 0;
}