import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokemonColor {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedApiResource;
}
