var numeros = [2,4,6,8,10,12,14,16,18,20];
const initialValue = 0;
const sumWithInitial = numeros.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
document.writeln("A soma de todos os elementos é: ", sumWithInitial);