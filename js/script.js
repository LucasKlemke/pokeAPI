import {fetchData} from './fetchData.js'
import {printNavBar} from './printData.js'
import {showInfo} from './functions.js'

const exec =  async () => {
    document.querySelector('.menu-btn').addEventListener('click',() =>{
        document.querySelector('nav').classList.toggle('nav-mobile')
    })

    let pokemons = await fetchData([],false,`https://pokeapi.co/api/v2/pokemon/`)
    let pokemonsNumber = 1
    console.log(pokemons[0])
    pokemons.forEach(element => {
        printNavBar(element.name,pokemonsNumber,showInfo,pokemons)
        pokemonsNumber += 1
    });


} 


exec()
