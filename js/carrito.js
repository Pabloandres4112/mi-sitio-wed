let boxMinus = document.getElementById("boxminus");
let boxCantidad = document.getElementById("boxcan");
let boxPlus = document.getElementById("boxplus");

boxPlus.addEventListener("click",function(){
    
    let axucant = boxCantidad.innerHTML;
    if(axucant < 10){
        axucant++;
        boxCantidad.innerHTML = axucant;
    }

});
boxMinus.addEventListener("click",function(){
    let resta = boxCantidad.innerHTML;
    if (resta >0);{
        resta --;
        boxCantidad.innerHTML = resta;
    }
});