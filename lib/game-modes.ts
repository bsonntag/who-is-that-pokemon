import { range } from 'lodash';
import { fetchAllGenerations, fetchPokemonCount } from './poke-api';

type GameModeConfig = {
  name: string;
  slug: string;
  ids: Array<number>;
};

export async function loadAllMode(): Promise<GameModeConfig> {
  const count = await fetchPokemonCount();

  return {
    name: 'All',
    slug: 'all',
    ids: range(1, count + 1),
  };
}

export function loadGenerationModes(): Promise<Array<GameModeConfig>> {
  return fetchAllGenerations();
}
