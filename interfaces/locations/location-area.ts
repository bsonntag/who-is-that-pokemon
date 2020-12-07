import { IName, IVersionEncounterDetail } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface ILocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: IEncounterMethodRate[];
  location: INamedApiResource;
  names: IName[];
  pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
  encounter_method: INamedApiResource;
  version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
  rate: number;
  version_details: INamedApiResource;
}

export interface IPokemonEncounter {
  pokemon: INamedApiResource;
  version_details: IVersionEncounterDetail[];
}
