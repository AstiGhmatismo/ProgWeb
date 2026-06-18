function Contador() {
    var limite = document.getElementById("limite").value;
    var resultado = "";

if (limite > 0) {
     for (var contador = 1; contador <= limite; contador++) {
         resultado += contador + " ";
     }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
} else {
    for (var contador = 1; contador >= limite; contador--) {
        resultado += contador + " ";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
}
