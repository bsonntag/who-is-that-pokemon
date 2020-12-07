import { IDescription, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IMoveLearnMethod {
  id: number;
  name: string;
  descriptions: IDescription[];
  names: IName[];
  version_groups: Array<INamedApiResource>;
}
