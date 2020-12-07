import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IVersionGroup {
  id: number;
  name: string;
  order: number;
  generation: INamedApiResource;
  move_learn_methods: Array<INamedApiResource>;
  pokedexes: Array<INamedApiResource>;
  regions: Array<INamedApiResource>;
  versions: Array<INamedApiResource>;
}
