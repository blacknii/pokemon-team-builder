const query = `{
        pokemon_v2_pokemonspecies(where: {id: {_eq: 50}}) {
          pokemon_v2_pokemonspeciesflavortexts {
            flavor_text
          }
          generation_id
          pokemon_v2_generation {
            name
          }
          pokemon_v2_pokemonhabitat {
            name
          }
          pokemon_v2_pokemoncolor {
            name
          }
        }
      }
      `;
