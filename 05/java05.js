function PesoIdeal(){
    let altura = document.querySelector("#altura").value;
    let Peso = (72.7*altura)-58
    document.querySelector("#pesoidealr").innerHTML ="Seu Peso ideal é " + Peso +"Kg";
}