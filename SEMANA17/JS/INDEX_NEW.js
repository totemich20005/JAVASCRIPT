function openMenu(){
    
    document.getElementById("mainMenu").style.width="480px";//VISTA CELULAR
    document.getElementById("mainMenu").style.width="flex";//VISTA CELULAR
    document.getElementById("mainMenu").style.width="1000px";//VISTA CELULAR
    document.getElementById("openmenu").style.width="none";//VISTA CELULAR
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px"//cerrar vista celular
    document.getElementById("mainMenu").style.transition="0.9s all"//cerrar vista celular
    window.location.reload();
}