function mostrar()
{
//tomo la edad  
var edad;
    edad=parseInt(document.getElementById("edad").value);
   if(isNaN(edad)){
	alert("ingrese edad");
  }else{
  
	   if (edad> 17)
	   alert("es mayor de edad");
	   else
	   alert("es menor de edad");
		
 }


}//FIN DE LA FUNCIÓN