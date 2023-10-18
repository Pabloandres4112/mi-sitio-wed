let boxMinus = document.getElementById("boxMinus"),
    boxCant = document.getElementById("boxCant"),
    boxPlus = document.getElementById("boxPlus"),
    numeroProductos = document.getElementById("numeroPoductos"),
    ValorProducto = 50000 ,
    auxValorProducto = new Intl.NumberFormat("de-DE").format(ValorProducto);
    document.getElementById("precioUnidad").innerHTML = auxValorProducto;


    
    boxPlus.addEventListener("click", function(){
        let PlusCant = boxCantidad.innerHTML;
        if(PlusCant < 10){
            PlusCant++;
            boxCantidad.innerText=PlusCant
            determinarSingularPlural(PlusCant)
            //calcular precio total
    let SubTotal = ValorProducto*PlusCant,
    auxSubtotal = new Intl.NumberFormat("de-DE").format(SubTotal);
    document.getElementById("Subtotal").innerHTML = auxSubtotal;


        }
        
    })


    boxMinus.addEventListener("click", function(){
        let MinusCant = boxCantidad.innerHTML;
        if(MinusCant > 0){
            MinusCant--;
            boxCantidad.innerText=MinusCant 
            determinarSingularPlural(MinusCant)
    
            // calcular precio total
            let SubTotal = ValorProducto*MinusCant ,
            auxSubtotal = new Intl.NumberFormat("de-DE").format(SubTotal);
            document.getElementById("Subtotal").innerHTML = auxSubtotal;


        }
    })
    function determinarSingularPlural(PlusCant){
        if (PlusCant == 1){
            numeroProductos.innerHTML ="( " + PlusCant + " producto)"
        }
        else if ((PlusCant == 0 || PlusCant > 1)) {
            numeroProductos.innerHTML = "( " + PlusCant + " productos)"
        }
    }