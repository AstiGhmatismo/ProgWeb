function Disciplina() {
    let nota = Number (document.getElementById("nota").value);
    let notas = [];
    let resultado = " ";
    let somafunf = Number()

    if (nota > 0) {
        for (var contador = 1; contador <= nota; contador++) {
            notas[contador] = parseFloat(prompt("Digite a nota:"));
            somafunf = somafunf + notas[contador]
        }
    } else {
      resultado = String("Numero de notas não é válido")
    }

    if (somafunf/(contador-1) >= 6){
        aprovacao = String("Aprovado. ")
    }
    else {
        aprovacao = String("Reprovado. ")
    }

    resultado = String(" A média do aluno foi " + somafunf/(contador-1) + " O aluno esta " + (aprovacao))


    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}
