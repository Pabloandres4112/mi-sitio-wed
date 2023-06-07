let toggelbox = document.getElementById("pueba");
let choitcebox =document.getElementById("prueba-2");
toggelbox.addEventListener("click",function(){
    if(choitcebox.classList.contains(pueba)){
        choitcebox.classList.add("pueba");
        toggelbox.classList.remove("prueba-2");
    }
    else(choitcebox.classList.contains("prueba-2")){
        choitcebox.classList.add("tex-on");
        toggelbox.classList.remove("tex-of"); 

    }
})