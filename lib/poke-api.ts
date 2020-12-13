import { IGeneration } from 'interfaces/games/generation';
import { IPokemonSpecies } from 'interfaces/pokemon/pokemon-species';
import { IName } from 'interfaces/utility/common-models';
import {
  INamedApiResource,
  INamedApiResourceList,
} from 'interfaces/utility/named-api-resource-list';

function resolveEndpoint(...parts: Array<number | string>) {
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

function getLocalizedName(
  names: Array<IName>,
  language = 'en'
): string | undefined {
  const translation = names.find((item) => item.language.name === language);
  return translation?.name;
}

function getSpeciesName(species: IPokemonSpecies, language: string): string {
  return getLocalizedName(species.names, language) ?? species.name;
}

export function getPokemonImageUrl(id: number): string {
  const imageName = id.toString().padStart(3, '0');
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageName}.png`;
}

export interface Pokemon {
  id: number;
  name: string;
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const species = await fetchJson<IPokemonSpecies>(
    resolveEndpoint('pokemon-species', id)
  );

  return {
    id,
    name: getSpeciesName(species, 'en'),
  };
}

function extractIdsFromResources(
  resources: Array<INamedApiResource>,
  baseUrl: string
) {
  return resources.map(({ url }) => {
    return parseInt(url.replace(baseUrl, '').replace(/\//g, ''), 10);
  });
}

type Generation = {
  name: string;
  slug: string;
  ids: Array<number>;
};

export async function fetchAllGenerations(): Promise<Array<Generation>> {
  const { results } = await fetchJson<INamedApiResourceList>(
    resolveEndpoint('generation')
  );

  return Promise.all(
    results.map(async ({ url }) => {
      const generation = await fetchJson<IGeneration>(url);
      const name = getLocalizedName(generation.names, 'en');
      return {
        name: name ?? generation.name,
        slug: generation.name,
        ids: extractIdsFromResources(
          generation.pokemon_species,
          resolveEndpoint('pokemon-species')
        ),
      };
    })
  );
}

export async function fetchGeneration(slug: string): Promise<Generation> {
  const generation = await fetchJson<IGeneration>(
    resolveEndpoint('generation', slug)
  );
  const name = getLocalizedName(generation.names, 'en');
  return {
    name: name ?? generation.name,
    slug: generation.name,
    ids: extractIdsFromResources(
      generation.pokemon_species,
      resolveEndpoint('pokemon-species')
    ),
  };
}
