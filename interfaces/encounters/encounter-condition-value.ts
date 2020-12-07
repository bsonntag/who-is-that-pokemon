import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IEncounterConditionValue {
  id: number;
  name: string;
  condition: Array<INamedApiResource>;
  names: IName[];
}
