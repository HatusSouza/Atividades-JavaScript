function VerificarTamanho(){
    let tamanho=document.querySelector("#tamanho").value
    let tamanhoTexto=""

    if(tamanho.toUpperCase()=="G"){
        tamanhoTexto="G - Grande"
    }
    else if(tamanho.toUpperCase()=="M"){
        tamanhoTexto="M - Média"

    }
  else if(tamanho.ToUpperCase()=="P"){
      tamanhoTexto= "p - pequena"
  }
  else{
        tamanhoTexto="Tamanho Invalido"}


    document.querySelector("#resposta").innerHTML= " Tamanho Selicionado " + tamanhoTexto
}
