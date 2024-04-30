//entrada de dados
function soma(){


   var number1 = (document.getElementById("number1").value);
   var number2 = (document.getElementById("number2").value);


//conversão para int
    number1 = parseInt(number1);
    number2 = parseInt(number2);

//calculo e resultado

  var resultado = number1 + number2;
   document.write("O resultado é:", resultado);

}
   



