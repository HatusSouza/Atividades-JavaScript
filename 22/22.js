function Contar(){
    let comeco=parseFloat(document.querySelector("#comeco").value)
    let final=parseFloat(document.querySelector("#final").value)
    let total=0

    document.querySelector("#resposta").innerHTML=""

    for(let i=comeco; i<=final; i++){
        document.querySelector("#resposta").innerHTML += i+"<br>"
        total+=i;
    }
    document.querySelector("#resposta").innerHTML+="Soma "+total
}