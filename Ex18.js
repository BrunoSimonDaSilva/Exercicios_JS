var data = [];
data.push(window.prompt('digite o dia '));
data.push(window.prompt('digite o mes'));
data.push(window.prompt('digite o ano'));
if (data[0] > 31 || data[0] < 1){
  document.write('Valor informado esta incorreto')
}
else if (data[1] > 12 || data[1] < 1){
  document.write('Valor informado esta incorreto')
}
else{
document.write('a data informada é',data)
}