import { IDescription, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: IDescription[];
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: INamedApiResource;
  version_groups: Array<INamedApiResource>;
}

export interface IPokemonEntry {
  entry_number: number;
  pokemon_species: INamedApiResource;
}
