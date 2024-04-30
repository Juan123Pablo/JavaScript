function area(){
    var lado = document.getElementById("quadrado").value;
    var area = lado * lado;
    
    lado = parseInt(lado);

    var dobro = area * 2;
    document.write("O calculo da área do quadrado é:", + area + "<br>");
    document.write("O dobro da área é:", dobro);
}