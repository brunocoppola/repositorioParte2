 
  fetch("https://rickandmortyapi.com/api/character")
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
    console.log(data);


         let lista = this.document.querySelector('.characterList') ;
         let character = []
         for (let i = 0; i < data.results.length; i++) {
            character.push(`<article>
         <img src='${data.results[i].image}' alt=''>
          <a class="nombre" href="detalle.html?id=${data.results[i].id}">Name: ${data.results[i].name} </a>
          <p>Status: ${data.results[i].status}</p>
 </article>
`)
            
         }
            let personajes = character.join('');
            lista.innerHTML = personajes;

    })
    .catch(function(error) {
    console.log("Error: " + error);
    })
