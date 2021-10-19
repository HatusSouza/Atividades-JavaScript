function Mensagem(){
    let periodo =document.querySelector("#periodo").value
    let Mensagem= ""

    if(periodo == "m"){
        Mensagem="Bom dia"
    }
    else if(periodo=="v"){
        Mensagem="Boa tarde"
    }
    else if(periodo="n"){
        Mensagem= "Boa noite"
    }
    else{
        Mensagem="---"
    }
    document.querySelector("#resposta").innerHTML= Mensagem
}