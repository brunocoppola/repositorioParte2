let formulario = document.querySelector('.contact-form')
let nombre = document.querySelector('#fullName')
let email = document.querySelector('#email')
let telefono = document.querySelector('#phone')
let contraseña = document.querySelector('#password')
let reContraseña = document.querySelector('#rePassword')

console.log();


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    if (nombre.value == ''){
        let nombreInvalido = document.querySelector('.fullName')
        nombreInvalido.innerHTML = '<p> tenes que completar el campo con tu nombre completo </p>'
        nombreInvalido.style.display = 'block'
    } else if (email.value == ''){
        let emailInvalido = document.querySelector('.email')
        emailInvalido.innerHTML = '<p> tenes que completar el campo con tu email </p>'
        emailInvalido.style.display = 'block'
    } else if (telefono.value == ''){
        let telefonoInvalido = document.querySelector('.phone')
        telefonoInvalido.innerHTML = '<p> tenes que completar el campo con tu numero de telefono </p>'
        telefonoInvalido.style.display = 'block'
    }else if (telefono.value.length <= 7){
        let invalid = document.querySelector('.phone')
        invalid.innerText = '<p> ingresar al menos 8 caracteres </p>'
        invalid.style.display = 'block'
    }else if (contraseña.value == ''){
        let contraseñaInvalido = document.querySelector('.password')
        contraseñaInvalido.innerHTML = '<p> tenes que completar el campo con tu contraseña </p>'
        contraseñaInvalido.style.display = 'block'
    }else if (contraseña.value.length<3){
        let numerosInvalidos = document.querySelector('.password')
        numerosInvalidos.innerText = '<p> minimo 3 carcteres </p>'
        numerosInvalidos.style.display = 'block'
    }else if (reContraseña.value == ''){
        let reContraseñaInvalido = document.querySelector('.rePassword')
        reContraseñaInvalido.innerHTML = '<p> tenes que completar el campo con tu recontraseña </p>'
        reContraseñaInvalido.style.display = 'block'
    }else if (reContraseña.value != contraseña.value){
      let distintasContraseñas = document.querySelector('.rePassword')
        distintasContraseñas.innerText = '<p> no es igual a la contraseña </p>'
        distintasContraseñas.style.display = 'block'  
    }else {
        this.submit()
    }
})
