function mostrar()
{
    var cantTemperaturasPares = 0;
    var marcaProductoPesado;
    var cantProductosCongelados = 0;
    var acumuladorPeso = 0;
    var cantidadDeProductos = 0;
    var pesoMax;
    var pesoMin;
    var flag = 0;
    do{
        var marca = prompt("Ingrese la marca del producto: ");
        var peso = parseInt(prompt("Ingrese el peso *entre 1 y 100*"));
        while(peso < 1 || peso > 100 || isNaN(peso)){
            peso = parseInt(prompt("El peso debe ser entre 1 y 100"));
        }

        var temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento *entre -30 y 30 grados C"));
        while(temperatura < -30 || temperatura > 30 || isNaN(peso)){
            temperatura = parseInt(prompt("La temperatura debe ser entre -30 y 30 grados C"));
        }

        if(temperatura%2==0){
            cantTemperaturasPares++;
        }

        if(flag==0 || peso > pesoMax){
            pesoMax = peso;
            marcaProductoPesado = marca;
        }
        if(flag==0 || peso < pesoMin){
            pesoMin = peso;
            flag = 1;
        }

        if(temperatura<0){
            cantProductosCongelados++;
        }
        acumuladorPeso += peso;
        cantidadDeProductos++;
        var seguir = prompt("Desea ingresar otra marca? (si / no)");
    }
    while(seguir.toLowerCase() == "si");

    var promedioPeso;
    if(cantidadDeProductos==0){
        promedioPeso = "No hay numeros productos";
    }
    else{
        promedioPeso = acumuladorPeso/cantidadDeProductos;
    }

    document.write(
        "Cantidad de temperaturas pares: " + cantTemperaturasPares + "<br/>" +
        "Marca del producto más pesado: " + marcaProductoPesado + "<br/>" +
        "Cantidad de productos que se conservan a menos de 0 grados: " + cantProductosCongelados + "<br/>" +
        "Promedio del peso de todos los productos: " + promedioPeso + "<br/>" +
        "Peso máximo: " +  pesoMax + "<br/>" +
        "Peso mínimo.: " + pesoMin
    );
}



























