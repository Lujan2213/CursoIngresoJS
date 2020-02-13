function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota =Math.floor(Math.random()*10)+1 ;
	if (nota>8)
	{
	   alert("EXCELENTE nota:" + nota);
	}else{ 

		if (nota>3)
		{
		   alert("APROBÓ nota:"+ nota);
		}else{ 
 			alert("Vamos, la proxima se puede nota:"+nota);
		}	
	}

}//FIN DE LA FUNCIÓN

