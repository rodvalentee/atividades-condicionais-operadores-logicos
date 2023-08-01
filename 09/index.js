const tipoDePagamento = "debito";

const valorDoProduto = 13000;

let valorFinal
if(tipoDePagamento=='credito'){
    valorFinal = valorDoProduto - (valorDoProduto*0.05)
    console.log('Valor a ser pago: R$', valorFinal.toFixed(2))
}
else if(tipoDePagamento=='cheque'){
    valorFinal = valorDoProduto - (valorDoProduto*0.03)
    console.log('Valor a ser pago: R$', valorFinal.toFixed(2))
}
else{
    valorFinal = valorDoProduto - (valorDoProduto*0.1)
    console.log('Valor a ser pago: R$', valorFinal.toFixed(2))
}