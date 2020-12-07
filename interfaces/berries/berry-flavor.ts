import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IBerryFlavor {
  id: number;
  name: string;
  berries: IFlavorBerryMap[];
  contest_type: INamedApiResource;
  names: IName[];
}

export interface IFlavorBerryMap {
  potency: number;
  berry: INamedApiResource;
}
