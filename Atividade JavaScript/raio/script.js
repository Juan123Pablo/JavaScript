function raio(){
    var raio = document.getElementById("raio").value;
    var área = Math.PI * Math.pow(raio, 2);
    
    raio = parseFloat(raio);
    document.write(área.toFixed(2));

}