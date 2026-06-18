var input = parseFloat(window.prompt("Quanto você quer investir? "))
var saldo = parseFloat(0);
var mes = 0;

saldo = input
saldo = saldo+(saldo*0.005);
document.writeln("Mês: "+mes+" Saldo: "+ saldo);
mes++;

while(mes<=24){
    saldo = saldo+(saldo*0.005);
    saldo = saldo+input;
    document.writeln("Mês: "+mes+" Saldo "+ saldo);
    mes++;
}