const pokemonGameGroups = [
  {
    name: "red-blue, yellow",
    games: {
      "red-blue": "https://pokeapi.co/api/v2/version-group/1/",
      yellow: "https://pokeapi.co/api/v2/version-group/2/",
    },
    pokedexes: [
      {
        name: "Kanto Pokédex",
        URL: "https://pokeapi.co/api/v2/pokedex/2/",
      },
    ],
  },
  {
    name: "gold-silver, crystal",
    games: {
      "gold-silver": "https://pokeapi.co/api/v2/version-group/3/",
      crystal: "https://pokeapi.co/api/v2/version-group/4/",
    },
    pokedexes: [
      {
        name: "Original Johto",
        URL: "https://pokeapi.co/api/v2/pokedex/3/",
      },
    ],
  },
  {
    name: "ruby-sapphire, emerald",
    games: {
      "ruby-sapphire": "https://pokeapi.co/api/v2/version-group/5/",
      emerald: "https://pokeapi.co/api/v2/version-group/6/",
    },
    pokedexes: [
      {
        name: "Hoenn Pokédex",
        URL: "https://pokeapi.co/api/v2/pokedex/4/",
      },
    ],
  },
  {
    name: "firered-leafgreen",
    games: {
      "firered-leafgreen": "https://pokeapi.co/api/v2/version-group/7/",
    },
    pokedexes: [
      {
        name: "Kanto Pokédex",
        URL: "https://pokeapi.co/api/v2/pokedex/2/",
      },
    ],
  },
  {
    name: "diamond-pearl, platinum",
    games: {
      "diamond-pearl, platinum": "https://pokeapi.co/api/v2/version-group/8/",
      platinum: "https://pokeapi.co/api/v2/version-group/9/",
    },
    pokedexes: [
      {
        name: "Sinnoh Pokédex",
        URL: "https://pokeapi.co/api/v2/pokedex/5/",
      },
      {
        name: "Extended Pokédex",
        URL: "https://pokeapi.co/api/v2/pokedex/6/",
      },
    ],
  },
  {
    name: "heartgold-soulsilver",
    games: {
      "heartgold-soulsilver": "https://pokeapi.co/api/v2/version-group/10/",
    },
    pokedexes: [
      {
        name: "Updated Johto",
        URL: "https://pokeapi.co/api/v2/pokedex/7/",
      },
    ],
  },
  {
    name: "black-white",
    games: {
      "black-white": "https://pokeapi.co/api/v2/version-group/11/",
    },
    pokedexes: [
      {
        name: "Original Unova",
        URL: "https://pokeapi.co/api/v2/pokedex/8/",
      },
    ],
  },
  {
    name: "black-2-white-2",
    games: {
      "black-2-white-2": "https://pokeapi.co/api/v2/version-group/14/",
    },
    pokedexes: [
      {
        name: "Updated Unova",
        URL: "https://pokeapi.co/api/v2/pokedex/3/",
      },
    ],
  },
  {
    name: "x-y",
    games: {
      "x-y": "https://pokeapi.co/api/v2/version-group/15/",
    },
    pokedexes: [
      {
        name: "Kalos Central",
        URL: "https://pokeapi.co/api/v2/pokedex/12/",
      },
      {
        name: "Kalos Coastal",
        URL: "https://pokeapi.co/api/v2/pokedex/13/",
      },
      {
        name: "Kalos Mountain",
        URL: "https://pokeapi.co/api/v2/pokedex/14/",
      },
    ],
  },
  {
    name: "omega-ruby-alpha-sapphire",
    games: {
      "omega-ruby-alpha-sapphire":
        "https://pokeapi.co/api/v2/version-group/16/",
    },
    pokedexes: [
      {
        name: "Updated Hoenn",
        URL: "https://pokeapi.co/api/v2/pokedex/15/",
      },
    ],
  },
  {
    name: "sun-moon",
    games: {
      "sun-moon": "https://pokeapi.co/api/v2/version-group/17/",
    },
    pokedexes: [
      {
        name: "Original Alola",
        URL: "https://pokeapi.co/api/v2/pokedex/16/",
      },
      {
        name: "Original Melemele",
        URL: "https://pokeapi.co/api/v2/pokedex/17/",
      },
      {
        name: "Original Akala",
        URL: "https://pokeapi.co/api/v2/pokedex/18/",
      },
      {
        name: "Original Ulaula",
        URL: "https://pokeapi.co/api/v2/pokedex/19/",
      },
      {
        name: "Original Poni",
        URL: "https://pokeapi.co/api/v2/pokedex/20/",
      },
    ],
  },
  {
    name: "ultra-sun-ultra-moon",
    games: {
      "ultra-sun-ultra-moon": "https://pokeapi.co/api/v2/version-group/18/",
    },
    pokedexes: [
      {
        name: "Updated Alola",
        URL: "https://pokeapi.co/api/v2/pokedex/21/",
      },
      {
        name: "Updated Melemele",
        URL: "https://pokeapi.co/api/v2/pokedex/22/",
      },
      {
        name: "Updated Akala",
        URL: "https://pokeapi.co/api/v2/pokedex/23/",
      },
      {
        name: "Updated Ulaula",
        URL: "https://pokeapi.co/api/v2/pokedex/24/",
      },
      {
        name: "Updated Poni",
        URL: "https://pokeapi.co/api/v2/pokedex/25/",
      },
    ],
  },
  {
    name: "lets-go-pikachu-lets-go-eevee",
    games: {
      "lets-go-pikachu-lets-go-eevee":
        "https://pokeapi.co/api/v2/version-group/19/",
    },
    pokedexes: [
      {
        name: "Let's Go Kanto",
        URL: "https://pokeapi.co/api/v2/pokedex/26/",
      },
    ],
  },
  {
    name: "sword-shield, the-isle-of-armor, the-crown-tundra",
    games: {
      "sword-shield": "https://pokeapi.co/api/v2/version-group/20/",
      "the-isle-of-armor": "https://pokeapi.co/api/v2/version-group/21/",
      "the-crown-tundra": "https://pokeapi.co/api/v2/version-group/22/",
    },
    pokedexes: [
      {
        name: "Galar",
        URL: "https://pokeapi.co/api/v2/pokedex/27/",
      },
      {
        name: "Isle of armor",
        URL: "https://pokeapi.co/api/v2/pokedex/28/",
      },
      {
        name: "Crown tundra",
        URL: "https://pokeapi.co/api/v2/pokedex/29/",
      },
    ],
  },
  {
    name: "brilliant-diamond-and-shining-pearl",
    games: {
      "brilliant-diamond-and-shining-pearl":
        "https://pokeapi.co/api/v2/version-group/23/",
    },
    pokedexes: [
      {
        name: "Sinnoh",
        URL: "https://pokeapi.co/api/v2/pokedex/4/",
      },
    ],
  },
  {
    name: "legends-arceus",
    games: {
      "legends-arceus": "https://pokeapi.co/api/v2/version-group/24/",
    },
    pokedexes: [
      {
        name: "Hisui",
        URL: "https://pokeapi.co/api/v2/pokedex/30/",
      },
    ],
  },
  {
    name: "scarlet-violet, the-teal-mask, the-indigo-disk",
    games: {
      "scarlet-violet": "https://pokeapi.co/api/v2/version-group/25/",
      "the-teal-mask": "https://pokeapi.co/api/v2/version-group/26/",
      "the-indigo-disk": "https://pokeapi.co/api/v2/version-group/27/",
    },
    pokedexes: [
      {
        name: "Paldea",
        URL: "https://pokeapi.co/api/v2/pokedex/31/",
      },
      {
        name: "Teal Mask",
        URL: "https://pokeapi.co/api/v2/pokedex/32/",
      },
      {
        name: "Indigo Disk",
        URL: "https://pokeapi.co/api/v2/pokedex/33/",
      },
    ],
  },
];

export default pokemonGameGroups;
