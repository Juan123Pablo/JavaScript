function media(){

 
var nota1 = (document.getElementById("number1").value);
var nota2 = (document.getElementById("number2").value);
var nota3 = (document.getElementById("number3").value);
var nota4 = (document.getElementById("number4").value);

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
nota4 = parseInt(nota4);

var media = nota1 + nota2 + nota3 + nota4 / 4;
document.write("A média é:", media);
}   