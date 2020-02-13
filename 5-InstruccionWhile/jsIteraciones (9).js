function mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var respuesta='si';
	var numero;

	while(respuesta!='no')
	{

		numero =prompt("Ingrese un número");
		//para el primer ingreso, si el contador esta en 0 es porque no tiene valor
		if (contador==0){
			maximo=numero;
			minimo=numero;
		}

		if (numero > maximo) {
			maximo = numero;
			}	

		if (numero < minimo) {
			minimo = numero;
			}	
		contador++;				

	respuesta = prompt("Continúa con el ingreso de numeros? si/no");

	}

	document.getElementById('maximo').value=maximo;
    document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN