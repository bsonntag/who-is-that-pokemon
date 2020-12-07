import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IMachine {
  id: number;
  item: INamedApiResource;
  move: INamedApiResource;
  version_group: INamedApiResource;
}
