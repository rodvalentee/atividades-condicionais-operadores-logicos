const input = require('readline-sync')

let n1, n2, soma

n1 = Number(input.question('n1: '))
n2 = Number(input.question('n2: '))

soma = n1+n2

if(soma%2==0){
    console.log('par')
}
else{
    console.log('impar')
}