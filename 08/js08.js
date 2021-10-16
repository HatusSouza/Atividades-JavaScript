function CalcularMaiorValor(){
    let N1 = document.querySelector("#numero-1").value 
    let N2 = document.querySelector("#numero-2").value
    let maiorNumero =0;

    if(N1>N2){
        maiorNumero=N1
    }
    else{
        maiorNumero=N2
    }
document.querySelector("#resposta").innerHTML =  " O maior numero é: " + maiorNumero
}