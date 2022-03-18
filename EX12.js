var horatrab = Number(window.prompt("Digite quanto é seu salario por hora: "));
var mes = Number(window.prompt("Digite queantas horas você trabalhou neste mes: "));
var salariobruto = horatrab*mes;
var ir

if (salariobruto <= 900){
    ir = 1
}
else if (salariobruto > 900 && salariobruto <= 1500){
    ir = 5
}
else if (salariobruto > 1500 && salariobruto <= 2500){
    ir = 10
}
else if (salariobruto > 2500){
    ir = 20
}
document.write("O salário bruto é R$",salariobruto);
document.write("- IR (",ir,"%). ...R$",(salariobruto/100)*ir);
document.write("- INSS (10%).   ...R$",(salariobruto/100)*10);
document.write("+ FGTS (11%).   ...R$",(salariobruto/100)*11);
document.write("Desconto total.  ...R$",(((salariobruto/100)*ir)+((salariobruto/100)*10)));
document.write("Salário líquido. ...R$",salariobruto-(((salariobruto/100)*ir)+((salariobruto/100)*10))+(salariobruto/100)*11);