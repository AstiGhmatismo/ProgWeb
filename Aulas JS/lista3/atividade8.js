const QntCity = Number(prompt("Quantas cidades você quer registrar?"));
const cidades = [];
for (let i=1; i<= QntCity; i++){
    const cidade = String(prompt("Digite o nome da cidade:"));
    cidades.push(cidade)
    
}
document.writeln(cidades )