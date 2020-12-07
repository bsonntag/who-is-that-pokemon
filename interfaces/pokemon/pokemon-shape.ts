import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokemonShape {
  id: number;
  name: string;
  awesome_names: IAwesomeName[];
  names: IName[];
  pokemons_species: Array<INamedApiResource>;
}

export interface IAwesomeName {
  awesome_name: string;
  language: INamedApiResource;
}
