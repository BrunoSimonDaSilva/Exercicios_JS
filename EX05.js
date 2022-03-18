var nota1 = Number(window.prompt("Digite a primeira nota do aluno:"));
var nota2 = Number(window.prompt("Digite a segunda nota do aluno:"));
var media = (nota1 + nota2)/2;
document.write("A media é : ",media);
if (media >= 7 && media < 10){
    document.write("Aprovado.")
}
else if (media < 7){
    document.write("Reprovado.")
}
else if (media >= 10){
    document.write("Aprovado com distinção.")
}