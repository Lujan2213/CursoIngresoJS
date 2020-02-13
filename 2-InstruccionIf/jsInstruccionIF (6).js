function mostrar()
{
//tomo la edad  

var edad;
    edad=parseInt(document.getElementById("edad").value);
  
  
	   if ((edad> 12) && (edad< 18) ) {
	   alert("es adolescente");
	   }else{
	   	if (edad> 17)  {
		alert("es mayor de edad");
		 }else{
		alert("es niño");

	 		} 
	   }


}//FIN DE LA FUNCIÓN