function Reajuste(){
    let salarioAtual = parseFloat(document.querySelector("#salario").value)
let PorcentagemReajuste = 0
let ValorReajuste=0
let SalarioNovo=0

if (salarioAtual <=280){
    PorcentagemReajuste=20}

else if(salarioAtual<=780)
{PorcentagemReajuste=15}
else{PorcentagemReajuste=5}



ValorReajuste=salarioAtual*(PorcentagemReajuste/100)
SalarioNovo=ValorReajuste+salarioAtual

document.querySelector("#resposta").innerHTML="Salario Atual: R$ "+salarioAtual
document.querySelector("#resposta").innerHTML+="<br>Porcentual de Reajuste: "+PorcentagemReajuste + "%"
document.querySelector("#resposta").innerHTML+="<br>Valor do Almento: R$ " + ValorReajuste
document.querySelector("#resposta").innerHTML+="<br>Salario Novo: R$ " + SalarioNovo
}



