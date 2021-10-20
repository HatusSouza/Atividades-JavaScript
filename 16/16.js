function DiaSemana(){
    let dia=document.querySelector("#dia").value
    let DiaDaSemana=""

    if(dia==1){
        DiaDaSemana="Domingo"
    }
    else if(dia==2){
        DiaDaSemana="Segunda-Feira"
    }
    else if(dia==3){
        DiaDaSemana="Terça-Feira"
    }
    else if(dia==4){
        DiaDaSemana="Quarta-Feira"
    }
    else if(dia==5){
        DiaDaSemana="Quinta-Feira"
    }
    else if(dia==6){
        DiaDaSemana="Sexta-Feira"
    }
    else if(dia==7){
        DiaDaSemana="Sabado"
    }
    else{DiaDaSemana="valor-invalido"}

    document.querySelector("#resposta").innerHTML= DiaDaSemana
}