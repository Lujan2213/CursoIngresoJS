function mostrar()
{

    var numero;
    var contadorPar= 0;
    numero=parseInt(prompt(" Ingrese un numero:"));
    while( isNaN (numero))
    {numero=parseInt(prompt("Eso no es numero. Ingrese un numero:"));
    }
for(var i % 2 == 0)
{
  console.log (i );
  contadorPar++;
}
console.log(" cantidad de pares : "+ contadorPar);


}//FIN DE LA FUNCIÓN