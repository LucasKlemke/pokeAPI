export async function fetchData(arr,valor,api){

        let pokemons = arr
        // console.log(pokemons)

        if(valor == true){
            return pokemons
        } else {
            let bool = valor
       
            const response = await fetch(api)
            
            if(!response.ok){
                throw new Error('Could not find tech resourse')
            }
        
            const data = await response.json()

            data.results.forEach(element => {
                pokemons.push(element)
            });
            // console.log(data.results)

            if(data.next == undefined || data.next == null){
                bool = true;
            }
            
            return await fetchData(pokemons,bool,data.next)
        }
}