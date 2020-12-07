import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IItemPocket {
  id: number;
  name: string;
  categories: Array<INamedApiResource>;
}
