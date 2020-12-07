import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IEvolutionChain {
  id: number;
  baby_trigger_item: INamedApiResource;
  chain: IChainLink;
}

export interface IChainLink {
  is_baby: boolean;
  species: INamedApiResource;
  evolution_details: IEvolutionDetail[];
  evolves_to: IChainLink[];
}

export interface IEvolutionDetail {
  item: INamedApiResource;
  trigger: INamedApiResource;
  gender: number;
  held_item: INamedApiResource;
  move: INamedApiResource;
  known_move_type: INamedApiResource;
  location: INamedApiResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: INamedApiResource;
  party_type: INamedApiResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: INamedApiResource;
  turn_upside_down: boolean;
}
