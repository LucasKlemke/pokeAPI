import {fetchData} from './fetchData.js'
import {printNavBar} from './printData.js'
// import {getData} from 'fetchData.js'

const exec =  async () => {
    let pokemons = await fetchData([],false,`https://pokeapi.co/api/v2/pokemon/`)
    let pokemonsNumber = 1
    pokemons.forEach(element => {
        printNavBar(element.name,pokemonsNumber)
        pokemonsNumber += 1
    });


} 


exec()
