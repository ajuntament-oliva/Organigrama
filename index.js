const mostrarR=document.getElementById("bMostrarResponsive");
mostrarR.addEventListener("click",()=>{mostrarLlista()});
function mostrarLlista(){
    const show=document.getElementById("showResponsive");
    console.log(show);
    if(show.style.display=="none"){
        mostrarR.textContent="Ocultar index"
        show.style.display="grid";
    }else{
        mostrarR.textContent="Mostrar index"
        show.style.display="none";
    }
}

const mostrar=document.getElementById("bMostrar");
mostrar.addEventListener("click",()=>{mostrarLlistaEscritori()});
function mostrarLlistaEscritori(){
    const show=document.getElementById("show");
    console.log(show);
    if(show.style.display=="none"){
        mostrar.textContent="Ocultar index"
        show.style.display="grid";
    }else{
        mostrar.textContent="Mostrar index"
        show.style.display="none";
    }
}
