function Graus(){
    var Fahrenheit = (document.getElementById("Fahrenheit").value);
    var Celsius = 5 * ((Fahrenheit - 32) / 9);

    document.write("Resultado da conversão:", Celsius.toFixed(2));

}