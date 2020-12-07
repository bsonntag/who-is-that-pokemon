import { IGenerationGameIndex, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface ILocation {
  id: number;
  name: string;
  region: INamedApiResource;
  names: IName[];
  game_indices: IGenerationGameIndex[];
  areas: Array<INamedApiResource>;
}
