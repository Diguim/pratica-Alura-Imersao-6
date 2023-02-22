const cotacaoDoDolar = 5.32;

const valorInput = document.getElementById("valueForConvert");
const resultConvert = document.getElementById("result");

function converterValor(){ 
    console.log(valorInput.value);
    let valorEmReal = valorInput.value * cotacaoDoDolar;

    resultConvert.innerHTML = `${valorInput.value} Dolares equivale a R$${valorEmReal.toFixed(2)}`;
}