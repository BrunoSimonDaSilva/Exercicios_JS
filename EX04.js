var letra = window.prompt("Digite uma letra em minúsculo : ");
if (letra.toLocaleLowerCase == "a" || letra.toLocaleLowerCase == "e" || letra.toLocaleLowerCase == "i" || letra.toLocaleLowerCase == "o" || letra.toLocaleLowerCase == "u") {
    console.log("A letra informada é uma consoante.")
}

else {
    console.log("A letra informada é uma vogal.")
}