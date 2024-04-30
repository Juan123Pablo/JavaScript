function Graus(){
    var Celsius = (document.getElementById("Celsius").value);
    var Fahrenheit =  (Celsius * 9/5) + 32 ;

    document.write("Resultado da conversão:", Fahrenheit.toFixed(2));

}