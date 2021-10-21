function CriarCampos(){
    
    let quantidadeCd = parseFloat(document.querySelector("#cds").value);
    
    document.querySelector("#campos").innerHTML=""
    for(let i=1; i <= quantidadeCd;i++){
        document.querySelector("#campos").innerHTML+=i+"<input type='number' id='cd"+i+"'><br>"
    }
}

function CalcularCds(){
    let quantidadeCd = parseFloat(document.querySelector("#cds").value)
    let total=0
    let media=0
    document.querySelector("#resposta").innerHTML=""
    for(let i=1; i <= quantidadeCd;i++){
    total+=parseFloat(document.querySelector("#cd"+i).value)}

    media=total/quantidadeCd
    document.querySelector("#resposta").innerHTML=" Preço Médio por CD : " + media

}