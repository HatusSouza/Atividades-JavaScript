function ParImpar(){
let numero=document.querySelector("#numero").value
let mensagem=""

if (numero%2==0){
    mensagem="par"
}
else{
    mensagem="impar"
}

document.querySelector("#resposta").innerHTML= mensagem
}