import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPalParkArea {
  id: number;
  name: string;
  names: IName[];
  pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
  base_socre: number;
  rate: number;
  pokemon_species: INamedApiResource;
}
