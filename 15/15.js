function Conceito(){
    let nota1=parseFloat(document.querySelector("#nota-1").value)
    let nota2=parseFloat(document.querySelector("#nota-2").value)
    let media=(nota1+nota2)/2
let conceito=""
let mensagem = ""
    if(media>=9){
        conceito="A"
    }
    else if(media>=7.5 && media<9){
         conceito="B"
    }
    else if(media>=6 && media<7.5){
         conceito="C"
    }
    else if (media>=4.0 && media <6){
         conceito="D"
    }
    else{
         conceito="E"
        
    }
if(conceito=="A",conceito=="B",conceito=="C"){
    mensagem="Aprovado"
}
else {
     mensagem="Reprovado"
}

document.querySelector("#resposta").innerHTML="Nota 1: "+nota1
document.querySelector("#resposta").innerHTML+="<br>Nota 1: "+nota2
document.querySelector("#resposta").innerHTML+="<br>Conceito: "+conceito
document.querySelector("#resposta").innerHTML+="<br>"+mensagem
}