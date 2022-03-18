var salario = Number(window.prompt("Digite o valor so seu salário"));

if (salario <= 280){
   document.write("Com o salario de R$",salario," tera um reajuste de 20%. O valor do aumento será de R$",(salario/100)*20,". Aumentando para R$",((salario/100)*20)+salario)
}
else if (salario > 280 && salario <= 700){
   document.write("Com o salario de R$",salario," tera um reajuste de 15%. O valor do aumento será de R$",(salario/100)*15,". Aumentando para R$",((salario/100)*15)+salario)
}
else if (salario > 700 && salario <= 1500){
   document.write("Com o salario de R$",salario," tera um reajuste de 10%. O valor do aumento será de R$",(salario/100)*10,". Aumentando para R$",((salario/100)*10)+salario)
}
else if (salario > 1500){
   document.write("Com o salario de R$",salario," tera um reajuste de 5%. O valor do aumento será de R$",(salario/100)*5,". Aumentando para R$",((salario/100)*5)+salario)
}