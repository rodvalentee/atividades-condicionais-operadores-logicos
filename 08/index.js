const diaDaSemana = 3;

if(diaDaSemana>0 && diaDaSemana<8){
    switch (Number(diaDaSemana)){
        case 1:{
            console.log('Segunda Feira')
            break;
        }
        case 2:{
            console.log('Terça Feira')
            break;
        }
        case 3:{
            console.log('Quarta Feira')
            break;
        }
        case 4:{
            console.log('Quinta Feira')
            break;
        }
        case 5:{
            console.log('Sexta Feira')
            break;
        }
        case 6:{
            console.log('Sabado')
            break;
        }
        case 7:{
            console.log('Domingo')
            break;
        }
    }
}
else{
    console.log('O dia da semana informado não é válido.')
}