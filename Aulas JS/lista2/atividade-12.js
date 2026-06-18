var input = parseInt(window.prompt("Digite um valor:"));
var inicio = parseInt(window.prompt("Digite o inicio da tabuada:"));
var fim = parseInt(window.prompt("Digite o fim da tabuada:"));

for(let contador = inicio; contador<=fim; contador = contador+input){
    document.writeln(contador)
}