const input = require('readline-sync')


let lado1, lado2

lado1 = input.question('Lado 1: ')
lado2 = input.question('Lado 2: ')

if(lado1 == lado2){
    console.log('SIM')
}
else{
    console.log('NAO')
}