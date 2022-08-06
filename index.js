let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputAdultos = document.getElementById("adultos");

let reultado = document.getElementById("res");


function calcular(){
    
  
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qtdTotalCarne = (carnePP(duracao) * adultos + ( carnePP(duracao) / 2 * criancas)) /1000;
    let qtdTotalCerveja =(cervejaPP(duracao) * adultos ) /1000; 
    let qtdTotalRefri = (refriPP(duracao) * criancas ) /1000; 
    console.log(qtdTotalCerveja)

    
    reultado.innerHTML = `Quantidade total de carne deve ser ${qtdTotalCarne}kg, 
    a Quantidade total de cerveja deve ser ${qtdTotalCerveja} Litros e 
    a Quantidade de refri deve ser ${qtdTotalRefri} Litros`; 
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2400;
    }else{
        return 1200;
    }
}
function refriPP(duracao){
    if(duracao >= 6){
        return 1300;
    }else{
        return 800;
    }
}