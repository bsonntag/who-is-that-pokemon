import {
  IVersionEncounterDetail,
  IVersionGameIndex,
} from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IPokemonAbility[];
  forms: Array<INamedApiResource>;
  game_indices: IVersionGameIndex[];
  held_items: IPokemonHeldItem[];
  location_area_encounters: string;
  moves: IPokemonMove[];
  sprites: IPokemonSprites;
  species: INamedApiResource;
  stats: IPokemonStat[];
  types: IPokemonType[];
}

export interface IPokemonAbility {
  is_hidden: true;
  slot: number;
  ability: INamedApiResource;
}

export interface IPokemonType {
  slot: number;
  type: INamedApiResource;
}

export interface IPokemonHeldItem {
  item: INamedApiResource;
  version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
  version: INamedApiResource;
  rarity: number;
}

export interface IPokemonMove {
  move: INamedApiResource;
  version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
  move_learn_method: INamedApiResource;
  version_group: INamedApiResource;
  level_learned_at: number;
}

export interface IPokemonStat {
  stat: INamedApiResource;
  effort: number;
  base_stat: number;
}

export interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface ILocationAreaEncounter {
  location_area: INamedApiResource;
  version_details: IVersionEncounterDetail[];
}
