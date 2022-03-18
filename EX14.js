var nota1 = Number(window.prompt("Digite a primeira nota: "));
var nota2 = Number(window.prompt("Digite a segunda nota: "));
var media = (nota1+nota2)/2;

//Média de Aproveitamento  Conceito
//Entre 9.0 e 10.0        A
//Entre 7.5 e 9.0         B
//Entre 6.0 e 7.5         C
//Entre 4.0 e 6.0         D
//Entre 4.0 e zero        E

document.write(media)

if (media === 10 && media >= 9){
    document.write("o conseito do aluno é A");
    document.write("APROVADO.")
}
else if (media < 9 && media >= 7.5){
    document.write("o conseito do aluno é B");
    document.write("APROVADO.")
}
else if (media < 7.5 && media >= 6){
    document.write("o conseito do aluno é C");
    document.write("APROVADO.")
}
else if (media < 6 && media >= 4){
    document.write("o conseito do aluno é D");
    document.write("REPROVADO.")
}
else if (media < 4 && media >= 0){
    document.write("o conseito do aluno é E");
    document.write("REPROVADO.")
}