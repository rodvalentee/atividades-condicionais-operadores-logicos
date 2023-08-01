const input = require('readline-sync')

let p1, p2

p1 = input.question('P1: ')
p2 = input.question('P2: ')

if( (p1 == 'papel' && p2 == 'pedra') || (p2 == 'papel' && p1 == 'pedra') ){
    console.log('papel')
}
else if( (p1 == 'papel' && p2 == 'tesoura') || (p2 == 'papel' && p1 == 'tesoura') ){
    console.log('tesoura')
}
else{
    console.log('pedra')
}