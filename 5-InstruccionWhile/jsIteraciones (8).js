function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

while  (respuesta != "si" ) {
	numero =prompt("Ingrese un número");
	if (numero >0) {
		positivo =  positivo +numero;
	}else{
		negativo = negativo *numero;
	}
	respuesta = prompt("Finaliza el ingreso de numeros? si/no");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN