var a = Number(window.prompt('Digite um número: '));
var b = Number(window.prompt('Digite um número: '));
var c = Number(window.prompt('Digite um número: '));

if (a >= b && a >= c && b >= c){
    document.write("A ordem decrescente é:", a, b, c)
}
else if (a >= b && a >=c && c >= b){
    document.write("A ordem decrescente é:", a, c, b)
}
else if (b >= a && b >= c && a >= c){
    document.write("A ordem decrescente é:", b, a, c)
}
else if (b >= a && b >= c && c >= a){
    document.write("A ordem decrescente é:", b, c, a)
}
else if (c >= a && c >= b && a >=b){
    document.write("A ordem decrescente é:", c, a, b)
}
else if (c >= a && c >= b && b >= a){
    document.write("A ordem decrescente é:", c, b, a)
}