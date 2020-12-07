import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IMoveAilment {
  id: number;
  name: string;
  moves: Array<INamedApiResource>;
  names: IName[];
}
