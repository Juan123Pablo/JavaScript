function salario(){
    var renda = (document.getElementById("renda").value);
    var mes = (document.getElementById("mes").value);
    var calculo = renda * mes;

    renda = parseInt(renda);
    mes = parseInt(mes);


    document.write("O total do seu salário é:", calculo);
}