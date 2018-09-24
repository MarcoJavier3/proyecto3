/*
console.log("Hola mundo");

var numero1= 10.5;
var numero2= 5;
var resultado = numero1*numero2;
console.log(resultado);

var nombre = 'Marco Javier Bayona';

var profesion = "Desarrollador Full Stack";

console.log(nombre + profesion);

var tiene_mascota = true;

datos =["juan",26,false,25,78,"desarrollador"];
console.log(datos[0]);

var edad = 41 ;
if(edad>=18 && edad<=40){
    console.log("Eres un adulto joven");
}
else
{
    console.log("No eres un adulto joven");
}
var dias = ['Lunes','Martes', 'Miercoles','Jueves','viernes','Sabado','Domingo'];
for(i=0; i<7;i++){
console.log(dias[i]);
}
*/
function suma(numero1,numero2) 
{
var resultado= numero1+nemero2;return (resultado);
}

function validateForm() {
    var x = document.forms["myForm"]["numero1"].value;
    var y = document.forms["myForm"]["numero2"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
        if (y == "") {
            alert("Name must be filled out");
            return false;
    }
}