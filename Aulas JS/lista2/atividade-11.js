function Tabuada() {
    var limite = document.getElementById("limite").value;
    var resultado = "";

    if (limite > 0) {
        for (var contador = 1; contador <= 10; contador++) {
            resultado += limite + " x " + contador + " = " + (limite * contador) + "<br>";
        }
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira um número positivo.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
