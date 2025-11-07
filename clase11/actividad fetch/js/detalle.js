let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("id")
console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)

.then(function(res){return res.json()})
.then(function(data) {
    console.log(data);
    let nombre = document.querySelector('.hacheUno');
    nombre.innerText = data.name
    let status = document.querySelector('.pUno');
    status.innerText = data.status
    let especie = document.querySelector('.pDos');
    especie.innerText = data.species
    let imagen = document.querySelector('.imgpj');
    imagen.src = data.image
})
.catch(function(error){
    console.log("Error: " + error);
})