let miNombre = 'Bruno'
let miNombreToString = JSON.stringify(miNombre)
localStorage.setItem('userName', miNombreToString)
console.log(localStorage)
let recuperoStorage = localStorage.getItem('userName')
console.log(recuperoStorage)
localStorage.clear()

let peliculasFavoritas = ['godfather', 'fightclub', 'rapidosYfuriosos']
let peliculaFavorita = JSON .stringify(peliculasFavoritas[1])
localStorage.setItem('peliculasFavoritas',peliculaFavorita)
console.log(localStorage)
let recuperoStorage2 = localStorage.getItem('peliculasFavoritas')
console.log(recuperoStorage2)
localStorage.clear()

let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem('favoritos', peliculasJson)
console.log(localStorage)

let recuperoStorage3 = localStorage.getItem('favoritos')
let arrayFavoritos = JSON.parse(recuperoStorage3)
arrayFavoritos.push('cars')
let favoritosJson = JSON.stringify(arrayFavoritos)
localStorage.setItem('favoritos', favoritosJson)
console.log(localStorage)




let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

winterIsComing = []
for (let i = 0; i<got.length; i++){
    if (got[i].ciudad == 'Winterfell'){
        winterIsComing.push(got[i])
    }
}

let arrayWinter = JSON.stringify(winterIsComing)
localStorage.setItem('winterfell', arrayWinter)
console.log(localStorage)