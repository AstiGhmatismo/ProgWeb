const QntNota = Number(prompt("Quantas notas você quer digitar?"));
const notas = [];
for (let i=1; i<= QntNota; i++){
    const nota = Number(prompt("Digite a nota:"));
    notas.push(nota)
}
document.writeln(notas);