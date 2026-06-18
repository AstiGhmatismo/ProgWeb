function Contar() {
    var contador = 1;
    var resultado = "";

    while (contador <= 10) {
        resultado += contador + " ";
        contador++;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
