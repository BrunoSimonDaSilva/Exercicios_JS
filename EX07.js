var n1 = Number(window.prompt("Digite um número:"));
var n2 = Number(window.prompt("Digite um número:"));
var n3 = Number(window.prompt("Digite um número:"));
var maior
var menor
for (var c=1; c<=4; c++) {
    if(c===1) {
        maior = n1
        menor = n1
    }
    else{
        if (n2 > maior){
            maior=n2
        }
        if (n3 > maior){
            maior=n3
        }
        if (n2 < menor){
            menor=n2
        }
        if (n3 < menor){
            menor=n3
        }
    }
}
document.write("O maior número é", maior, " e o menor é ",menor);
