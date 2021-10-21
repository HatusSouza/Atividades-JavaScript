function GerarTabuada(){
    let tabuada=parseFloat(document.querySelector("#tabuada").value) 
    let inicio=parseFloat(document.querySelector("#inicio").value)
    let fim=parseFloat(document.querySelector("#fim").value)

    if(fim<inicio){
        document.querySelector("#resposta").innerHTML="Fim não pode ser menor que o inicio"
        return
    }
    document.querySelector("#resposta").innerHTML=" Vou montar a Tabuada de: " + tabuada + " Começando em: " + inicio + " Terminando em: " + fim +"<br>"
    for(i=inicio; i<=fim;i++){
        document.querySelector("#resposta").innerHTML+=i + "x" +tabuada+" = " + (tabuada*i)+ "<br>"

    }
}