import { IDescription, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IMoveTarget {
  id: number;
  name: string;
  descriptions: IDescription[];
  moves: Array<INamedApiResource>;
  names: IName[];
}
