var numeros = [23,45,67,12,89,34];
let maiornumero = numeros[0];
for( let i=1; i<numeros.length; i++){
   if (numeros[i] > maiornumero) {
    maiornumero = numeros[i]
   }
}
document.writeln("O maior numero é: ", maiornumero)