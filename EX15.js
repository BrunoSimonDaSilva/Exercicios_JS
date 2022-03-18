var reta1 = Number(window.prompt("Digite o tamanho da primeira reta: "));
var reta2 = Number(window.prompt("Digite o tamanho da segunda reta: "));
var reta3 = Number(window.prompt("Digite o tamanho da terceira reta: "));

//forma triangulo?
if (reta1 <= reta2 + reta3 && reta2 <= reta1 + reta3 && reta3 <= reta2 + reta1) {
    document.write("O tamanho das retas informdas formam sim um triangulo.")
    //escaleno
    if (reta1 != reta2 && reta1 != reta3 && reta2 != reta3) {
        document.write("O Triangulo informado é escaleno.")
    }

    //equilatero
    else if (reta1 == reta2 && reta1 == reta3 && reta2 == reta3) {
        document.write("O Triangulo informado é Equilátero.")
    }

    //Isosceles
    else if (reta1 == reta2 && reta1 != reta3) {
        document.write("O Triangulo informado é Isósceles.")
    }
    else if (reta1 == reta3 && reta1 != reta2) {
        document.write("O Triangulo informado é Isósceles.")
    }
    else if (reta3 == reta2 && reta1 != reta3) {
        document.write("O Triangulo informado é Isósceles.")
    }
    else if (reta3 == reta2 && reta1 != reta2) {
        document.write("O Triangulo informado é Isósceles.")
    }
}
else {
    document.write("Não é possivel formar um triangulo com os valores informados.")
}


//Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
//Triângulo Equilátero: três lados iguais;
//Triângulo Isósceles: quaisquer dois lados iguais;
//Triângulo Escaleno: três lados diferentes;

//incompleto