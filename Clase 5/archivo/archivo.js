function gato (nombre, edad, peso){
    this.nombre= nombre;
    this.edad = edad;
    this.peso = true;
    this.meow = function () { console.log("Hola, gato " + this.nombre)}
};

var gato1 = new gato("cookie",5, "12kg");
console.log(gato1);
var gato2 = new gato("Koti",2,"5kg");
console.log(gato2);

gato1.meow();
gato2.meow();

