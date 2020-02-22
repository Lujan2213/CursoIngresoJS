function mostrar()
{

	var flag =0;
	// declarar variables
	var minimo;
	var maximo;
	var respuesta='si';
	var numero;

	while(respuesta!='no')
	{

		numero =prompt("Ingrese un número");
		//para el primer ingreso, si el contador esta en 0 es porque no tiene valor
		if (flag==0){
			maximo=numero;
			minimo=numero;
		}

		 if (flag == 0 || numero > maximo) {
			maximo = numero;
			}	

		 if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag =1;
			}	
		contador++;				

	respuesta = prompt("Continúa con el ingreso de numeros? si/no");

	}

	document.getElementById('maximo').value=maximo;
    document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN