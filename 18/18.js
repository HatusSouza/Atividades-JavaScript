function Calcular(){
    let numero1=parseFloat(document.querySelector("#numero-1").value)
    let numero2=parseFloat(document.querySelector("#numero-2").value)
    let total=0
    let PositivoNegativo="" 
    let ParImpar=""

    if(document.querySelector("#adicao").checked==true){
        total=numero1+numero2
    }
    else if(document.querySelector("#subtracao").checked==true){
        total=numero1-numero2
    }
    else if(document.querySelector("#multiplicacao").checked==true){
        total=numero1*numero2
    }
    else if(document.querySelector("#divisao").checked==true){
        total=numero1/numero2
    }

    if(total%2==0){
        ParImpar="Par"
    }
    else{
        ParImpar="Impar"
    }

    if(total>=0){
        PositivoNegativo="Positivo"}
        else{
            PositivoNegativo="Negativo"
        }
        document.querySelector("#resposta").innerHTML="Resultado: "+total+"<br>"
        document.querySelector("#resposta").innerHTML+="Resultado: "+ParImpar+"<br>"
        document.querySelector("#resposta").innerHTML+=PositivoNegativo

}