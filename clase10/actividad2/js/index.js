let pregunta1 = 'ingrese su nombre';
let nombre = prompt(pregunta1);
console.log(nombre);
let pregunta2 = 'ingrese su edad';
let edad = prompt(pregunta2);
console.log(edad);
let pregunta3 = "¿le gustan los deportes?";
let fanDeportes = confirm(pregunta3);
console.log(fanDeportes);
let mensaje = "Muchas gracias " + nombre + " por responder nuestras preguntas";
alert(mensaje);
let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function(){
        if (fanDeportes){
            return "Si, soy fan de los deportes"
        } else{
            return 'No soy tan fan aún de los deportes'
        }

    }
}
console.log(usuario.deportistaProfesional())

