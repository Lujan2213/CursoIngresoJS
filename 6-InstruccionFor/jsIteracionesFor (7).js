function mostrar()
{
    var numero;
    var contadordivisores= 0;
    numero=parseInt(prompt(" Ingrese un numero:"));
    while( isNaN (numero)){
        numero=parseInt(prompt("Eso no es numero. Ingrese un numero:"))
    }
for (var i = 1 ; i <= numero ; i ++ ){

    if(numero % i == 0);
    


  console.log (i );
  contadordivisores ++;
}
console.log(" cantidad de divisores  encontrados: " + contadordivisores);




}//FIN DE LA FUNCIÓN