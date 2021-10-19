function MaiorValor(){
    let numero1=document.querySelector("#numero-1").value
    let numero2=document.querySelector("#numero-2").value
    let numero3=document.querySelector("#numero-3").value
    let maiorNumero= 0

    if(numero1 > numero2 && numero1 > numero3){
        maiorNumero=numero1}
        
        else if (numero2 > numero1 && numero2 > numero3){
            maiorNumero=numero2

        }

        else{
            maiorNumero=numero3     

    }
    document.querySelector("#resposta").innerHTML= "O Maior numero é " + maiorNumero

}