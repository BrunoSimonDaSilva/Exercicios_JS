var banana = Number(window.prompt("Digite o valor da banana: "));
var maca = Number(window.prompt("Digite o valor da maçã: "));
var morango = Number(window.prompt("Digite o valor da morango: "));

if (banana <= maca && banana <= morango) {
    document.write("Compre a Banana.")
}
else if (maca <= morango){
    document.write("Compre a maçã.")
}
else{
    document.write("Compre o Morango.")
}