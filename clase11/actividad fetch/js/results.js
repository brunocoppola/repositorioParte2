let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("buscador")
console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)

.then(function(res){return res.json()})
.then(function(data) {
    console.log(data);
    let a = document.querySelector(".search-results")
    let character = []
    for (let i = 0; i < data.results.length; i++) {
    character.push(`<article>
        <img src="${data.results[i].image}" alt='' />
        <p>Name: ${data.results[i].name} </p>
        <p>Status: ${data.results[i].status}</p>
        </article>`)
            
         }
            let personajes = character.join('');
            a.innerHTML = personajes;
})
.catch(function(error){
    console.log("Error: " + error);
})