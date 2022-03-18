var ano = Number(window.prompt("Digite o ano desejavel."));

if ((ano%4 == 0) && (ano%100 != 0)){
  document.write('o ano informado é bissexto ')}
else if (ano%400 == 0){
  document.write('o ano informado é bissexto')
  
}
else{
  document.write('o ano nao é bissexto ')
}