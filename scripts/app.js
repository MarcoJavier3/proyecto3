/*
function validateForm(){

    var titulos = document.getElementsByTagName('h1');
    console.log(titulos);
}

function validateForm2(){
    
        var clasetexto = document.getElementsByClassName('texto');
        console.log(clasetexto);
    }
var sede = document.getElementById('principal');
console.log(principal);
*/
function iva(precio_producto,porcentaje_iva){
    iva_producto =precio_producto*(porcentaje_iva/100);
    return iva_producto;
}

function calcular_iva(){
    var precio = parseInt(document.getElementById("precio").value);
    var porcentaje_iva = parseInt(document.getElementById("iva").value);
    var resultado= iva(precio,porcentaje_iva);
    var salida = document.getElementById('resultado');
    /*var texto =document.createTextNode(resultado);
    salida.appendChild(texto);
    salida.nodeValue=" ";*/
    salida.value=resultado;
    console.log(resultado);
}