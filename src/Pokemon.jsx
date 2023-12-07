import { useState, useEffect } from "react";

const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        const fetchPoke = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            const data = await response.json()
            setAllPokemon(data.results)
            
        }
        fetchPoke()
    }, [])
    
    return (
        <div>
            <h1>All Pokemon</h1>
            {
                allPokemon.map((pokemon) => {
                    return (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    )
                })
            }
        </div>
    )

    
}

export default Pokemon