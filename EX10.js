var per = window.prompt("Digite o turno que você estuda: [digitar M-matutino ou V-Vespertino ou N- Noturno]").toUpperCase();
while (true){
    per = window.prompt("Valor informado Errado. Digite o turno que você estuda: [digitar M-matutino ou V-Vespertino ou N- Noturno]").toUpperCase();
    if (per == "M"){
        document.write("Tenha um Bom Dia e boa aula.")
        break
    }
    if (per == "V"){
        document.write("Tenha uma Boa tarde e boa aula.")
        break
    }
    if (per == "N"){
        document.write("Tenha uma Boa Noite e boa aula.")
        break
    }
}