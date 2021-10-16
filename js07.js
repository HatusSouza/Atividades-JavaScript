function CalcularSalario(){
    let salarioBruto = document.querySelector("#salario-bruto").value
    let inss = salarioBruto *8 /100;
    let ir = salarioBruto * 11/100;
    let sindicato = salarioBruto *5/100;
    let descontos= inss+ir+sindicato;
    let salarioliquido= salarioBruto-descontos;
   document.querySelector("#resposta").innerHTML = "Ir: R$"+ir+"<br>";
    document.querySelector("#resposta").innerHTML += "<b>Inss:</b>R$"+inss+"<br>";
    document.querySelector("#resposta").innerHTML += "<b>Sindicato:</b>R$"+sindicato+"<br>"
    document.querySelector("#resposta").innerHTML += "<b>Salario Liquido:</b>R$"+salarioliquido;
}