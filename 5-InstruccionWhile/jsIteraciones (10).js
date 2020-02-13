function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var contadorImpares=0;
	
	var sumaPositivo=0;
	var sumaNegativo=0;
	var numero;
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	numero =parseInt(prompt("Ingrese un número"));

		if (numero > 0) {
			contadorPositivos++;
			sumaPositivo =  sumaPositivo + numero;

			}	

		if (numero < 0) {
			contadorNegativos++;
			sumaNegativo =  sumaNegativo + numero;
			}		

		if (numero == 0) {
			contadorCeros++;
			}	


	respuesta = prompt("Continúa con el ingreso de numeros? si/no");

	}
	
	document.write(" Suma de los negativos: " + sumaNegativo);
	document.write(" -Suma de los positivos: " + sumaPositivo);
	document.write(" -Cantidad de positivos: " +contadorPositivos);
	document.write(" -Cantidad de negativos: " +contadorNegativos);
	document.write(" -Cantidad de ceros: " +contadorCeros);

	document.write(" -Promedio de positivos: " +sumaPositivo/contadorPositivos);
	document.write(" -Promedios de negativos: " +sumaNegativo/contadorNegativos);
	document.write(" -Diferencia entre positivos y negativos: " + (sumaPositivo-sumaNegativo));


}//FIN DE LA FUNCIÓN


//Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
//1-Suma de los negativos. 2-Suma de los positivos. 
//3-Cantidad de positivos. 4-Cantidad de negativos.
// 5-Cantidad de ceros. 6-Cantidad de números pares. 
// 7-Promedio de positivos. 8-Promedios de negativos. 
 //9-Diferencia entre positivos y negativos, (positvos-negativos).

