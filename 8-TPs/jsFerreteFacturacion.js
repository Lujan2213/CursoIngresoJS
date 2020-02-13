/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precioUno = parseInt(document.getElementById("PrecioUno").value);
var precioDos = parseInt(document.getElementById("PrecioDos").value);
var precioTres = parseInt(document.getElementById("PrecioTres").value);
var sumatoria=(precioUno+precioDos+precioTres);
alert("La suma de los precios es: " +sumatoria );

}
function Promedio () 
{
var precioUno = parseInt(document.getElementById("PrecioUno").value);
var precioDos = parseInt(document.getElementById("PrecioDos").value);
var precioTres = parseInt(document.getElementById("PrecioTres").value);
var sumatoria=(precioUno+precioDos+precioTres);
var promedio=(sumatoria/3);
alert("El promedio de los precios es: " +promedio );

	
}
function PrecioFinal () 
{
var precioUno = parseInt(document.getElementById("PrecioUno").value);
var precioDos = parseInt(document.getElementById("PrecioDos").value);
var precioTres = parseInt(document.getElementById("PrecioTres").value);
var sumatoria=(precioUno+precioDos+precioTres);
var precioFinal=(sumatoria*1.21);
alert("El precio final es: " +precioFinal );

	
}