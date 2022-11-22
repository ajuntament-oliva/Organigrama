const mostrarR=document.getElementById("bMostrarResponsive");
mostrarR.addEventListener("click",()=>{mostrarLlista()});
const showResponsive=document.getElementById("showResponsive");
const show=document.getElementById("show");

function mostrarLlista(){
    showResponsive.classList.toggle("d-none"); 

}

const mostrar=document.getElementById("bMostrar");
mostrar.addEventListener("click",()=>{mostrarLlistaEscritori()});
console.log();
function mostrarLlistaEscritori(){
    show.classList.toggle("d-none"); 

}
