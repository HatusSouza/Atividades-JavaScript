function Soma(){
    let n1=document.querySelector("#Numero1").value;
    let n2=document.querySelector("#Numero2").value;
    let total = parseFloat(n1)+parseFloat(n2);
document.querySelector("#resposta").innerHTML = "Resultado" + total;
}