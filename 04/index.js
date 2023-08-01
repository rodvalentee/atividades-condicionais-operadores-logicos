const input = require('readline-sync')


let altura

altura = input.question('Digite a altura em cm: ')

if(altura>=180){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}