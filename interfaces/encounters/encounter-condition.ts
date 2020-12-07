import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IEncounterCondition {
  id: number;
  name: string;
  names: IName[];
  values: Array<INamedApiResource>;
}
