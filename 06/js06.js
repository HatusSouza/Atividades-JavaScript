function CalcularMulta(){
    let peso = document.querySelector("#peso").value;
    let limite= 50;
    let ValorMultaUn = 4 ;
    let excesso = peso-limite;
    let valorTotalMulta= excesso*ValorMultaUn;
    document.querySelector("#resultado").innerHTML ="<b> O peso execido é:</b> "+excesso;
    document.querySelector("#resultado").innerHTML +="<br><b>Valor da Multa:</b>R$" +valorTotalMulta;
}