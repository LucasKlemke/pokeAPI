

export function printNavBar(name,pokemonsNumber,showInfo,pokemons){

    const result = name.charAt(0).toUpperCase() + name.slice(1);
    const navBtnDiv = document.querySelector('.nav-btn')
    const button = document.createElement('button')
    button.innerText = `${pokemonsNumber} - ${result}`
    button.id = pokemonsNumber
    button.addEventListener('click', async (ev) => {
        await showInfo(ev,pokemons)
    })

    navBtnDiv.appendChild(button)
}