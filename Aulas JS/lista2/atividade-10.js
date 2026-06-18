function Contador() {
    var limite = document.getElementById("limite").value;
    var resultado = "";

if (limite > 0) {
     for (var contador = 0; contador <= limite; contador++) {
         if (contador % 2 === 0) {
             resultado += contador + " ";
         }
     }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
} else {
    document.getElementById("resultado").innerText = "Por favor, insira um número positivo.";
}
}
