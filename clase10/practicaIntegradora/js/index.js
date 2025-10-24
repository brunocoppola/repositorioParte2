let mensaje1 = "Bienvenidos a mi sitio";
alert(mensaje1);
let pregunta1 = "¿estas seguro de querer avanzar?";
let respuesta1 = confirm(pregunta1);
let subtitulo = document.querySelector(".saludo")
if (respuesta1) {
    subtitulo.innerText = "Qué alegría que quieras continuar tu visita"
} else{
    subtitulo.innerText = "Lamentamos que no quieras continuar tu visita"
}
let pregunta2 = 'nombre:';
let nombre = prompt(pregunta2);
let titulo = document.querySelector("h1").innerText = "bienvenido " + nombre;
let pregunta3 = 'Cuántos años tenés?';
let edad = prompt(pregunta3);
if (edad >= 17){



}else{
    let div1 = document.querySelector('.container-general');
    div1.style.display = "none";
    document.querySelector('#accesodenegado').style.display = 'block';
}
let pregunta4 = 'te gusta la programacion?';
let respuesta4 = confirm(pregunta4)

