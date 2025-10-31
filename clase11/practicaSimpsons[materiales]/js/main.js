// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = this.document.querySelector('#titulo') ;
    titulo.addEventListener('mouseover', function(){
      let nombre = prompt('como te llamas? ')
        let saludo = document.querySelector('#saludo') ;
        if(nombre){
            saludo.innerText = ('Bienvenido ' + nombre)
        }
        else{
            saludo.innerText = ('Bienvenido')
        }
        saludo.style.textTransform = 'uppercase';
        titulo.style.display = "none";
        let span = document.querySelector('span');
    span.style.display = 'block'
  })
    //let span =
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    //let boton = ;
 
 
 }) 