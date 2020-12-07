import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IGender {
  id: number;
  name: string;
  pokemon_species_details: IPokemonSpeciesGender[];
  required_for_evolution: Array<INamedApiResource>;
}

export interface IPokemonSpeciesGender {
  rate: number;
  pokemon_species: INamedApiResource;
}
