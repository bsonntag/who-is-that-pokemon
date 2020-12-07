import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IItemCategory {
  id: number;
  name: string;
  items: Array<INamedApiResource>;
  names: IName[];
  pocket: INamedApiResource;
}
