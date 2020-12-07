import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IBerryFirmness {
  id: number;
  name: string;
  berries: Array<INamedApiResource>;
  names: IName[];
}
