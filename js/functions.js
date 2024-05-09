export async function showInfo(ev,pokemons){
    const content = document.querySelector('.content')
    const title = content.querySelector('h1')
    const pokeImg = document.getElementById('pokeImg')
    const descricao = content.querySelector('p')
    title.innerText = ev.target.innerText

    let pokemonSprite = await getSprite(`https://pokeapi.co/api/v2/pokemon/${ev.target.id}`)
    // let pokemonDescription = await getDescription(`https://pokeapi.co/api/v2/characteristic/${ev.target.id}/`)

    pokeImg.src  = pokemonSprite

    async function getSprite(api){
        const response = await fetch(api)
            
        if(!response.ok){
            throw new Error('Could not find tech resourse')
            
        }
    
        const data = await response.json()

        return data.sprites.front_default;
    }

}