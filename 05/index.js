const input = require('readline-sync')


let altura

altura = input.question('Digite a altura em cm: ')

if(altura<180){
    console.log('REPROVADO')
}
else if(altura>=180 && altura<=185){
    console.log('LÍBERO')
}
else if(altura>=186 && altura<=195){
    console.log('PONTEIRO')
}
else if(altura>=196 && altura<=205){
    console.log('OPOSTO')
}
else{
    console.log('CENTRAL')
}