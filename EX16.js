var a = Number(window.prompt("Digite o valor da equação A: "));
var delta;
if (a == 0){
    document.write("A equação não é do segundo grau.")
}
else {
    var b = Number(window.prompt("Digite o valor da equação B: "));
    var c = Number(window.prompt("Digite o valor da equação C: "));
    delta = (b**2)-(4*a*c)


    if (delta < 0){
        document.write("A equação não possue raizes reais. Delta = ",delta)
    }
    else if (delta == 0){
        document.write("A equação possue apenas uma raiz real. Delta = ",delta)
    }
    else if (delta > 0){
        document.write("A equação possue duas raizes reais. Delta = ", delta)
    }
}







//Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
//Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
//Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
//Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;