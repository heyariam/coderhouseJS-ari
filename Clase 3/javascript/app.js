
// blucle for //

//let ingresarNumero= parseInt(prompt("Ingresa un numero"));

//for (let numero=1; numero <=20; numero=numero+2){
   // alert(numero);
//}

//bucle while + switch/

let entrada = prompt("Nombra un animal domestico");

while (entrada != "ESC"){
    switch (entrada){
        case "perro":
            alert ("Nombraste perro")
            break;
        case "gato":
            alert("Nombraste gato")  
            break;
        default:
            alert("¿Que animal es?")
            break;
    }
entrada = prompt ("Nombra un animal domestico");
}

