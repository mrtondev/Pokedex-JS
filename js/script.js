const pokemonName = document.querySelector('.pokemonName')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonImage = document.querySelector('.pokemonImage')

const form = document.querySelector('.form')

const input = document.querySelector('.inputSearch')

const fetchPokemon = async(pokemon) =>{

    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await apiResponse.json()
    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    //pokemonImage.src = data['sprites']['other']['official-artwork']['front_default']
     
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    console.log(data)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    renderPokemon(input.value)
})


