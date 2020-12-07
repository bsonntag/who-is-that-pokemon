import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokemonHabitat {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: Array<INamedApiResource>;
}
