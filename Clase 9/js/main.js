function enviarSaludo(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var saludo = document.querySelector("#saludo");
    var texto = "Hola " + nombre.value + " "+ apellido.value +", ¡felices fiestas!";
    
    saludo.innerHTML= texto;
}


button.addEventListener("click", onButtonClick)
function onButtonClick(){
    console.log("Hola");
}