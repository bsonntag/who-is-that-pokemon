import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IRegion {
  id: number;
  locations: Array<INamedApiResource>;
  name: string;
  names: IName[];
  main_generation: INamedApiResource;
  pokedexes: Array<INamedApiResource>;
  version_groups: Array<INamedApiResource>;
}
