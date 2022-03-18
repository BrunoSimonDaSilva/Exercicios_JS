var n1 = Number(window.prompt("Digite um número:"));
var n2 = Number(window.prompt("Digite um número:"));
var n3 = Number(window.prompt("Digite um número:"));
var maior
for (var c=1; c<=4; c++) {
    if(c===1) {
        maior = n1
    }
    else{
        if (n2 > maior){
            maior=n2
        }
        if (n3 > maior){
            maior=n3
        }
    }
}
console.log("O maior número é", maior);