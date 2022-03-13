let Mascotas = [
{
    nombre: "Cookie",
    edad: 5,
    peso: "12kg",
},
{
    nombre: "Koti",
    edad: 2,
    peso: "5kg",
},

{
    nombre: "Avena",
    edad: 6,
    peso: "9kg",
},

{
    nombre: "Susú",
    edad:14,
    peso:"7kg",
},
];



Mascotas.forEach(function(nombre, edad, peso){ 
console.log(nombre, peso);
})


let newlength = Mascotas.push("Susú");
Mascotas;
newlength;


let primero = Mascotas.shift()



