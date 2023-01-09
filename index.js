const mostrarR=document.getElementById("bMostrarResponsive");
mostrarR.addEventListener("click",()=>{mostrarLlista()});
const showResponsive=document.getElementById("showResponsive");
const show=document.getElementById("show");

function mostrarLlista(){
    showResponsive.classList.toggle("d-none"); 
    if(mostrarR.textContent==="Mostrar index"){
        mostrarR.textContent="No mostrar index";
    }else{
        mostrarR.textContent="Mostrar index";

    }
}

const mostrar=document.getElementById("bMostrar");
mostrar.addEventListener("click",()=>{mostrarLlistaEscritori()});
console.log();
function mostrarLlistaEscritori(){
    show.classList.toggle("d-none"); 
    if(mostrar.textContent==="Mostrar index"){
        mostrar.textContent="No mostrar index";
    }else{
        mostrar.textContent="Mostrar index.";

    }
}
