function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;

while  (respuesta != "si" ) {
	
	acumulador =acumulador + parseInt(prompt("Ingrese un número"));
	contador++;
	respuesta = prompt("Finaliza el ingreso de numeros? si/no");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN