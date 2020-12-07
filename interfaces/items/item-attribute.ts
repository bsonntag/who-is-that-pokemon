import { IDescription, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IItemAttribute {
  id: number;
  name: string;
  items: Array<INamedApiResource>;
  names: IName[];
  descriptions: IDescription[];
}
