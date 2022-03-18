var sexo = window.prompt("Digite seu Sexo [M/F em maiúsculo]: ");
if (sexo == "F"){
    document.write("Sexo Feminino.")
}
else if (sexo == "M") {
    document.write("Sexo Masculino")
}
else {
    document.write("Valor informado é invalido. Tente novamente.")
}