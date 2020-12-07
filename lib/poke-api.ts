import { IPokemon } from 'interfaces/pokemon/pokemon';
import { IPokemonSpecies } from 'interfaces/pokemon/pokemon-species';

function resolveEndpoint(...parts: Array<string>) {
  return 'https://pokeapi.co/api/v2/'.concat(parts.join('/'));
}

async function fetchJson<R>(url: string): Promise<R> {
  const response = await fetch(url);

  return response.json();
}

export async function fetchPokemonCount(): Promise<number> {
  const { count } = await fetchJson(resolveEndpoint('pokemon-species?limit=1'));
  return count;
}

function getSpeciesName(species: IPokemonSpecies, language: string): string {
  const translation = species.names.find(
    (item) => item.language.name === language
  );

  return translation?.name ?? species.name;
}

function getPokemonImageUrl(id: string) {
  const imageName = id.padStart(3, '0');

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageName}.png`;
}

export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  spriteUrl: string;
}

export async function fetchPokemon(id: string): Promise<Pokemon> {
  const pokemon = await fetchJson<IPokemon>(resolveEndpoint('pokemon', id));
  const species = await fetchJson<IPokemonSpecies>(pokemon.species.url);

  return {
    id,
    name: getSpeciesName(species, 'en'),
    imageUrl: getPokemonImageUrl(id),
    spriteUrl: pokemon.sprites.front_default,
  };
}
